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
      // adicionando a classe "active, no próximo circulo sempre que o botão for clicado"
      circle.classList.add("active");
    } else {
      // removendo a classe "active, no circulo anterior sempre quando botão for clicado"
      circle.classList.remove("active");
    }
  });
  //  Fazendo a barra de progresso aparecer
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // criando a validação dos botões para eles funcionarem.
  if (currentActive == 1) {
    prev.disabled = true;
  } else if (currentActive == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
