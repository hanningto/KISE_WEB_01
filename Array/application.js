// Application example combining array concepts

// Create an array of fruits
const fruits = ["apple", "banana", "cherry"];

// Access and modify elements
console.log("Original fruits:", fruits); // Output: ["apple", "banana", "cherry"]
fruits[1] = "blueberry"; // Modify "banana" to "blueberry"
console.log("Modified fruits:", fruits); // Output: ["apple", "blueberry", "cherry"]

// Use array methods
fruits.push("date"); // Add "date" at the end
console.log("After push:", fruits); // Output: ["apple", "blueberry", "cherry", "date"]

const veggies = ["carrot", "broccoli"];
const food = fruits.concat(veggies); // Combine fruits and veggies

console.log("Combined food array:", food);
// Output: ["apple", "blueberry", "cherry", "date", "carrot", "broccoli"]
