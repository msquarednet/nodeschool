var http = require('http');
var url = require('url');

var port = process.argv[2];
var d;	//date

var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'application/json' });

	if(req.method!=='GET') {
		return res.end('send me a GET, instead.');
	}

	var urlObj = url.parse(req.url, true);

    var pathname = urlObj.pathname;
    var query = urlObj.query;

    if (pathname==='/api/parsetime') {
    	if (query.iso) {
    		d = new Date(query.iso);
    		res.end( JSON.stringify( {'hour':d.getHours(), 'minute':d.getMinutes(), 'second':d.getSeconds()} ) );
    	}
    } else if (pathname==='/api/unixtime') {
    	if (query.iso) {
    		res.end( JSON.stringify( {'unixtime':Date.parse(query.iso)} ) );
    	}
    } else {
    	res.writeHead(404);
    	res.end();
    }

})
server.listen(port);
