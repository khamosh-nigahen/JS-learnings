/**
 * String methods
 */

const stringOne = "Hey! I am Puneet Jain."
const stringTwo = "I work as frontend and backend Software Developer."

// charAt()
console.log(stringOne.charAt(1));

// concat()
console.log(stringOne.concat(stringTwo));

// includes()
console.log(stringTwo.includes("Dev"));

// indexOf()
console.log(stringTwo.indexOf("end")); // always returns the first accurance, there can be multiple occurance of it in string

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end"))

// match()
console.log(stringTwo.match(/end/g));

// repeat()
console.log(stringOne.repeat(3));

// replace()
console.log(stringTwo.replace(/end/g, "END"));

// search()
console.log(stringTwo.search("end"));  // can pass strings or regex as well
console.log(stringTwo.search(/end/g));

// slice()
console.log(stringOne.slice(2, 18));

// split()
console.log(stringOne.split(" "));

// startsWith()
console.log(stringOne.startsWith("Hey"));

// substr()
console.log(stringTwo.substr(4, 19)); // starts with 4th index and take 19 chars from there

// substring()
console.log(stringTwo.substring(4, 19)) // very similar to slice starts with 4th index ends at 19th index

// toLowerCase()
console.log(stringOne.toLowerCase())

// toUpperCase()
console.log(stringTwo.toUpperCase());

// trim()
const stringThree = "    Trimmed Str!    "
console.log(stringThree.trim());

for (let i of stringOne) {
    console.log(i);
}