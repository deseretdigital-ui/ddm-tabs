var React = require('react/addons');

var emptyFunction = function() {};

var TabButton = React.createClass({
  propTypes: {
    tabUuid: React.PropTypes.number.isRequired,
    active: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      active: false,
      onClick: emptyFunction
    }
  },

  handleClick: function() {
    this.props.onClick(this.props.tabUuid);
  },

  render: function() {
    var classes = {
      'ddm-tabs__button': true,
      'ddm-tabs__button--active': this.props.active
    };

    return (
      <a
        className={React.addons.classSet(classes)}
        onClick={this.handleClick}
      >
        {this.props.children}
      </a>
    );
  }
});

module.exports = TabButton;
