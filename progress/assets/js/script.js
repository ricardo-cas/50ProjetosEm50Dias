const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
// como são mais de um círculo, então transformamos eles em um Array
// utilizando o querySelectorAll
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// garante que os botões só vão até o tamanho das etapas=círculos
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

// loop entre os círculos, já que eles são array.
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}
