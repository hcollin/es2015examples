/**
 * Example of classes with ECMAScript 5
 *
 * inheritance example
 *
 * Run with node classesInheritanceES5.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */
 
 
 
 /**
  * This is the BaseClass that is inherited
  */
 var BaseClass = function(a) { 
	this.a = a;
 };
 BaseClass.prototype.add = function(b) {
	this.a += b; 
 }
 
 
 
/**
 * This is the MainClass that inherits the BaseClass
 */
 var MyClass = function(a, target) {
	 BaseClass.call(this, a);
	 this.target = target;
 }
 MyClass.prototype = Object.create(BaseClass.prototype);
 MyClass.prototype.isReady = function() {
	 return this.a >= this.target;
 }
 MyClass.prototype.constructor = MyClass;
 
 
/**
 * Demo code
 */
let ticker = new MyClass(1, 4);
console.log("After initialization: ", ticker);

while(!ticker.isReady()) {
	console.log("Tick: ", ticker.a);
	ticker.add(1);
}

console.log("\nLAST:", ticker.a);


