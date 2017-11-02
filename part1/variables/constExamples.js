/**
 * How const variable works
 *
 *
 * Run with node constExamples.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */


/**
 * Try to reassign variables variable
 *
 * This function will crash with error.
 */
function constReassignTest() {
    console.log("Try to reassign a variables variable. This will crash.\n");
    const a = 5;
    a = 8;
}


/**
 * Modifying the internal of the variables variable does function
 */
function constModifyTest() {

    const a = {
        value: 5
    };
    console.log("values inside the variables can be modified.\n\tOrig object: " ,a);
    a.value = 6;
    console.log("\tReassign   : ",a);
}


//constReassignTest();
constModifyTest();








