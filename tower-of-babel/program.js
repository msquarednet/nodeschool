/*
    $ npm install babel-cli -g
    $ babel-node program.js
*/


//BABEL SETUP
//var str = process.argv[2];
//console.log(`Hello ${str}`);



//CLASS
//class Character {
//	constructor(x,y) {
//		this.x = x;
//		this.y = y;
//		this.health = 100;
//	}
//	damage() {this.health -=10;}
//	getHealth() {return this.health;}
//	toString() {return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`}
//}
//
//var x = process.argv[2];
//var y = process.argv[3];
//var character = new Character(+x, +y);
//character.damage();
//console.log(character.toString());



//CLASS EXTEND
//class Character {
//	constructor(x,y) {
//		this.x = x;
//		this.y = y;
//		this.health = 100;
//	}
//	damage() {this.health -=10;}
//	getHealth() {return this.health;}
//	toString() {return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`}
//}
//
//class Player extends Character {
//	constructor(x,y,name) {
//		super(x,y);
//		this.name = name;
//	}
//	move(dx,dy) {
//		this.x += dx;
//		this.y += dy;
//	}
//	toString() {
//		return `name: ${this.name} ${super.toString()}`
//	}
//}
//
//var x = process.argv[2];
//var y = process.argv[3];
//var name = process.argv[4];
//var character = new Character(+x, +y);
//character.damage();
//console.log(character.toString());
//var player = new Player(+x, +y, name);
//player.damage();
//player.move(7,8);
//console.log(player.toString());



//MODULES WITH NAME
//var arg1 = process.argv[2];
//var arg2 = process.argv[3];
//import {PI, sqrt, square} from './Math';
//
//console.log(PI);
//console.log(sqrt(+arg1));
//console.log(square(+arg2));



//MODULES DEFAULT EXPORT
//var arg1 = process.argv[2];
//var arg2 = process.argv[3];
//import m from './Math';
//
//console.log(m.PI);
//console.log(m.sqrt(+arg1));
//console.log(m.square(+arg2));



//BLOCK SCOPE
//'use strict';
//// This variable `a` should be accessible outside of the block scope.
//let a = 5;
//
//// This variable `b` should not be reassignable.
//const b = process.argv[2];
//
//if (a === 5) {
//	// This variable `c` should only be valid in this block.
//	let c = 4;
//	console.log(c);  // 4
//
//	// This variable `b` should only be valid in this block and should not be reassignable.
//	const b = 8;
//	console.log(b); // 8
//}
//
//console.log(a); // 5
//console.log(b);
//try {
//	// Trying to change the value of `c`
//	c = 1000;
//} catch (e) {
//	// but an `c is not defined` error should occur.
//	console.log(e);
//}



//COMPUTED PROPERTY
//console.log({
//	[+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
//	[+process.argv[3] + +process.argv[2]]: +process.argv[3] + +process.argv[2]
//});



//ITERATOR FOR OF
//const max = process.argv[2];
//let FizzBuzz = {
//	[Symbol.iterator]() {
//		let num = 0;
//		return {
//			next: function() {
//				num++;
//				let val = num;
//				if (num%3===0 || num%5===0) {
//					val = ''
//					if (num%3===0) {val+='Fizz'}
//					if (num%5===0) {val+='Buzz'}
//				}
//				if (num<=max) {return {done:false, value:val}}
//				return {done:true}
//			}
//		}
//	}
//}
//
//for (let i of FizzBuzz) {
//	console.log(i);
//}



//GENERATOR
//const max = process.argv[2];
//let FizzBuzz = function*() {
//	let num = 1;
//	while (num <= max) {
//		let val = num;
//		if (num%3===0 || num%5===0) {
//			val = ''
//			if (num%3===0) {val+='Fizz'}
//			if (num%5===0) {val+='Buzz'}
//		}
//		num++;
//		yield val;
//	}
//}();
//
//for (let i of FizzBuzz) {
//	console.log(i);
//}



//DESTRUCTURE
//var json = {
//	"name": {
//		"first": "Yosuke",
//		"family": process.argv[2]
//	},
//	"birth": {
//		"year": 1982,
//		"month": 12,
//		"day": process.argv[3]
//	}
//};

//var {name:{family:familyName}, birth:{day:birthDay}} = json;

//console.log(familyName);
//console.log(birthDay);



//ARROW FUNCTION
//var inputs = process.argv.slice(2);
//var result = inputs.map( (x) => x.charAt(0) )
//									 .reduce( (soFar, x) => soFar+=x , '');
//console.log(result);



//REST AND SPREAD
//var rawArgs = process.argv.slice(2);
//var args = [];
//
//rawArgs.forEach(val => {
//	let commaSep = val.split(',');
//	commaSep.forEach(val => {
//		if(val !== '') args.push(+val);
//	});
//});
//
//const avg = (...arr) => {
//	return arr.reduce( (sum, x) => sum + x )/arr.length;
//}
//
//console.log(avg(...args));
