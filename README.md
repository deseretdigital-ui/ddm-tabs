# DDM Tabs

Documentation coming soon

## Simple Example

```js
ReactDom.render(
  <Tabs>
    <Tab title="Frogs">
      <p>Frogs live in ponds.</p>
    </Tab>
    <Tab title="Sea Turtles">
      <p>Sea turtles live in seas.</p>
    </Tab>
  </Tabs>,
  document.getElementById('idOfTargetElement')
);
```

## Programmaticlly Change The Active Tab Based On State/Props

Programmaticlly changing the active tab currently only works for the `<Tabs>` component and **NOT** the `<TabsResponsive>` component.

```js
var ProgrammaticallyChangedActiveTab = React.createClass({

  getInitialState: function() {
    return {
      activeId: 'frogs'
    }
  },

  _handleButton: function(type, e) {
    e.preventDefault();
    this.setState({ activeId: type });
  },

  render: function() {
    return (
      <div>
        <button onClick={this._handleButton.bind(this, 'frogs')}>Frogs</button>
        <button onClick={this._handleButton.bind(this, 'turtles')}>Turtles</button>
        
        <Tabs activeId={this.state.activeId}>
          <Tab title="Frogs" id="frogs">
            <p>Frogs live in ponds.</p>
          </Tab>
          <Tab title="Turtles" id="turtles">
            <p>Sea turtles live in seas.</p>
          </Tab>
        </Tabs>
      </div>
    );
  }

});

ReactDOM.render(
  <ProgrammaticallyChangedActiveTab />,
  document.getElementById('idOfTargetElement')
);
```