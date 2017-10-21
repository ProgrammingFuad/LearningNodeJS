var http = require('http');

var options = {
  host: 'www.pluralsight.com',
  port: '80',
  path: '/',
  method: 'get'
};

console.log("Going to make a request....");

http.get(options, function(response){
  console.log(response.statusCode);
  response.pipe(process.stdout);

});
