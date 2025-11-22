// cloning object
// three ways to clone an object
// using spread operator
let object = { a: 1, b: 2, c: 3 };
let cloneobject = { ...object };

console.log(cloneobject);

// using Object.assign()
let dest = Object.assign({}, object);
console.log(dest);

// using JSON methods
let jsonClone = JSON.parse(JSON.stringify(object));
console.log(jsonClone);
