# get-accepted

This module sets the accept header of a get request to a url to
the specified mimetypes and then also aborts the request when the
returned mimetypes don't match this mimetypes.

It doesnt support wildcard mimetypes yet.

Install with `npm install get-accepted`.

## Usage

```javascript
var getAccepted = require('get-accepted');

var url = 'http://www.npmjs.org';
var mimetypes = ['text/html'];

getAccepted(url, mimetypes, function (res) {
  if (res) {
    res.pipe(process.stdout);
  }
});

```
