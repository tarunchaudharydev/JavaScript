// hoisting
// a process where the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, before the code has been executed.

// function hoisting
// You can call the function before its declaration

function sayMyName(finalName) {
  console.log("My name is " + finalName);
}

sayMyName("Tarun");
