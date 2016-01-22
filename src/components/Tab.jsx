var React = require('react');

var emptyFunction = require('../utils/emptyFunction');

// Dummy component that gets split into TabPanel and TabButton
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

  render: function() {
    return (
      <div className="alert alert--error">
        <strong>This Tag should not render!</strong>
      </div>
    );
  }
});

module.exports = Tab;
