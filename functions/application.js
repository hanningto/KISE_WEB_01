// Application example combining function concepts

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Function to convert a message to uppercase
function shoutMessage(message) {
    return message.toUpperCase();
}

// Application code
const length = 10;
const width = 5;
const message = "welcome to our application!";

console.log("Area of rectangle:", calculateArea(length, width)); // Output: Area of rectangle: 50
console.log(shoutMessage(message));                               // Output: WELCOME TO OUR APPLICATION!
