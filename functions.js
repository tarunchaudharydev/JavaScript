// functions in javascript

// Function Deleclaration

let name = "Tarun";

function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet(name));

// Function Expression
const greetExp = function (name) {
  return `Hi, ${name}`;
};
console.log(greetExp(name));

// Arrow Function
const greetArrow = (name) => {
  return `Hey, ${name}`;
};
console.log(greetArrow(name));

// Basic syntax
// function functionName () {
//  function body
// }

// functionName(); // function call

function sayMyName() {
  console.log("Tarun");
}

// function uses - function call

sayMyName();

function printCounting() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

printCounting();

// passing parameter to functions

function printNumber(num) {
  console.log("Number is: " + num);
}

printNumber(5);

function getAverage(num1, num2) {
  let avg = (num1 + num2) / 2;
  console.log("Average is: " + avg);
}

getAverage(4, 6);

//  return function

function getSum(a, b, c) {
  let sum = a + b + c;
  return sum;
}

getSum(4, 5, 6);

console.log(getSum(4, 5, 6));

function getMyName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}

// getMyName("Tarun", "Kumar");

let fullName = getMyName("Tarun", "Kumar");

console.log(fullName);

// function declaration vs function expression vs arrow function

// 1. Function Declaration
function add(a, b) {
  return a + b;
}
let result1 = add(3, 5);
console.log(result1);

// 2. Function Expression
const multiply = function (a, b) {
  return a * b;
};

let result2 = multiply(4, 6);
console.log(result2);

// 3. Arrow Function
const subtract = (a, b) => {
  return a - b;
};

let result3 = subtract(10, 4);
console.log(result3);
