// Function Declaration

function printMsg() {
    console.log('Hello World !');
}

printMsg();

// Function Expression

const message = function () {
    console.log('Hello from message');
}

message();

// Arrow Function

const arrowfunc = () => {
    console.log('Hello from arrow function');
}

arrowfunc();

// IIFE( Immediately Invoked Function Expressions )

(()=>{
    console.log('Hello from IIFE');
})();