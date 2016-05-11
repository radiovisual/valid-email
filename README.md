# valid-email

> Validate Email Addresses without pure regular expressions.

Regular expression validation is often useful, but often inaccurate. 
Sometimes it's just better to do it manually.


## Install

```
$ npm install --save valid-email
```


## Usage

```js
const validEmail = require('valid-email');

validEmail('john@iamjohnhenry.com');
//=> true

validEmail('iamjohnhenry.com');
//=> false
```

## License 

MIT
