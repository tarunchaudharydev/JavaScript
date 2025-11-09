// operators do operations on variables and values

//  Binary operators: require two operands
// Unary operators: require one operand
// Ternary operators: require three operands

// Arithmetic operators: +, -, *, /, %, ++, --
// 1. Addition (+)
let x = 5;
let y = 10;
let sum = x + y;
console.log("Sum: " + sum); // Sum: 15

// 2. subtraction (-)
let diff = y - x;
console.log("Difference: " + diff); // Difference: 5

// 3. Multiplication (*)
let prod = x * y;
console.log("Product: " + prod); // Product: 50

// 4. Division (/)
let quot = y / x;
console.log("Quotient: " + quot); // Quotient: 2

// 5. Modulus (%)
let mod = y % x;
console.log("Modulud: " + mod); // Modulus: 0

// 6. Increment (++)
x++;
console.log("Incremented x: " + x); // Incremented x: 6

// 7. Decrement (--)
y--;
console.log("Decremented y: " + y); // Decremented y: 9

// Assignment operators: =, +=, -=, *=, /=, %=

let a = 20; // Assignment (=)
let b = 10;
a += 5; // a = a  +5
console.log("a after += 5: " + a); // a after += 5: 25

a -= 3; // a = a -3
console.log("a after -= 3:" + a); // a after -= 3: 22

a *= 2; // a = a * 2
console.log("a after *= 2: " + a); // a after *= 2: 44

a /= 4; // a = a / 4
console.log("a after /= 4: " + a); // a after /= 4: 11

a %= 3; // a = a % 3
console.log("a after %= 3: " + a); // a after %= 3: 2

// Comparison operators: ==, ===, !=, !==, >, <, >=, <=

let p = 15;
let q = "15";
console.log("p == q: " + (p == q)); // p == q: true

console.log("p === q: " + (p === q)); // p === q: false

console.log("p != q: " + (p != q)); // p != q: false

console.log("p ! == q: " + (p !== q)); // p !== q: true

console.log("p > 10: " + (p > 10)); // p > 10: true

console.log("p < 10: " + (p < 10)); // p < 10: false

console.log("p >= 15: " + (p >= 15)); // p >= 15: true

console.log("p <= 10: " + (p <= 10)); // p <= 10: false

// Logical operators: &&, ||, !

let isAdult = true;
let hasId = false;
console.log("Can enter club: " + (isAdult && hasId)); // Can enter club: false

console.log("Can enter with either condition: " + (isAdult || hasId)); // Can enter with either condition: true

console.log("isAdult is not true: " + !isAdult); // isAdult is not true: false

// Ternary operator: condition ? expr1 : expr2

let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Yes, can vote

// Typeof operator: returns the type of a variable or value
console.log("Type of age: " + typeof age); // Type of age: number
console.log("Type of isAdult: " + typeof isAdult); // Type of isAdult: boolean
console.log("Type of name: " + typeof "John"); // Type of name: string

//  Bitwiae Operators: &, |, ^, ~, <<, >>, >>>

let m = 10; // 1010 in binary
let n = 4; // 0100 in binary
console.log("m & n: " + (m & n)); // m & n: 0

console.log("m | n: " + (m | n)); // m | n: 14

console.log("m ^ n:" + (m ^ n)); // m ^ n: 14

console.log("~m: " + ~m); // ~m: -11
console.log("m << 1: " + (m << 1)); // m << 1: 20

console.log("m >> 1: " + (m >> 1)); // m >> 1: 5
console.log("m >>> 1: " + (m >>> 1)); // m >>> 1: 5n

// If Else conditional statement
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Output: You are an adult.

// If Else If conditional statements

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// switch case statement
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thrusday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
