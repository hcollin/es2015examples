/**
 * Example of a simple promise
 *
 *
 * Run with node simplePromise.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */


function slowApi(val) {
    return new Promise((resolve, reject) => {
        if(val > 10) {
            reject("Maximum call number is 10! Provided number was "+ val);
        } else {
            setTimeout(() => {
                resolve(val*5);
            },val * 500);
        }
    });
}

function callApi(id, value) {
    console.log("\nCall: " + id);
    slowApi(value).then(res => {
        console.log("\tSlow Api call " + id +" is ready with results:", res);
    }).catch(err => {
        console.log("\tCall " + id + " failed!", err);
    });
}

console.log("\nCalling Slow API!");

callApi("A", 6);
callApi("B", 3);
callApi("C", 12);

console.log("All calls done!");

