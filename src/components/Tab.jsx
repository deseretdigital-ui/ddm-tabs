var React = require('react/addons');

var Tab = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    uuid: React.PropTypes.number.isRequired,
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

module.exports = Tab;
