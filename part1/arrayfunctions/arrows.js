/**
 * Example of arrow functions lexical scope
 *
 * Run with node arrows.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */



function oldWay() {
    this.a = 0;
    const clearMe = setInterval(function() {
        this.a++;
        console.log("tick ", this.a);
        if(this.a >=5) {
            clearInterval(clearMe);
        }
    }, 200);
}

function newWay() {
    this.a = 0;
    const clearMe = setInterval( () => {
        this.a++;
        console.log("tick ", this.a);
        if(this.a >=5) {
            clearInterval(clearMe);
        }
    }, 200);
}



oldWay();
//newWay();