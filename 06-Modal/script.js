"use strict";

const modalElem = document.querySelector(".modal");
const overlayElem = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtns = document.querySelectorAll(".show-modal");

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener("click", openModalWindow);
}

// Close modal window with close button
closeModalBtn.addEventListener("click", closeModalWindow);

// Close modal window by clicking outside the window
overlayElem.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModalWindow();
  }
});

function closeModalWindow() {
  /* could add if statement to check if the elements don't contain the class, but 
  the browser already ignores the instruction if the class is already there */
  modalElem.classList.add("hidden");
  overlayElem.classList.add("hidden");
}

function openModalWindow() {
  /* could add if statement to check if the elements contain the class, but 
  the browser already ignores the instruction if the class isn't there */
  modalElem.classList.remove("hidden");
  overlayElem.classList.remove("hidden");
}
