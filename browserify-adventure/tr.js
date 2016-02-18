//var through = require('through2');
//var sprintf= require('sprintf');
//
//module.exports = function (file) {
////    return through(function (buf, enc, next) {
////        this.push(buf.toString('utf8').replace(/\$CWD/g, process.cwd()));
////        next();
////    });
//		
////file.split('\n').forEach(function(curr,idx,arr) {
////	if (idx%5===0) {
////		console.log(sprintf('%3d %s', idx,  curr))		
////	} else {
////		console.log(sprintf('    '+ curr))
////	}
////});	
//	
//	
//};


  var through = require('through2');
  var split = require('split');
  var sprintf = require('sprintf');
  var quote = require('quote-stream');
  var combiner = require('stream-combiner');
  
  module.exports = function (file) {
      if (!/\.txt$/.test(file)) return through();
      var num = 0;
      var liner = through(function write (buf, enc, next) {
          var line = buf.toString('utf8') + '\n';
          if (num % 5 === 0) {
              this.push(sprintf('%3d %s', num, line));
          }
          else this.push('    ' + line);
          num ++;
          next();
      });
      var prefix = through();
      prefix.write('module.exports=');
      return combiner(split(), liner, quote(), prefix);
  };