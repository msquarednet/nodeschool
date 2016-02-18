
var http = require('http');
var bl = require('bl');		//(Buffer List, from npm)

var urls_array = [process.argv[2], process.argv[3], process.argv[4]];
var results_array = [];
var cntr = 0;


function displayResults() {	
  results_array.forEach(function(item) {
    console.log(item);
  });
}
function httpGet(i) {
  http.get(urls_array[i], function(res) {
    res.pipe(bl(function(err,data) {          
        if (err) {return console.error(err)};
        results_array[i] = data.toString();  
        cntr++;
        if (cntr===3) {displayResults()};
    }));

  });  
}


for (var i=0; i<urls_array.length; i++) {   //note: cant just put everything in here
  httpGet(i);
}

