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

// using map method
//
let arr5 = [10, 20, 30];

let ansArray = arr5.map((number) => {
  return number * number;
});
console.log(ansArray);

arr5.map((number, index) => {
  console.log(number);
  console.log(index);
});

// using filter method
let arr6 = [5, 12, 8, 130, 44];

let evenArray = arr6.filter((number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evenArray);

let str = ["Tarun", "Kumar", null, undefined, 1, 2, 2, 4, 3, 5];

let stringArray = str.filter((element) => {
  if (typeof element == "string") {
    return true;
  } else {
    return false;
  }
});

console.log(stringArray);

// using reduce method
let arr7 = [1, 2, 3, 4, 5];
let ans = arr7.reduce((acc, curr) => {
  return acc + curr;
}, 0); // 0 is the initial value of acc

console.log(ans);

// chaining of array methods
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let finalAns = arr8
  .filter((number) => number % 2 === 0) // filter even numbers
  .map((number) => number * number) // square the even numbers
  .reduce((acc, curr) => acc + curr, 0); // sum of squares
console.log(finalAns);
// finalAns will be 220 (4 + 16 + 36 + 64 + 100)

//sort method
let arr9 = [5, 2, 9, 1, 5, 6];
arr9.sort((a, b) => a - b); // ascending order
console.log(arr9);
arr9.sort((a, b) => b - a); // descending order
console.log(arr9);

// indexOf method
let arr10 = ["apple", "banana", "cherry", "date"];
console.log(arr10.indexOf("cherry")); // 2
console.log(arr10.indexOf("grape")); // -1

//using forEach method
let arr11 = [10, 20, 30, 40, 50];
arr11.forEach((number, index) => {
  console.log("Index: " + index + ", Number: " + number);
});

// using for-in loop
let arr12 = ["a", "b", "c", "d"];
for (let key in obj) {
  console.log(key, " ", obj[key]);
}

// using for-of loop
let arr13 = [100, 200, 300, 400];
for (let value of arr13) {
  console.log(value);
}

// array  with functions

let arr15 = [1, 2, 3, 4, 5];

function getSum(arr15) {
  let len = arr15.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += arr15[i];
  }
  return sum;
}

let total = getSum(arr15);
console.log(total);
// console.log(getSum(arr15));

// using forEach in function
function getTotal(arr15) {
  let total = 0;
  arr15.forEach((value) => {
    total += value;
  });
  return total;
}
