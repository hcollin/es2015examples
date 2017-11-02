/**
 * Example of classes with ECMAScript 2015
 *
 * inheritance example
 *
 * Run with node classesES6.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */


 
 /**
  * This is the BaseClass that is inherited
  */
class BaseClass {
	
	constructor(a) {
		this.a = a;
	}
	
	add(b) {
		this.a += b;
	}
	
}


/**
 * This is the MainClass that inherits the BaseClass
 */
class MyClass extends BaseClass {
	
	constructor(a,target) {
		super(a);
		this.target = target;
	}
	
	isReady() {
		return this.a >= this.target;
	}
	
}


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




