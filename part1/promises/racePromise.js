/**
 * Example of a race promise
 *
 * Race promise triggers when first promise either succeeds or fails
 *
 * Run with node racePromise.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */


function slowApi(id, val) {
    console.log("Call "+ id + " started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Call "+ id + " ready!");
            resolve({id: id, value: val * 5});
        },val * 200);
    });
}

// Make multiple calls and place them on an array
let apiCalls = [slowApi("A", 7), slowApi("B", 3), slowApi("C", 4), slowApi("D", 5)];

Promise.race(apiCalls).then(values => {
    console.log("One Api call solved: ", values);
});


