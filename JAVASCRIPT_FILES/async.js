// we can fetch data from the server using async and await.
// async and await is used to handle the promises.
// async is used to define a function that will return a promise.
// await is used to wait for a promise to resolve.
async function getData(){
  setTimeout(function(){
    console.log("I am inside set timeout block");
  }, 3000);
}

getData();

// await

// fetch API

let output = getData();

async function Data(){
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
// parse json - it is used to convert the response into json format.
  let data = await response.json();
  console.log(data);
}

Data();