/**
 * Example of simple classes with ECMAScript 5 and 2015
 *
 *
 * Run with node classesSimpleExample.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */
 
 
 
 /**
  * ES2015 Class example
  */
 class TestClassA {
	 
	 constructor(origValue) {
		 this.origValue = origValue;
		 this.value = origValue;
	 }
	 
	 test(num) {
		this.value += this.origValue + num;
     }
	 
 }

 
 /**
  * ES5 style class with ES6 variables
  */
 function TestClassB(origValue) {
	
  const	originalValue = origValue;
  let currentValue = origValue;
  
  function testCalc(num) {
	  currentValue += origValue + num;
  }
  
  function getCurrentValue() {
	  return currentValue;
  }
	 
  return {
	test: testCalc,
	value: getCurrentValue
  };
 }
 
 const instA = new TestClassA(4);
 const instB = new TestClassA(5);
 
 const instC = new TestClassB(4);
 const instD = new TestClassB(5);
 
 for(let i=1;i <6;i++) {
	  instA.test(i);
	  instB.test(i);
	  instC.test(i);
	  instD.test(i);
	  
	  console.log("\nValues on round: "+ i);
	  console.log(instA.value, instB.value, instC.value(), instD.value());	 
 }
 
 console.log("\n\nES5 all attributes in ES5 style are private. \n");
 console.log("ES6 OrigValue :", instA.origValue);
 console.log("ES5 OrigValue :", instC.origValue);
 
 
 
