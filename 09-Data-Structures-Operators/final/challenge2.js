"use strict";

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number
for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

// 2. Use a loop to calculate the average odd and log it to the console
let oddsCount = 0;
let oddsSum = 0;
for (let odd of Object.values(game.odds)) {
    oddsSum += odd;
    oddsCount++;
}
console.log(`Average odd is ${oddsSum / oddsCount}`);

/* 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
*    Odd of victory Bayern Munich: 1.33 
*    Odd of draw: 3.25 
*    Odd of victory Borrussia Dortmund: 6.5 
* Get the team names directly from the game object, don't hardcode them (except for "draw"). 
*/
for (let [key, value] of Object.entries(game.odds)) {
    const oddInfo = (key == "x") ? "draw" : `victory ${game[key]}`;
    console.log(`Odd of ${oddInfo}: ${value}`);
}

/* 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, 
* and the number of goals as the value.
*/
let scorers = {};
for (let s of game.scored) {
    scorers[s] ??= 0;
    scorers[s] += 1;
}
console.log(scorers);