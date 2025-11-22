// variable in a named memory location to store data.

// var ----> function scoped and global scoped but not block scoped.
// So we can not use this
// we can not re declare the variable using var in the same scope.
// we can re assign the value to the variable.

// let ----> we can make a variavle using let but this is blocked scoped

// const --> we can not change the value , redefine , redeclare not possible

// variable naming conventions:
// start with a letter, $ , _
// cannot start with a number
// case sensitive
// no special characters allowed except $ and _
// no space allowed
// cannot use revesed words as variable names
// should be a meaningful name
// ---------use camelCase for naming variables---------
// should not exceed 30 characters
//

let a = 10;
console.log(a);

const b = 22 / 7;
console.log(b);

// data types in javascript:

// 1. Primitive data types:
// a. Number
let num = 45;
console.log(typeof num); // number

// b. String
let str = "Tarun";
console.log(typeof str); // string

// c. Boolean
let bool = true;
console.log(typeof bool); // boolean

// d. Undefined
let undef;
console.log(typeof undef); // undefined

// e. Null
let nll = null;
console.log(typeof nll); // object

// 2. Non-Primitive data types:
// a.Object
let obj = { name: "Tarun", age: 21 };
console.log(typeof obj); // object

// b. Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // object

// c. Function
let func = function () {
  console.log("This is a function");
};

func(); // This is a function
console.log(typeof func); // function

//  d. Date
let date = new Date();
console.log(date);
console.log(typeof date); // object

// e. RegExp
let regex = /ab+c/;
console.log(typeof regex); // object

// f. Map
let map = new Map();
map.set("name", "Tarun");
console.log(typeof map); // object

// g. Set
let set = new Set();
set.add(1);
console.log(typeof set); // object

// h. Symbol
let sym = Symbol("id");
console.log(typeof sym); // symbol

// i. BigInt
let bigInt = BigInt(123456789012345678901234567);
console.log(typeof bigInt); // bigint
