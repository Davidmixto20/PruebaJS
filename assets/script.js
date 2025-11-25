script.js
function calcularEdad() {

    let nombre = document.getElementById("nombre").value;
    let nacimiento = document.getElementById("nacimiento").value;

    let resultado = document.getElementById("resultado");

    if (nombre === "" || nacimiento === "") {
        resultado.innerText = "Por favor completa todos los campos.";
        return;
    }

    let edad = 2025 - nacimiento;

    resultado.innerText = nombre + " tiene " + edad + " años.";
}
