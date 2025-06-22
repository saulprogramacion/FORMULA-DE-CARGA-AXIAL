// JavaScript
document.getElementById("eulerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const E = parseFloat(document.getElementById("E").value);
  const I = parseFloat(document.getElementById("I").value);
  const L = parseFloat(document.getElementById("L").value);
  const K = parseFloat(document.getElementById("K").value);

  const Le = K * L;
  const Pcr = (Math.PI ** 2 * E * I) / (Le ** 2);

  document.getElementById("resultado").textContent = `Pcr = ${Pcr.toExponential(2)} N`;
  dibujarGrafico(Pcr);
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("eulerForm").reset();
  document.getElementById("resultado").textContent = "";
  limpiarGrafico();
});

function dibujarGrafico(Pcr) {
  const canvas = document.getElementById("grafico");
  const ctx = canvas.getContext("2d");
  limpiarGrafico();

  ctx.beginPath();
  ctx.moveTo(40, 260);
  ctx.lineTo(360, 260); // eje x
  ctx.moveTo(40, 260);
  ctx.lineTo(40, 40); // eje y
  ctx.strokeStyle = "#000";
  ctx.stroke();

  const escalaX = 300;
  const escalaY = 200 / Pcr;
  const x = 40 + escalaX;
  const y = 260 - Pcr * escalaY;

  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#007bff";
  ctx.fill();
  ctx.fillText(`Pcr: ${Pcr.toExponential(2)} N`, x - 50, y - 10);
}

function limpiarGrafico() {
  const canvas = document.getElementById("grafico");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
