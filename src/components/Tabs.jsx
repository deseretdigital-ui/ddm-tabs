var React = require('react/addons');

var Tab = require('./Tab');
var TabButton = require('./TabButton');

var cx = React.addons.classSet;

var tabUuid = 0;
function getTabUuid() {
  return ++tabUuid;
};

var Tabs = React.createClass({
  getInitialState: function() {
    return {
      activeUuid: null,
      windowWidth: window.innerWidth
    };
  },

  componentWillMount: function() {
    var activeUuid = null;
    var firstUuid = null;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab.type && child.props.uuid === undefined) {
        child.props.uuid = getTabUuid();

        if (child.props.active && activeUuid === null) {
          activeUuid = child.props.uuid;
        }

        if (firstUuid === null) {
          firstUuid = child.props.uuid;
        }
      }
    });

    if (activeUuid === null) {
      activeUuid = firstUuid;
    }

    this.setState({'activeUuid': activeUuid});
  },

  render: function() {
    return this.renderAsTabs();
  },

  renderAsTabs: function() {
    var self = this;
    var tabList = [];

    React.Children.forEach(this.props.children, function(child) {
      if (child.type === Tab.type) {
        child.props.active = child.props.uuid === self.state.activeUuid;

        tabList.push(
          <TabButton
            tabUuid={child.props.uuid}
            active={child.props.active}
            onClick={self.handleTabButtonClick}
            key={'react-tab-button-' + child.props.uuid}
          >
            {child.props.title}
          </TabButton>
        );
      }
    });

    return (
      <div className="ddm-tabs">
        <div className="ddm-tabs__head">
          {tabList}
        </div>
        {this.props.children}
      </div>
    );
  },

  handleTabButtonClick: function(uuid) {
    this.setState({activeUuid: uuid});
  }
});

module.exports = Tabs;
