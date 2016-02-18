//BEEP BOOP
//console.log('BEEP BOOP');


//USING NPM PACKAGES
//var uniq = require('uniq');
//var str = prompt('enter comma seperated string...');
//var arr = str.split(',');
//console.log(uniq(arr));


//SINGLE EXPORT
//var uniquely = require('./uniquely');
//console.log(uniquely(prompt('enter string with commas')));


//MULTI EXPORT
//var nd = require('./ndjson');
//console.log(nd.parse(prompt('entre newline seperated string.')));
//console.log(nd.stringify(prompt('entre newline seperated array.')));


//BUILTINS
//var url = require('url');
//var qs  = require('querystring');
//
//var addr = prompt();
//var urlObj = url.parse(addr);	//console.log(urlObj);
//var query = urlObj.query;			//console.log(query);
//var params= qs.parse(query);
//console.log(url.resolve(addr, params.file));


//BUILD A WIDGET
//see widget.js


//USING TRANSFORMS
//var fs = require('fs');
//var sprintf= require('sprintf');
//
//var text = fs.readFileSync('/usr/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');
//text.split('\n').forEach(function(curr,idx,arr) {
//	if (idx%5===0) {
//		console.log(sprintf('%3d %s', idx,  curr))		
//	} else {
//		console.log(sprintf('    '+ curr))
//	}
//});


//WRITING TRANSFORMATIONS
//var txt = require('/usr/local/lib/node_modules/browserify-adventure/problems/writing_transforms/wake.txt');
//console.log(txt);
////need to run: browserify -g ./tr.js main.js | browserify-adventure verify
////(-g, not -t, as instructed)


//WIDGET WITH ASSETS
























