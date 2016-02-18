//console.log(process.argv);
//console.log(process.argv.length);

var sum=0;
for (var i=2, l=process.argv.length; i<l; i++) {
	sum += parseInt(process.argv[i]);
}
console.log(sum);