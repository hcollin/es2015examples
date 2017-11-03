/**
 * Example of arrow functions different syntaxes
 *
 * Run with node arrowStyles.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */

function callbackCaller(callback) {
    console.log("\nCallback: \n", callback(1, "a"));
}

// Simple arrow function without arguments.
callbackCaller(() => {
    let a = 0;
    a++;
    return a;
});

// Arrow function with one argument does not need ( ) around them
callbackCaller(i => {
    let y = 5;
    return y + i;
});

//Arrow function with multiple arguments
callbackCaller((i, s) => {
    const splitter = "_";
    let id = s + splitter + i;
    return id;
});

// The last line of the arrow function is automatically returned and single line functions can omit curly brackets.
callbackCaller((i) => i+5);