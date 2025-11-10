console.log("Tarun is awesome!");

// if we want to print this message 5 times, we can use a loop

for (let i = 0; i < 5; i++) {
  console.log("Tarun is awesome!");
}

// We can also use a string method to repeat the message
const message = "Tarun is awesome! ";
console.log(message.repeat(5).trim());

for (let i = 5; (i = 1); i--) {
  console.log(i);
}

let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

let j = 1;
while (j < 5) {
  if (j == 3) {
    break;
  } else {
    console.log(j); // This will print 1 and 2, then exit the loop when j is 3
    j++;
  }
}

let k = 1;
while (k < 5) {
  if (k == 3) continue;
  elseconsole.log("Hi"); // This will create an infinite loop because k is never incremented when k is 3
  k++;
}

let l = 1;
do {
  console.log("Tarun");
  l++;
} while (l < 10);

// strings
//  ----> collection of characters

let str = "Hello";
let firstName = "Tarun";
let lastName = "Kumar";
let Name = `${firstName} ${lastName}`; // template literals
console.log(Name);
console.log(Name.length); // length of the string
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.includes("Tarun"));
console.log(Name.includes("tarun")); // case sensitive
console.log(Name.startsWith("Tarun"));
console.log(Name.endsWith("Kumar"));
console.log(Name.charAt(0));
console.log(Name.indexOf("Kumar"));
console.log(Name.replace("Kumar", "chaudhary"));
console.log(Name.replaceAll("u", "uu"));
console.log(Name.split(" ")); // splits the string into an array of substrings
console.log(Name.repeat(3));
console.log(Name.trim()); // removes whitespace from both ends
console.log(Name.slice(0, 5)); // extracts a section of the string
console.log(Name.substring(0, 5)); // similar to slice but cannot accept negative indices
console.log(Name.concat(" is learning JavaScript")); // concatenates strings
console.log(Name.padStart(20, "*")); // pads the string from the start
console.log(Name.padEnd(20, "*")); // pads the string from the end
console.log(Name.charCodeAt(0)); // returns the Unicode of the character at the specified index
console.log(String.fromCharCode(84, 97, 114, 117, 110)); // creates a string from Unicode values
console.log([...Name]); // spreads the string into an array of characters
console.log(Array.from(Name)); // creates an array from the string
console.log(Name.match(/a/g)); // returns an array of all matches of 'a' in the string
console.log(Name.search("Kumar")); // returns the index of the first match of 'Kumar'
console.log(Name.localeCompare("Tarun Kumar")); // compares two strings in the current locale
console.log(Name.normalize()); // normalizes the string to Unicode Normalization Form
console.log(Name.valueOf()); // returns the primitive value of the string
console.log(Name.slice(-5)); // extracts the last 5 characters of the string
console.log(Name.substring(Name.length - 5)); // extracts the last 5 characters of the string
console.log(Name.endsWith("Kumar", 10)); // checks if the first 10 characters end with 'Kumar'
console.log(Name.startsWith("Tarun", 0)); // checks if the string starts with 'Tarun' at position 0
console.log(Name.indexOf("a", 3)); // searches for 'a' starting from index 3
console.log(Name.lastIndexOf("a")); // returns the last index of 'a' in the string
console.log(Name.slice(0, Name.indexOf(" "))); // extracts the first name
console.log(Name.slice(Name.indexOf(" ") + 1)); // extracts the last name
console.log(Name.replace(/a/g, "A")); // replaces all 'a' with 'A' using regex
console.log(Name.split("").reverse().join("")); // reverses the string
console.log(Name.charAt(Name.length - 1)); // returns the last character of the string
console.log(Name.substr(0, 5)); // extracts first 5 characters (deprecated)
console.log(Name.substr(-5)); // extracts last 5 characters (deprecated)
console.log(Name.toLowerCase().includes("tarun")); // case insensitive check
console.log(Name.toUpperCase().startsWith("TARUN")); // case insensitive check
console.log(Name.toUpperCase().endsWith("KUMAR")); // case insensitive check
console.log(
  Name.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
); // Capitalizes each word
