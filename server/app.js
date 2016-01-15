//const http = require('http');
//
//const hostname = '127.0.0.1';
//const port = 1337;
//
//http.createServer((req, res) => {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//res.end('Hello World\n');
//}).listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
//    });

var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

http.createServer(function(req, res){
    res.writeHead( 200, {'Content-Type' : 'text/plain'});
    res.end("Hello World");
}).listen(3000, '127.0.0.1');
console.log("server running on http://127.0.0.1:",port);