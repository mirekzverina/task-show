const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const cross = document.querySelector("#cross");

hamburger.addEventListener("click", function () {
  menu.classList.add("active");
});

cross.addEventListener("click", function () {
  menu.classList.remove("active");
});
