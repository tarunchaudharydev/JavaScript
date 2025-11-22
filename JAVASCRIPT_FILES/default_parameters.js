// allow to use function with default values for parameters
// used when we want to make some parameters optional

function sayName(myName = "anonymous") {
  // if we don't pass any value then it will take "anonymous" as default value
  console.log("My name is ", myName);
}
sayName("Tarun"); // My name is Tarun
sayName(); // My name is anonymous

// first parameter is dependent on second parameter
function nameWithCapital(fName = "Uday", lName = fName.toUpperCase()) {
  console.log("My name is ", fName, " ", lName);
}

nameWithCapital("Tarun", "Sharma"); // My name is Tarun Sharma
nameWithCapital("Tarun"); // My name is Tarun TARUN
nameWithCapital(); // My name is Uday UDAY

function solve(value) {
  console.log("Hello Jii", value);
}

solve(15);
// we can pass array, objects, functions as default parameters too
function solve2(value = { age: 15, wt: 80, ht: 180 }) {
  console.log("Hello Jii", value);
}
solve2();

solve2({ age: 20, wt: 70, ht: 170 });

// default parameters with null and undefined

function demo(val = 5) {
  console.log(val);
}
demo(undefined); // 5
demo(null); // null
demo(); // 5

// function as a default parameter
function getAge() {
  return 190;
}

function utility(name, age) {
  console.log(name, " ", age);
}
utility("Tarun", 20); // Tarun 20
utility("Uday"); // Uday undefined
utility("Ajay", getAge()); // Ajay 190
