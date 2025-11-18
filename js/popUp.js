const shareButton = document.querySelector(".share-btn");
const sharePopUp = document.querySelector(".share-popup");
const buttonContainer = document.querySelector(".button-container");
const userInfo = document.querySelector(".user-info");

const shareButtonClickHandler = () => {
  sharePopUp.classList.toggle("is-open");
  buttonContainer.classList.toggle("is-active");
  userInfo.classList.toggle("is-hidden");
  shareButton.classList.toggle("is-active");
};

shareButton.addEventListener("click", shareButtonClickHandler);
