const button = document.querySelector(".navbar-ham");
const menu = document.querySelector(".navbar-links");
const overlay = document.querySelector("#overlay");

button.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("navbar-open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("show");
  button.classList.toggle("open");
  menu.classList.toggle("navbar-open");
});
