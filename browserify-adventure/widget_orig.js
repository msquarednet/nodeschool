var domify = require('domify');


function Widget() {
	var dom = domify('<div>Hello <span class="name"></span>!</div>');
	
	function setName(str) {
		dom.querySelector('.name').textContent = str;
	}
	function appendTo(target) {
		target.appendChild(dom);
	}
	
	return {
		setName: setName,
		appendTo: appendTo
	};
}


module.exports = Widget;





//	alternative:
//
//  var domify = require('domify');
//  var html = '<div>Hello <span class="name"></span>!</div>';
//  
//  module.exports = Widget;
//  
//  function Widget () {
//    if (!(this instanceof Widget)) return new Widget;
//    this.element = domify(html);
//  }
//  
//  Widget.prototype.setName = function (name) {
//    this.element.querySelector('.name').textContent = name;
//  };
//  
//  Widget.prototype.appendTo = function (target) {
//    target.appendChild(this.element);
//  };
