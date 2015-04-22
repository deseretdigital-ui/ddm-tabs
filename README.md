# DDM Tabs

Documentation coming soon

## Simple Example

```js
React.render(
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

## Caution
The TabsResponsive component uses a polyfill called media-match that conflicts with a polyfill
used in respond.js.  The media-match has additional methods on the window.matchMedia that the
other polyfill does not have.  Media-match will not create that method if it already exists
(which is what the respond.js polyfill does).
If you use both TabsResponsive and respondjs, include a version of media.match.js before
respond.js so it's version of window.matchMedia wins.  This applies to IE 8 & 9.
