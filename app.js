let dia = Number(localStorage.getItem("dia")) || 1;
let agua = Number(localStorage.getItem("agua")) || 0;

document.getElementById("dia").textContent = dia;
document.getElementById("agua").textContent = agua + " / 8 vasos";

const pesoGuardado = localStorage.getItem("peso");
if (pesoGuardado) {
  document.getElementById("pesoGuardado").textContent =
    "Peso actual: " + pesoGuardado + " kg";
}

function sumarDia() {
  if (dia < 90) {
    dia++;
    localStorage.setItem("dia", dia);
    document.getElementById("dia").textContent = dia;
  } else {
    alert("🎉 ¡Felicidades! Completaste los 90 días.");
  }
}

function tomarAgua() {
  if (agua < 8) {
    agua++;
    localStorage.setItem("agua", agua);
    document.getElementById("agua").textContent = agua + " / 8 vasos";
  }
}

function guardarPeso() {
  const peso = document.getElementById("peso").value;
  if (peso) {
    localStorage.setItem("peso", peso);
    document.getElementById("pesoGuardado").textContent =
      "Peso actual: " + peso + " kg";
  }
      }
