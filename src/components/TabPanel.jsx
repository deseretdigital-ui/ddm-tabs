var React = require('react');
var cx = require('classnames');

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
    var classes = {
      'ddm-tabs__panel': true,
      'ddm-tabs__panel--active': this.props.active
    };

    return (
      <div className={cx(classes)}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = TabPanel;
