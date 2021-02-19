const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const inputh = document.querySelector(".input");

btn.addEventListener("click", () => {
  // toggle = add and remove at same time
  search.classList.toggle("active");
  input.focus();
});
