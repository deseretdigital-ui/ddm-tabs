var React = require('react');

var Tab = require('./Tab');
var TabsLogic = require('../mixins/TabsLogic');

var {Collapsible, CollapsibleHead, CollapsibleBody, CollapsibleGroup} = require('ddm-collapsible');

var mediaMatch = require('media-match/media.match.js');

var TabsResponsive = React.createClass({
  mixins: [TabsLogic],

  propTypes: {
    convertQuery: React.PropTypes.string,
    collapsibleSpeed: React.PropTypes.number
  },

  mediaQuery: null,

  getDefaultProps: function() {
    return {
      convertQuery: '(max-width: 767px)',
      collapsibleSpeed: 700
    }
  },

  getInitialState: function() {
    return {
      renderAsCollapsibleGroup: false
    };
  },

  componentWillMount: function() {
    this.addMediaMatch();
  },

  componentWillUnmount: function() {
    this.mediaQuery.removeListener(this.observeMediaQuery);
  },

  addMediaMatch: function() {
    var query = this.props.convertQuery;
    if (!query.match(/\(|\)/)) {
      query = '(' + this.props.convertQuery + ')';
    }

    this.mediaQuery = window.matchMedia(query);
    this.mediaQuery.addListener(this.observeMediaQuery);

    this.observeMediaQuery();
  },

  observeMediaQuery: function() {
    this.setState({renderAsCollapsibleGroup: this.mediaQuery.matches});
  },

  render: function() {
    if (this.state.renderAsCollapsibleGroup) {
      return this.renderAsCollapsibleGroup();
    } else {
      return this.renderAsTabs();
    }
  },

  renderAsCollapsibleGroup: function() {
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
      if (child.type === Tab) {
        var open = child.props.id === self.state.activeId;

        collapsibles.push(
          <Collapsible
            open={open}
            key={'react-tab-collapsible-' + child.props.id}
            onOpen={self.getChildCollapsibleOnOpenMethod(child)}
          >
            <CollapsibleHead>
              <div className="ddm-tabs__collapsible-head">
                {child.props.title}
              </div>
            </CollapsibleHead>
            <CollapsibleBody speed={self.props.collapsibleSpeed}>
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

  getChildCollapsibleOnOpenMethod: function(child) {
    var tabs = this;

    return function() {
      tabs.activateTab(child.props.id, true);
      child.props.onTabActive(child.props.id);
    };
  }
});

module.exports = TabsResponsive;
