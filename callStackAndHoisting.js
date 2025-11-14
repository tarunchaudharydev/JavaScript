// hoisting
// a process where the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, before the code has been executed.

// function hoisting
// You can call the function before its declaration

function sayMyName(finalName) {
  console.log("My name is " + finalName);
}

sayMyName("Tarun");

// class hoisting
// You cannot access a class before its declaration

const person1 = new Person("Tarun"); // ReferenceError: Cannot access 'Person' before initialization
class Person {
  constructor(name) {
    this.name = name;
  }
}

// variable hoisting
// Variables declared with var are hoisted and initialized with undefined
console.log(myVar); // Output: undefined
var myVar = 10;

// Variables declared with let and const are hoisted but not initialized
console.log(myLet);
// Output: ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myConst);
// Output: ReferenceError: Cannot access 'myConst' before initialization
//

// FUNCTION CALL STACK
// The call stack is a data structure that keeps track of function calls in a program. It follows the Last In First Out (LIFO) principle, meaning the last function called is the first one to be completed and removed from the stack.
