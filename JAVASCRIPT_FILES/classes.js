// classes in javascript
class Human {
  // properties
  age; // public
  #wt = 80; // private
  ht = 180;



  // constructor -----> special function ----> it is called when object is created.
  constructor(newAge, newHeight) {
    this.age = newAge;
    this.ht = newHeight;
  }

  // behavior
  walking() {
    console.log("I am walking", this.#wt); // we can access private property inside the class by using this keyword
  }

  running() {
    console.log("I am running");
  }

  get fetchWeight() {
    return this.#wt;
  }

  set modifyWeight(val) {
    // setter to modify private property
    this.#wt = val; // we can modify private property inside the class by using this keyword
  }
}

let obj = new Human(50, 190);
console.log(obj.age);
//console.log(obj.#wt); // we cannot access private property outside the class

obj.walking();


class Car {
  // properties
  color;
  #price;
  #brand;

  // constructor
  constructor(newColor, newPrice, newBrand){
    this.color = newColor;
    this.#price = newPrice;
    this.#brand = newBrand;
  }

  // behavior
  running(){
    
  }
}