
var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function (req, res) {
	// request handling logic...
	res.writeHead(200, { 'content-type': 'text/plain' });
	var stream = fs.createReadStream(path).pipe(res);	//setting var unnecessary
})
server.listen(port);

