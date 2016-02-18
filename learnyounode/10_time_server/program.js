
var net = require('net');

var port = process.argv[2];

var server = net.createServer(function (socket) {
	// socket handling logic
	socket.end(getDateString()+"\n");
	//console.log(socket);
	//console.log(getDateString());
})

server.listen(port);



//util
function pad2(num) {
	return (num < 10 ? '0' : '') + num;
}
function getDateString(d) {
	var d = d || new Date();
	return pad2(d.getFullYear()) +"-"+ pad2(d.getMonth()+1) +"-"+ pad2(d.getDate()) +" "+ pad2(d.getHours()) +":"+ pad2(d.getMinutes());
}

