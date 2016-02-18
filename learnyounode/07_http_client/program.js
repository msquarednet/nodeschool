
var http = require('http');

var geturl = process.argv[2];

function displayFiles(res) {	//response object is a Node Stream object (an object that emits events, 'data','error','end')

	res.setEncoding('utf8');
	res.on("data", function (data) {console.log(data)});	
	res.on("error", function (e) {console.log(e.message)});	//response.on('error', console.error)
	//res.on("end", function () {console.log('')});
}

http.get(geturl, displayFiles);