var React = require('react/addons');

var Tab = require('./Tab');
var TabButton = require('./TabButton');
var {Collapsible, CollapsibleHead, CollapsibleBody, CollapsibleGroup} = require('ddm-collapsible');

var getTabId = require('../utils/getTabId');
var emptyFunction = require('../utils/emptyFunction');

var mediaMatch = require('media-match/media.match.js');

var cx = React.addons.classSet;

var Tabs = React.createClass({
  propTypes: {
    shrinkToCollapsible: React.PropTypes.bool,
    shrinkQuery: React.PropTypes.string,
    onTabActive: React.PropTypes.func
  },

  mediaQuery: null,

  getDefaultProps: function() {
    return {
      shrinkToCollapsible: true,
      shrinkQuery: '(max-width: 768px)',
      onTabActive: emptyFunction
    }
  },

  getInitialState: function() {
    return {
      activeId: null,
      renderAsCollapsible: false
    };
  },

  componentWillMount: function() {
    if (this.props.shrinkToCollapsible) {
      this.addMediaMatch();
    }

    this.addIdsToTabChildren();
    this.setInitialActiveId();
  },

  componentWillUnmount: function() {
    this.mediaQuery.removeListener(this.observeMediaQuery);
  },

  addMediaMatch: function() {
    var query = this.props.shrinkQuery;
    if (!query.match(/\(|\)/)) {
      query = '(' + this.props.shrinkQuery + ')';
    }

    this.mediaQuery = window.matchMedia(query);
    this.mediaQuery.addListener(this.observeMediaQuery);

    this.observeMediaQuery();
  },

  observeMediaQuery: function() {
    this.setState({renderAsCollapsible: this.mediaQuery.matches});
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
    if (this.state.renderAsCollapsible) {
      return this.renderAsCollapsible();
    } else {
      return this.renderAsTabs();
    }
  },

  renderAsTabs: function() {
    var tabList = this.renderTabList();

    return (
      <div className="ddm-tabs">
        <div className="ddm-tabs__head">
          {tabList}
        </div>
        {this.props.children}
      </div>
    );
  },

  renderTabList: function() {
    var tabList = [];
    var self = this;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab.type) {
        child.props.active = child.props.id === self.state.activeId;

        tabList.push(
          <TabButton
            tabId={child.props.id}
            active={child.props.active}
            onClick={self.activateTab}
            key={'react-tab-button-' + child.props.id}
          >
            {child.props.title}
          </TabButton>
        );
      }
    });

    return tabList;
  },

  renderAsCollapsible: function() {
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
        var open = child.props.id === self.state.activeId;

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
            <CollapsibleBody speed={1200}>
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
