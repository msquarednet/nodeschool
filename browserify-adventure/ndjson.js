exports.parse = function (str) {
	return str.split('\n').map(JSON.parse);
}

exports.stringify = function (rows) {
	return rows.map(JSON.stringify).join('\n');
}
//module.exports.parse = f.. also okay

//NO
//exports = {
//	parse: parse,
//	stringify: stringify
//}

//OKAY
//module.exports = ...