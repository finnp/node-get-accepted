var getAccepted = require('./index.js');

var testUrl = 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.js';

getAccepted(testUrl, ['image/jpeg', 'application/javascript'], function (res) {
  if (res) {
    res.pipe(process.stdout);
  } else {
    console.log('Not matching');
  }
});
