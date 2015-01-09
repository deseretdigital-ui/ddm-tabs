var React = require('react/addons');

var TabPanel = React.createClass({
  propTypes: {
    tabId: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      active: false
    };
  },

  render: function() {
    classes = {
      'ddm-tabs__panel': true,
      'ddm-tabs__panel--active': this.props.active
    };

    return (
      <div className={React.addons.classSet(classes)}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = TabPanel;
