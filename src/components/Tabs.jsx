var React = require('react');

var TabsLogic = require('../mixins/TabsLogic');

var Tabs = React.createClass({
  mixins: [TabsLogic],

  render: function() {
    return this.renderAsTabs();
  }
});

module.exports = Tabs;
