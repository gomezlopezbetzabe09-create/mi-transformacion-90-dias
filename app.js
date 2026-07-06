const checks = document.querySelectorAll("input[type='checkbox']");
const progress = document.getElementById("progress");
const porcentaje = document.getElementById("porcentaje");

function actualizar() {
  let marcados = 0;

  checks.forEach(c => {
    if (c.checked) marcados++;
  });

  const p = Math.round((marcados / checks.length) * 100);

  progress.value = p;
  porcentaje.textContent = p + "%";

  localStorage.setItem("progreso", JSON.stringify(
    [...checks].map(c => c.checked)
  ));
}

const guardado = JSON.parse(localStorage.getItem("progreso"));

if (guardado) {
  checks.forEach((c, i) => {
    c.checked = guardado[i];
  });
}

checks.forEach(c => {
  c.addEventListener("change", actualizar);
});

actualizar();
