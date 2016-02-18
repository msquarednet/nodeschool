
var http = require('http');
var bl = require('bl');		//(Buffer List, from npm)

var geturl = process.argv[2];

function doStuff(res) {	
	res.pipe(bl(function(err,data) {
        if (err) {return console.error(err)};
        data = data.toString()
        console.log(data.length)
        console.log(data)
   	}));
}

http.get(geturl, doStuff);


/*	OFFICIAL
    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })
 */