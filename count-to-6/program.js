//HELLO ES6
//console.log('HELLO ES6');



//TEMPLATE STRINGS
//var str = process.argv[2];
//console.log(`Hello, ${str}!
//Your name lowercased is "${str.toLowerCase()}".`);



//ARROW FUNCTIONS part 1
//var inputs = process.argv.slice(2);
//var result = inputs
//								.map((x,idx,arr) => x.charAt(0))
//								.reduce((prev,x,idx,arr)=>prev+=x, '');
//console.log(`[${inputs}] becomes \"${result}\"`);



//ARROW FUNCTION AND THIS
//var foot = {
//	kick: function () {
//		this.yelp = "Ouch!";
//		setImmediate(() => console.log(this.yelp));
//	}
//};
//foot.kick();



//SPREAD
//var nums = process.argv.slice(2);
//var result = Math.min(...nums);
//console.log(`The minimum of [${nums}] is ${result}`);



//REST
//module.exports = (...args) => {
//	var sum = args.reduce( (soFar, x) => soFar+x, 0 );
//	return sum/args.length;
//};



//DEFAULT ARGUMENTS 1
//module.exports = (lo=0, hi=1) => {
//	return (lo+hi)/2;
//};



//DEFAULT ARGUMENTS 1
//module.exports = (str, len=str.length) => {
//	return `${str}${'!'.repeat(len)}`;
//}



//TAGGED TEMPLATE STRINGS
var who = process.argv[2];
var say = process.argv[3];
console.log(htmlify`<b>${who} says</b>: "${say}"`);
function htmlify(arr, ...args) {
	//console.log(arr);
	//console.log(args);
	return args.reduce( (soFar, x, idx) => soFar+=escape(x)+arr[idx+1], arr[0] )
}
function escape(s) {
	return s.replace(/&/g, "&amp;")
					.replace(/</g, "&lt;")
					.replace(/>/g, "&gt;")
					.replace(/'/g, "&apos;")
					.replace(/"/g, "&quot;");
}









