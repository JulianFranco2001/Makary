// funcion para cambiar color
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  const colores = ["#e74c3c", "#9b59b6", "#f1c40f", "#1abc9c"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  colorBtn.style.backgroundColor = colorAleatorio;
});

// funcion para contar clics
let contador = 0; 
const contadorBtn = document.getElementById("contadorBtn");
const contadorSpan = document.getElementById("contador");

contadorBtn.addEventListener("click", () => {
  contador++;
  contadorSpan.textContent = contador;
});
