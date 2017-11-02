/**
 * Example of a simple promise
 *
 *
 * Run with node simplePromise.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */


function slowApi(id, val) {
    console.log("Call "+ id + " started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Call "+ id + " ready!");
            resolve(val*5);
        },val * 200);
    });
}

// Make multiple calls and place them on an array
let apiCalls = [slowApi("A", 7), slowApi("B", 3), slowApi("C", 4), slowApi("D", 5)];

Promise.all(apiCalls).then(values => {
   console.log("All api calls done: ", values);
});






