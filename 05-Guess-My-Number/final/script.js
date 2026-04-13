"use strict";

let chosenVal = Math.floor(Math.random() * 20) + 1; // Math.floor(Math.random() * (max - min + 1)) + min -> 1 to 20

document.querySelector(".check").addEventListener("click", function () {
  const guessVal = Number(document.querySelector(".guess").value);
  let scoreVal = Number(document.querySelector(".score").textContent);

  if (scoreVal > 0) {
    // INVALID INPUT
    if (guessVal < 1 || guessVal > 20) {
      // Display invalid guess message
      setMessage("Invalid Guess :(");
    } else {
      // CORRECT GUESS
      if (guessVal == chosenVal) {
        // Display correct value
        document.querySelector(".number").textContent = guessVal;

        // Display winning message
        setMessage("Correct Number!!! :D");

        // Set new highscoreVal
        if (
          Number(document.querySelector(".highscore").textContent) < scoreVal
        ) {
          document.querySelector(".highscore").textContent = scoreVal;
        }

        // Change webpage style
        document.querySelector("body").style.backgroundColor = "green"; // Set background to green
        document.querySelector(".number").style.width = "30rem"; // Increase guessed number box width
      } else {
        // INCORRECT GUESS
        // Display guess accuracy message
        let msg = guessVal > chosenVal ? "Too High :/" : "Too Low :/";
        setMessage(msg);

        // Lose scoreVal
        scoreVal--;
        document.querySelector(".score").textContent = scoreVal;

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
  document.querySelector(".number").style.width = "15rem";

  // Reset values and messages
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  setMessage("Start guessing...");
});

function setMessage(msg) {
  document.querySelector(".message").textContent = msg;
}
