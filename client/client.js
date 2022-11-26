let http = require('http');
let args = {
  host: 'server',
  port: 9000,
  path: '/hello'
};

let req = http.get(args, function (res) {
  console.log('Hello from client');
});

req.on('error', function (e) {
  console.log('ERROR: ' + e.message);
});
