// event loops
// call stack
// browsers
// callback queue


// promises
// promises are used to handle async operations or handling callbacks or completion of async operations.

// let firstPromise = new Promise((resolve, reject)=>{
//   console.log("Tarun");
//   // resolve(1001);
//   reject(new Error("Internal server error"));
// });

let promise1 = new Promise((resolve, reject)=>{
  let success =true;
  if(success){
    console.log("Promise fulfilled");
  } else{
    console.log("Promise rejected");
  }
});

promise1.then((message)=>{
  console.log("Then ka message is "+ message);
}).catch((error)=>{
  console.log("Catch ka message is "+ error);
})


let promise2 = new Promise((resolve, reject)=>{
  setTimeout(resolve, 1000, "First");
});

let promise3 = new Promise((resolve, reject)=>{
  setTimeout(resolve, 2000, "Second");
});

let promise4 = new Promise((resolve, reject)=>{
  setTimeout(resolve, 3000, "Third");
});

Promise.all([promise2, promise3, promise4]).then((values)=>{
  console.log(values);
}).catch((err)=>{
  console.log("error "+ err);
});

