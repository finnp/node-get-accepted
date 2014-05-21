var http = require('http');
var https = require('https');
var urlParse = require('url').parse;

module.exports = function(url, mimetypes, cb) {
  var protocol;
  if(url.indexOf('https') === 0)
    protocol = https;
  else
    protocol = http;

  if(typeof mimetypes === 'string') {
    mimetypes = [mimetypes];
  }

  var options = urlParse(url);

  options.headers = {
    accept: mimetypes.join(', ')
  }

  var req = protocol.get(options, function(res) {
    var mimetype = res.headers['content-type'];
    if (mimetypes.indexOf(mimetype) === -1) {
      req.abort();
      cb(false);
    } else {
      cb(res);
    }
  });
};
