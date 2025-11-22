// Math ===> object
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.pow(2, 4));
console.log(Math.abs(-45));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));
console.log(Math.round(4.5));
console.log(Math.min(2, 5, -1, 0, 9));
console.log(Math.max(2, 5, -1, 0, 9));
console.log(Math.random()); // generates random number between 0 to 1
console.log(Math.floor(Math.random() * 100)); // generates random number between 0 to 99

// Date ===> object
let currDate = new Date();
console.log(currDate);
console.log(currDate.getFullYear());
console.log(currDate.getMonth() + 1); // month is zero based index
console.log(currDate.getDate());
console.log(currDate.getHours());
console.log(currDate.getMinutes());
console.log(currDate.getSeconds());
console.log(currDate.getMilliseconds());
console.log(currDate.getTime()); // time in milliseconds from 1 Jan 1970
let specificDate = new Date(2020, 0, 15, 10, 30, 45); // 15 Jan 2020 10:30:45
console.log(specificDate);
let dateString = new Date("2022-05-10T10:20:30Z");
console.log(dateString);
// we can also set date and time
specificDate.setFullYear(2021);
specificDate.setMonth(5); // June
specificDate.setDate(20);
specificDate.setHours(15);
specificDate.setMinutes(45);
specificDate.setSeconds(50);
console.log(specificDate);
console.log(specificDate.toDateString());
console.log(specificDate.toTimeString());
console.log(specificDate.toISOString());
console.log(specificDate.toLocaleString());
