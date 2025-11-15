// variable scope
// The accessibility of variables in different parts of the code
// 1. Global Scope
// 2. Local Scope
// 3. Block Scope
// 4. Lexical Scope
// 5. Function Scope
// 6. Module Scope

// Global Scope
var age = 15; // global variable

// function scope
function sayHello() {
  var name = "Tarun"; // local variable or function scope
  console.log("Hello " + name);
}
sayHello();

{
  const age_ = 20; // block scope
}
console.log(age_); // ReferenceError: age_ is not defined

// Lexical Scope
function outerFunction() {
  let outerVar = "I am outside!";
  function innerFunction() {
    console.log(outerVar); // innerFunction has access to outerVar
  }
  innerFunction();
}
outerFunction(); // Output: I am outside!

//  temporal dead zone
// you cannot access variables declared with let and const before their declaration
