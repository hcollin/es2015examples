/**
 * Example of arrow functions lexical scope
 *
 * Run with node arrows.js
 *
 * Henrik Collin <henrik.collin@cinia.fi>
 * (c) Cinia Solutions Oy 2017
 */



function oldWay() {
    var self = this;
    this.a = 0;
    const clearMe = setInterval(function() {
        self.a++;
        console.log("tick ", self.a);
        if(self.a >=5) {
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



//oldWay();
newWay();