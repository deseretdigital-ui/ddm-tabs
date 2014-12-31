var React = require('react/addons');

var emptyFunction = require('../utils/emptyFunction');

var Tab = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool,
    onTabActive: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      active: false,
      onTabActive: emptyFunction
    };
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.active) {
      this.props.onTabActive(this.props.id);
    }
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

module.exports = Tab;
