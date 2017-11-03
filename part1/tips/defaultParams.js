/**
 * Example of default parameters
 *
 * Run with node defaultParams.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */



function foo(a="bar", b=true) {
    console.log("\na is: ", a);
    console.log("b is: ", b);
}


foo();
foo("jee");
foo("joo", false);