# required-fields

Check for required options fields on.
If the fields are absent, an exception is thrown.

```js
var required = require('required-fields');

function myFunction(options) {
  // Check for the required options on the options object.
  required(options, 'width', 'height');
  
  // Then, use the options by destructuring
  let {width, height, depth = 10} = options;
  
  // ...
  
}
```

If any field is absent, an exception will be thrown:

```
Error: Missing fields: width, height
```

## License

MIT License
