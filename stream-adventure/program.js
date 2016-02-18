//BEEP BOOP
//console.log('beep boop');


//MEET PIPE
//var fs = require('fs');
//var file=process.argv[2];
//fs.createReadStream(file).pipe(process.stdout);


//INPUT OUTPUT
//process.stdin.pipe(process.stdout);


//TRANSFORM
//var through = require('through2');
//var stream = through(write, end);
//
//function write (buffer, encoding, next) {
//    this.push(buffer.toString().toUpperCase());
//    next();
//}
//function end (done) {
//    done();
//}
//
//process.stdin.pipe(stream).pipe(process.stdout);


//LINES
//var through2 = require('through2');
//var split = require('split');
//var cntr=0;
//var tr = function (line, _, next) {
//    //console.dir(line.toString());		//THIS UNCOMMENTED MADE IT INCORRECT!!! Wow!
//    if (cntr++%2) {
//        this.push(line.toString().toUpperCase()+'\n');
//    } else {
//        this.push(line.toString().toLowerCase()+'\n');
//    }
//    next();
//}
//process.stdin
//    .pipe(split())
//    .pipe(through2(tr))
//    .pipe(process.stdout);


//CONCAT
//var concat = require('concat-stream');
//function cb(body) {
//	console.log(body.toString().split('').reverse().join(''));
//}
//process.stdin.pipe(concat(cb))	//.pipe(process.stdout); ???


//HTTP SERVER
//var http = require('http');
//var fs = require('fs');
//var through = require('through2');
//////process.stdin.pipe(through(write, end)).pipe(process.stdout);
//
//function write (buf, _, next) {
//	this.push(buf.toString().toUpperCase());
//	next();
//}
//////function end (done) { done(); }
//
//var server = http.createServer(function (req, res) {
//		if (req.method === 'POST') {
//				req
//					.pipe(through(write))
//					.pipe(res);
//		} else {
//			res.end('beep boop. send me a POST\n');
//		}
//});
//server.listen(process.argv[2], function() {console.log("Server listening on: http://localhost:%s", process.argv[2])});


//HTTP CLIENT
//var request = require('request');
//var r = request.post('http://localhost:8099/');
//process.stdin
//	.pipe(r)
//	.pipe(process.stdout);


//WEB SOCKETS
//var ws = require('websocket-stream');
//var stream = ws('ws://localhost:8099');
//stream.write('hello\n');	// OR //stream.end('hello\n');


//HTML STREAM
//var trumpet = require('trumpet');
//var through = require('through2');
//
//var tr = trumpet();
//var loud = tr.select('.loud').createStream();
//loud.pipe(through(upper)).pipe(loud);
//
//function upper (buf, _, next) {
//	this.push(buf.toString().toUpperCase());
//	next();
//}//function end (done) { done(); }
//
//process.stdin.pipe(tr).pipe(process.stdout);	


//DUPLEXER
var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function (cmd, args) {
    var ps = spawn(cmd, args);
    return duplexer(ps.stdin, ps.stdout);
};












































