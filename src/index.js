import "./styles.css";
//Selectors

const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".searchBox");

//Event Listeners
modeToggle.addEventListener("click", () => {
  modeToggle.classList.add("active");
});
