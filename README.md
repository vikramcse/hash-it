# hash-it
A small library to create hash of string using node crypto api

## Usage
```js
	var hashIt = require('hash-it');
	var hash = hashIt('this is data', 'sha256');
	console.log(hash);
	// -> "89929e06f79af995066ec32e308cc76cde08fe4120816fdca52c02515a0c2a11"
```

## API
### hashIt(data, algorithm)
Returns a string.
