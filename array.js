// arrays in javascript

// Array Declaration
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);

// object
//  collection of key-value pairs
let person = {
  name: "Tarun",
  age: 23,
  city: "New Delhi",
};

console.log(person);

let obj = {
  name: "tarun",
  age: 23,
  city: "New Delhi",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

obj.greet();

// shallow copy vs deep copy <--- important

// shallow copy
let arr1 = ["A", "B", "C"];
let arr2 = arr1; // reference copy (shallow copy)
arr2.push("D");
console.log("arr1:", arr1); // arr1: [ 'A', 'B', 'C', 'D' ]

// deep copy
let arr3 = [...arr1]; // spread operator (deep copy)
arr3.push("D");
console.log("arr1:", arr1); // arr1: [ 'A', 'B', 'C' ]

// array methods
let colors = ["Red", "Green", "Blue"];
console.log("Original array:", colors);
colors.push("Yellow"); // add to end
console.log("After push:", colors);
colors.pop(); // remove from end
console.log("After pop:", colors);
colors.unshift("Purple"); // add to start
console.log("After unshift:", colors);
colors.shift(); // remove from start
console.log("After shift:", colors);
console.log("Index of Green:", colors.indexOf("Green"));
console.log("Includes Blue:", colors.includes("Blue"));
colors.splice(1, 1); // remove 1 element at index 1
console.log("After splice:", colors);
let newColors = colors.slice(0, 2); // slice from index 0 to 2
console.log("Sliced array:", newColors);
console.log("Length of colors array:", colors.length);
colors.sort();

// creation of array
let arr0 = [1, 2, 3, 4, 5];
console.log(arr0);

let arr00 = new Array(6, 7, 8, 9, 10);
console.log(arr00);

console.log(typeof arr0);

let brr = ["a", "b", 24, true, null, undefined];
// accessing array elements
// using indexing starting from 0 to n-1
console.log(brr[0]);
console.log(brr[3]);
console.log(brr[5]);

//  built-in array methods

// push method, pop, shift, unshift, slice, splice, indexOf, includes, length, sort, reverse etc.

brr.push("new element");
brr.pop();
brr.shift();
brr.unshift("first element");
brr.splice(2, 1); // removes 1 element at index 2
brr.slice(1, 4); // returns a new array from index 1 to 3
brr.length;
brr.sort();
brr.includes(24);
brr.indexOf(true);
brr.reverse();
