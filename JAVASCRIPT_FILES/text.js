

// // let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', 
// function changeText(event) {
//   console.log(event);
//   let fpara = document.getElementById('fpara');

//   fpara.textContent = "Text Changed"
// });


// // fpara.textContent = "Text Changed";

// // event object

// let anchorElement = document.getElementById('anchor');

// anchorElement.addEventListener('click', function(event){
//   event.preventDefault();
//   anchorElement.textContent = "Click done bhai";
// });


let para = document.querySelectorAll('p');

function alertPara(e){
  alert("You have Clicked on para" + e.target.textContent);
}

for(let i=0; i<para.length; i++){
  let paras =para[i];
  paras.addEventListener('click', alertPara);
}