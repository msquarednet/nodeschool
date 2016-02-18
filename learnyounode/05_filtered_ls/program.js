var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

function listFiles(err,files) {
	var f;
	// for (var i=0; i<files.length; i++) {
	// 	f = files[i];
	// 	if (path.extname(f)==="."+ext) {console.log(f);}
	// }
	files.forEach(function(f){
		if (path.extname(f)==="."+ext) {console.log(f);}
	})
}

fs.readdir(dir, listFiles);