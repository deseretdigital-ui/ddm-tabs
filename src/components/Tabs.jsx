var React = require('react/addons');

var Tab = require('./Tab');
var TabButton = require('./TabButton');
var TabPanel = require('./TabPanel');
var {Collapsible, CollapsibleHead, CollapsibleBody, CollapsibleGroup} = require('ddm-collapsible');

var getTabId = require('../utils/getTabId');
var emptyFunction = require('../utils/emptyFunction');

var mediaMatch = require('media-match/media.match.js');

var Tabs = React.createClass({
  propTypes: {
    convertToCollapsibleGroup: React.PropTypes.bool,
    convertQuery: React.PropTypes.string,
    collapsibleSpeed: React.PropTypes.number,
    onTabActive: React.PropTypes.func
  },

  mediaQuery: null,

  getDefaultProps: function() {
    return {
      convertToCollapsibleGroup: true,
      convertQuery: '(max-width: 768px)',
      collapsibleSpeed: 700,
      onTabActive: emptyFunction
    }
  },

  getInitialState: function() {
    return {
      activeId: null,
      renderAsCollapsibleGroup: false
    };
  },

  componentWillMount: function() {
    if (this.props.convertToCollapsibleGroup) {
      this.addMediaMatch();
    }

    this.addIdsToTabChildren();
    this.setInitialActiveId();
  },

  componentWillUnmount: function() {
    this.mediaQuery.removeListener(this.observeMediaQuery);
  },

  addMediaMatch: function() {
    var query = this.props.convertQuery;
    if (!query.match(/\(|\)/)) {
      query = '(' + this.props.convertQuery + ')';
    }

    this.mediaQuery = window.matchMedia(query);
    this.mediaQuery.addListener(this.observeMediaQuery);

    this.observeMediaQuery();
  },

  observeMediaQuery: function() {
    this.setState({renderAsCollapsibleGroup: this.mediaQuery.matches});
  },

  addIdsToTabChildren: function() {
    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab.type && child.props.id === undefined) {
        child.props.id = getTabId();
      }
    });
  },

  setInitialActiveId: function() {
    var activeId = null;
    var firstId = null;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab.type) {
        if (child.props.active && activeId === null) {
          activeId = child.props.id;
        }

        if (firstId === null) {
          firstId = child.props.id;
        }
      }
    });

    if (activeId === null) {
      activeId = firstId;
    }

    this.setState({'activeId': activeId});
  },

  activateTab: function(id) {
    this.setState({activeId: id});
    this.props.onTabActive(id);
  },

  render: function() {
    if (this.state.renderAsCollapsibleGroup) {
      return this.renderAsCollapsibleGroup();
    } else {
      return this.renderAsTabs();
    }
  },

  renderAsTabs: function() {
    var tabButtons = this.renderTabButtons();
    var tabPanels = this.renderTabPanels();

    return (
      <div className="ddm-tabs">
        <div className="ddm-tabs__head">
          {tabButtons}
        </div>
        {tabPanels}
      </div>
    );
  },

  renderTabButtons: function() {
    var tabButtons = [];
    var self = this;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab.type) {

        tabButtons.push(
          <TabButton
            tabId={child.props.id}
            active={self.state.activeId === child.props.id}
            onClick={self.activateTab}
            onTabActive={child.props.onTabActive}
            key={'react-tab-button-' + child.props.id}
          >
            {child.props.title}
          </TabButton>
        );
      }
    });

    return tabButtons;
  },

  renderTabPanels: function() {
    var tabPanels = [];
    var self = this;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab.type) {

        tabPanels.push(
          <TabPanel
            tabId={child.props.id}
            active={self.state.activeId === child.props.id}
            key={'react-tab-panel-' + child.props.id}
          >
            {child.props.children}
          </TabPanel>
        );
      }
    });

    return tabPanels;
  },

  renderAsCollapsibleGroup: function() {
    var collapsibles = this.renderCollapsibles();

    return (
      <CollapsibleGroup accordion={true} className="ddm-tabs ddm-tabs--collapsible">
        {collapsibles}
      </CollapsibleGroup>
    );
  },

  renderCollapsibles: function() {
    var collapsibles = [];
    var self = this;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab.type) {
        var open = self.state.activeId === child.props.id;

        collapsibles.push(
          <Collapsible
            open={open}
            key={'react-tab-collapsible-' + child.props.id}
            onOpen={self.getChildCollapsibleOnOpenMethod(child)}
          >
            <CollapsibleHead>
              <div className="ddm-tabs__collapsible-head">
                {child.props.title}
              </div>
            </CollapsibleHead>
            <CollapsibleBody speed={self.props.collapsibleSpeed}>
              <div className="ddm-tabs__collapsible-body">
                {child.props.children}
              </div>
            </CollapsibleBody>
          </Collapsible>
        );
      }
    });

    return collapsibles;
  },

  getChildCollapsibleOnOpenMethod: function(child) {
    var tabs = this;

    return function() {
      tabs.activateTab(child.props.id);
      child.props.onTabActive(child.props.id);
    };
  }
});

module.exports = Tabs;
