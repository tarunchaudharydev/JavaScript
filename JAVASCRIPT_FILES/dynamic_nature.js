console.log("tarun");

// The dynamic nature of JavaScript allows us to add or modify properties and methods of built-in objects at runtime.
// Here are some examples demonstrating this feature:
// Example 1: Adding a new method to the Math object
Math.square = function (x) {
  return x * x;
};
console.log("Square of 5:", Math.square(5)); // Output: 25

// Example 2: Modifying an existing method of the String object
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

let obj = {
  age: 20,
  wt: 68,
  ht: 180,
};

console.log(obj);

obj.color = "black";

console.log(obj);
