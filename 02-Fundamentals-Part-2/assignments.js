/*
1. Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the
 function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them 
to the console.
*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("Portugal", 10.4, "Lisbon"));
console.log(describeCountry("Finland", 6, "Helsinki"));

/*
1. The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and 
returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 
18.2% of the world population.
2. To calculate the percentage, divide the given population value by 7900 and then multiply by 100.
3. Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.
4. Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be 
the same populations).
*/

const worldPop = 7900;

function percentageOfWorld1(pop) {
  return (pop * 100) / worldPop;
}

const popPortugal1 = percentageOfWorld1(10.4);
const popChina1 = percentageOfWorld1(1441);

console.log(popPortugal1, popChina1);

const percentageOfWorld2 = function (pop) {
  return (pop * 100) / worldPop;
};

const popPortugal2 = percentageOfWorld2(10.4);
const popChina2 = percentageOfWorld2(1441);

console.log(popPortugal2, popChina2);

/**
Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
*/

const percentageOfWorld3 = (pop) => (pop * 100) / worldPop;

/*
1. Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and 
population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.
2. To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.
3. Call describePopulation with data for 3 countries of your choice.
*/

function describePopulation(country, population) {
  const perPopulation = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${perPopulation}% of the world`;
}

const descPortugal = describePopulation("Portugal", 10.4);
const descChina = describePopulation("China", 1441);

console.log(descPortugal, descChina);

/*
1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. 
Store this array into a variable called populations.
2. Log to the console whether the array has 4 elements or not (true or false).
3. Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function 
percentageOfWorld1 that you created earlier to compute the 4 percentage values.
*/

const populations = [10.4, 1441, 33, 50];
console.log(`Array has 4 elements? ${populations.length == 4}`);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

/*
Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours 
(an array like we used in previous assignments).
*/

const myCountry = {
  country: "Portugal",
  capital: "Lisbon",
  language: "portuguese",
  population: 10.4,
  neighbors: ["Spain"],
};

console.log(myCountry);

/*
1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 
neighbouring countries and a capital called Helsinki'.
2. Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.
*/

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}`,
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

/*
1. Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.
2. Call the describe method.
3. Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be 
true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
*/

myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}`,
  );
};

myCountry.describe();

myCountry.checkIsland = function () {
  this.isIsland = this.neighbors.length == 0 ? true : false;
  return this.isIsland;
};

console.log(myCountry.checkIsland());
