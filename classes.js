// classes in javascript
class Human {
  // properties
  age = 13;
  wt = 80;
  ht = 180;

  // behavior
  walking() {
    console.log("I am walking");
  }

  running() {
    console.log("I am running");
  }
}

let obj = new Human();
console.log(obj.age);

obj.walking();
