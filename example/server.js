const http = require('http');
const data = {'data':'hello'};
const url = require('url');
const queryString = require('querystring');

http.createServer(function(req, res) {
  var params = url.parse(req.url);
  console.log(params);
  if(params.query && queryString.parse(params.query).jsonpCallback) {
    console.log(1231232);
    const str = queryString.parse(params.query).jsonpCallback + '(' + JSON.stringify(data) + ')';
    // setTimeout(() => {
      res.end(str)
    // }, 10000)
  } else {
    res.end(JSON.stringify(data));
  }
}).listen(5000, () => {
  console.log('server is running at 5000');
});
