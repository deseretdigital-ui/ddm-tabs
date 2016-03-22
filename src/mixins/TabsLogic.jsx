var React = require('react');

var Tab = require('../components/Tab');
var TabButton = require('../components/TabButton');
var TabPanel = require('../components/TabPanel');

var getTabId = require('../utils/getTabId');
var emptyFunction = require('../utils/emptyFunction');

var TabsLogic = {
  propTypes: {
    onTabActive: React.PropTypes.func,
    activeId: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      onTabActive: emptyFunction,
      activeId: ''
    }
  },

  getInitialState: function() {
    return {
      activeId: null
    };
  },

  componentWillMount: function() {
    this.addIdsToTabChildren();
    this.setInitialActiveId();
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.activeId && nextProps.activeId !== this.state.activeId) {
      this.setState({ activeId: nextProps.activeId }, function() {
        this.props.onTabActive(nextProps.activeId);
      });
    }
  },

  addIdsToTabChildren: function() {
    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab && child.props.id === undefined) {
        child.props.id = getTabId();
      }
    });
  },

  setInitialActiveId: function() {
    var activeId = this.props.activeId || null;
    var firstId = null;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab) {
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

  activateTab: function(id, alwaysActivateTab) {
    if (alwaysActivateTab === undefined) {
      alwaysActivateTab = false;
    }

    if (alwaysActivateTab || this.state.activeId !== id) {
      this.setState({activeId: id}, function() {
        this.props.onTabActive(id);
      });
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
      if (child.type === Tab) {

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
      if (child.type === Tab) {

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
  }
};

module.exports = TabsLogic;
