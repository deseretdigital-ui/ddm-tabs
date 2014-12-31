var React = require('react/addons');

var Tab = require('./Tab');
var TabButton = require('./TabButton');
var {Collapsible, CollapsibleHead, CollapsibleBody, CollapsibleGroup} = require('ddm-collapsible');

var getTabId = require('../utils/getTabId');
var emptyFunction = require('../utils/emptyFunction');

var cx = React.addons.classSet;

var Tabs = React.createClass({
  propTypes: {
    shrinkToCollapsible: React.PropTypes.bool,
    shrinkWidth: React.PropTypes.number,
    onTabActivated: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      shrinkToCollapsible: true,
      shrinkWidth: 768,
      onTabActivated: emptyFunction
    }
  },

  getInitialState: function() {
    return {
      activeId: null,
      windowWidth: window.innerWidth
    };
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },

  componentWillMount: function() {
    var activeId = null;
    var firstId = null;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab.type && child.props.id === undefined) {
        child.props.id = getTabId();

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

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function() {
    if (this.props.shrinkToCollapsible
      && this.state.windowWidth <= this.props.shrinkWidth
    ) {
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
            onOpen={self.activateTab.bind(null, child.props.id)}
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

  activateTab: function(id) {
    this.setState({activeId: id});
  }
});

module.exports = Tabs;
