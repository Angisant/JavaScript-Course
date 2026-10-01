let js = "amazing";

if (js === "amazing")
  // === is stricter than ==
  alert("Javascript is fun");

console.log(55 + 7 * 3);

// VARIABLES

let firstName = "Jason";
let PI = 3.1314; // convention for constant, not rule

console.log(firstName);
console.log(PI);

firstName = "Harry";
PI = 5;

console.log(firstName);
console.log(PI);

// DATA TYPES

console.log(typeof true);
console.log(typeof firstName);

let undefinedTest;
console.log(undefinedTest);
console.log(typeof undefinedTest);

undefinedTest = null;
console.log(undefinedTest);
console.log(typeof undefinedTest);

// Type cohersion
const favoriteNumber = Number(prompt("What's your favorite number"));

if (favoriteNumber === 2) {
  console.log(favoriteNumber + " is a number with value 2");
} else if (favoriteNumber == 2) {
  console.log(favoriteNumber + " can be converted to a number 2");
} else {
  console.log(favoriteNumber + " cannot be converted to a number 2");
}
