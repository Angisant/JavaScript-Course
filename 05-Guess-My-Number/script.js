"use strict";

const messageElem = document.querySelector(".message");
const numberElem = document.querySelector(".number");
const guessElem = document.querySelector(".guess");
const scoreElem = document.querySelector(".score");
const highscoreElem = document.querySelector(".highscore");

let chosenVal = Math.floor(Math.random() * 20) + 1; // Math.floor(Math.random() * (max - min + 1)) + min -> 1 to 20

document.querySelector(".check").addEventListener("click", function () {
  const guessVal = Number(guessElem.value);
  let scoreVal = Number(scoreElem.textContent);

  if (scoreVal > 0) {
    // INVALID INPUT
    if (guessVal < 1 || guessVal > 20) {
      // Display invalid guess message
      setMessage("Invalid Guess :(");
    } else {
      // CORRECT GUESS
      if (guessVal == chosenVal) {
        // Display correct value
        numberElem.textContent = guessVal;

        // Display winning message
        setMessage("Correct Number!!! :D");

        // Set new highscoreVal
        if (Number(highscoreElem.textContent) < scoreVal) {
          highscoreElem.textContent = scoreVal;
        }

        // Change webpage style
        document.querySelector("body").style.backgroundColor = "green"; // Set background to green
        numberElem.style.width = "30rem"; // Increase guessed number box width
      } else {
        // INCORRECT GUESS
        // Display guess accuracy message
        let msg = guessVal > chosenVal ? "Too High :/" : "Too Low :/";
        setMessage(msg);

        // Lose scoreVal
        scoreVal--;
        scoreElem.textContent = scoreVal;

        if (scoreVal < 1) {
          // Update message
          setMessage("Lost the game :(");
        }
      }
    }
  }
  //document.querySelector(".guess").value = ""; // Clear input value
});

document.querySelector(".again").addEventListener("click", function () {
  // Obtain new number
  chosenVal = Math.floor(Math.random() * 20) + 1;

  // Reset styles
  document.querySelector("body").style.backgroundColor = "#222";
  numberElem.style.width = "15rem";

  // Reset values and messages
  guessElem.value = "";
  numberElem.textContent = "?";
  scoreElem.textContent = 20;
  setMessage("Start guessing...");
});

function setMessage(msg) {
  messageElem.textContent = msg;
}
