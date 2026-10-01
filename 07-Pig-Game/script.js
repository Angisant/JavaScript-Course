"use strict";

const diceElem = document.querySelector(".dice");

const newGameBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

let currentPlayer = 0; // Player 1 = 0, Player 2 = 1
let currentScore = 0;
let scores = [0, 0];
let isGameOn = true;

initGame();

function initGame() {
  // Hide dice
  diceElem.classList.add("hidden");

  // Reset all scores
  scores = [0, 0];
  document.querySelectorAll(".score").forEach((element) => {
    element.textContent = 0;
  });
  currentScore = 0;
  document.querySelectorAll(".current-score").forEach((element) => {
    element.textContent = 0;
  });

  // Remove previous winner
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");

  // Start with player 1
  currentPlayer = 0;
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");

  // Allow game to play
  isGameOn = true;
}

holdBtn.addEventListener("click", function () {
  if (isGameOn) {
    // Change current player scores
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    // GAME RULE: If player scores atleast 100, they win
    if (scores[currentPlayer] >= 100) {
      // Highlight winner
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");

      // Hide dice
      diceElem.classList.add("hidden");

      // Stop game
      isGameOn = false;
    } else {
      // Reset current score and change to new player
      changePlayer();
    }
  }
});

newGameBtn.addEventListener("click", initGame);

rollBtn.addEventListener("click", function () {
  if (isGameOn) {
    // Roll dice
    let diceValue = Math.floor(Math.random() * 6) + 1; // Math.floor(Math.random() * (max - min + 1)) + min -> 1 to 6
    diceElem.src = `dice-${diceValue}.png`;

    // Show dice
    diceElem.classList.remove("hidden");

    // GAME RULE: If dice rolls 1, player loses current score and game turn
    if (diceValue != 1) {
      // Change current player score
      currentScore += diceValue;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      // Reset current score and change to new player
      changePlayer();
    }
  }
});

function changePlayer() {
  // Reset current score
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = 0;

  // Turn other player active
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");

  // Change to new player
  currentPlayer = currentPlayer == 0 ? 1 : 0;
}
