"use strict";

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        }
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};


// SPREAD OPERATOR
let arr = [1, 2, ...[3, 4]]; // … is on the RIGHT side of =

// REST PATTERN - Arrays
let [a, b, ...others] = [1, 2, 3, 4]; // … is on the RIGHT side of =
console.log(arr, others);

// REST PATTERN - Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);  // thu and fri elements

// REST PATTERN - Functions
function add(...numbers) {
    let sum = 0;
    numbers.forEach(n => sum += n);
    return sum
}
console.log(add(4, 2, 5));  // 11
console.log(add(...[1, 2, 6]));  // 9


if (restaurant.orderPizza) {  // We can check if a property/method exist by doing this
    restaurant.orderPizza("cheese", "olives", "ham");
}

restaurant.orderPizza && restaurant.orderPizza("cheese", "olives", "ham"); // Second approach

// NULLISH OPERATOR
const guests = restaurant.numGuests ?? 10;
console.log(guests);

// ASSIGNMENT OPERATOR
console.log(restaurant.numGuests);
restaurant.numGuests ??= 10;    // Nullish => will assign if nullish
console.log(restaurant.numGuests);

console.log(restaurant.owner);
restaurant.owner ||= "Tiago";    // OR => will assign if doesnt exist
restaurant.owner ||= "Lopes";
console.log(restaurant.owner);

restaurant.owner &&= "Diogo";    // AND => will assign if it already exists
console.log(restaurant.owner);
console.log(restaurant.coowner);
restaurant.coowner &&= "Manuel";
console.log(restaurant.coowner);

// FOR_OF AND ENTRIES()
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
console.log(...menu.entries());     // array of arrays [idx, elem]
for (let [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// OPTIONAL CHAINING (?.)
console.log(restaurant.order?.("cheese", "olives", "tomato") ?? "Method does not exist");
console.log(restaurant.orderPizza?.("ham", "onions") ?? "Method does not exist");