
var mymod = require('./mymod.js');	//.js is optional

var dir = process.argv[2];
var ext = process.argv[3];

function displayFiles(err,data) {
	if (err) {return console.error("Error... ", err)};
	data.forEach(function(file) {
		console.log(file);
	});
}

//mymod.getFilterFileListing(dir, ext, displayFiles);
mymod(dir, ext, displayFiles);