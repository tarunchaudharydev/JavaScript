// what is error handling in JavaScript?
// Error handling in JavaScript is the process of responding to and managing errors that occur during the execution of a program. It allows developers to gracefully handle unexpected situations, ensuring that the program can continue to run or fail gracefully without crashing. JavaScript provides several mechanisms for error handling, including:
// 1. try...catch statement: This is the most common way to handle errors in JavaScript. The code that may throw an error is placed inside the try block, and if an error occurs, it is caught in the catch block where you can handle it appropriately.
// 2. throw statement: This allows you to create custom errors by throwing exceptions manually. You can throw built-in error types or create your own custom error types.
// 3. finally block: This block is optional and can be added after the catch block. It contains code that will always execute, regardless of whether an error occurred or not. It is often used for cleanup tasks.

// compile type error and runtime type error
// Compile-time errors (also known as syntax errors) occur when the code is being parsed or compiled before execution. These errors are detected by the JavaScript engine before the code runs, and they prevent the program from executing. Examples of compile-time errors include missing parentheses, misspelled keywords, or incorrect use of operators.
// Runtime errors, on the other hand, occur during the execution of the program. These errors are not detected until the code is actually running. Examples of runtime errors include trying to access an undefined variable, calling a function that does not exist, or performing operations on incompatible data types.

// console.log 1; // compile-time error

// console.log(x); // runtime error: x is not defined

// handling ---> try...catch

try {
  console.log("try start here");
  console.log(x);
  console.log("try end here");
  // jo error aa sakta hai usko try me rakhte hai
} catch (e) {
  console.log("catch block starts");
  console.log("Error caught:", e, "end of catch block");
  // what to do if error occurs and e is the error object
}

// finally block --> this block will always execute

try {
  console.log("Inside try block");
} catch (error) {
} finally {
}

// to show error by default

// custom error ---> using "throw" keyword

try {
  console.log(x);
} catch (e) {
  throw new Error("Custom Error: x is not defined");
}
