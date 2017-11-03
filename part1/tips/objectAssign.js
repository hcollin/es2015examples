/**
 * Example of Object.assign
 *
 * Run with node objectAssign.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */


const obj1 = {
    id: 1,
    name: "Henrik",
    city: "Tampere"
};

let obj2 = {
    id: 2,
    name: "Eero",
    age: 38
};

const workPlace = { place: "Cinia", since: "2010" };

console.log("\nBefore alterations\n");
console.log("\n", obj1);
console.log("\n", obj2);
console.log("\n", workPlace);

Object.assign(obj1, { work: workPlace } );
const objNew = Object.assign({}, obj1, obj2, {id: 3});

obj1.work.since = "2015";

console.log("\nAfter alterations\n");
console.log("\n", obj1);
console.log("\n", obj2);
console.log("\n", workPlace);
console.log("\n", objNew);

