
//Selectors

const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".searchToggle");
const siderbarClose=document.querySelector(".siderbarClose");
//Event Listeners
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle('dark')
});

// toggle search and cancle.
searchToggle.addEventListener('click', ()=>{
  searchToggle.classList.toggle('active');

})
// toggle siderebar

