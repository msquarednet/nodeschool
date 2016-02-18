var fs = require('fs');
var path = require('path');

module.exports = function getFilterFileListing(dir, ext, callback) {
	//console.log('getFilterFileListing()...')
	fs.readdir(dir, function(err, files) {
		if (err) {return callback(err)};
		files = files.filter(function(f){
			return path.extname(f)==="."+ext;
		})
		callback(null, files);
	});
}

// var mymod = {
// 	getFilterFileListing: getFilterFileListing
// };
// module.exports = mymod;