# utils.js

> A collection of reusable JavaScript utility functions.

### API

All available methods

- [removeEmptyProps](#removeEmptyProps)

#### `removeEmptyProps()`

The all method returns the underlying array represented by the collection:

```js
utils({ name: 'Alfie', age: '' }).removeEmptyProps();

// { name: 'Alfie' }
```