"use strict"; // prevents us to do certain things and creates visible errors that would usually not show up

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // hasLicense

if (hasDriversLicense) console.log("I can drive");

// FUNCTIONS

// Function declaration
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Function expression
const calcAge = function (birthYear) {
  return 2026 - birthYear;
};

const age = calcAge(2002);
console.log(age);

// Arrow functions

const cubbed = (x) => x ** 3;

console.log(cubbed(2));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2026 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2002, "John"));

// ARRAYS

const friends = ["Michael", "Lucas", "Jason", 33];
const years = new Array(1991, 2002, 2023);

console.log(friends, friends[0], friends.length);

friends[1] = "Halley";
console.log(friends);

console.log(years); // array [1991, 2002, 2023]
console.log(years + 10); // string "1991,2002,202310"

// OBJECTS
const jonas = {
  firstName: "Jonnhy",
  lastName: "Depp",
  birthYear: 1980,
  job: "actor",
  friends: ["Michael", "Lucas", "Jason", 33],
  calcAge: function (birthYear) {
    console.log(this.birthYear);
    return 2026 - birthYear;
  },
};

console.log(jonas.lastName, jonas["lastName"]);

jonas.location = "Portugal";
jonas["favoriteMovie"] = "Minions";

console.log(jonas);
console.log(jonas.calcAge(1934));
console.log(jonas["calcAge"](1934));
