// Demonstrating different ways to create functions

// Function declaration
function add(a, b) {
    return a + b;
}

// Function expression
const multiply = function(a, b) {
    return a * b;
};

// Arrow function
const subtract = (a, b) => a - b;

// Testing each function
console.log(add(2, 3));       // Output: 5
console.log(multiply(4, 5));  // Output: 20
console.log(subtract(10, 7)); // Output: 3
