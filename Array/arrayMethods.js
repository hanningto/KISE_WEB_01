// Demonstrating common array methods in JavaScript

const fruits = ["apple", "banana", "cherry"];

// push - adds an element to the end
fruits.push("date");
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]

// pop - removes the last element
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// shift - removes the first element
fruits.shift();
console.log(fruits); // Output: ["banana", "cherry"]

// unshift - adds an element to the beginning
fruits.unshift("apple");
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// slice - extracts a portion into a new array
const someFruits = fruits.slice(0, 2);
console.log(someFruits); // Output: ["apple", "banana"]

// splice - removes/replaces elements
fruits.splice(1, 1, "blueberry"); // Replaces "banana" with "blueberry"
console.log(fruits); // Output: ["apple", "blueberry", "cherry"]

// concat - combines two arrays
const veggies = ["carrot", "broccoli"];
const food = fruits.concat(veggies);
console.log(food); // Output: ["apple", "blueberry", "cherry", "carrot", "broccoli"]
