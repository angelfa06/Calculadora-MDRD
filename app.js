function calcularMDRD() {
    const creatinina = parseFloat(document.getElementById("creatinina").value);
    const edad = parseInt(document.getElementById("edad").value);
    const sexo = document.getElementById("sexo").value;
    const raza = document.getElementById("raza").value;

    if (isNaN(creatinina) || isNaN(edad)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa valores válidos.";
        return;
    }

    let eGFR = 186 * Math.pow(creatinina, -1.154) * Math.pow(edad, -0.203);

    // Ajuste por sexo
    if (sexo === "femenino") {
        eGFR *= 0.742;
    }

    // Ajuste por raza
    if (raza === "afroamericano") {
        eGFR *= 1.212;
    }

    document.getElementById("resultado").innerText = `eGFR: ${eGFR.toFixed(2)} mL/min/1.73m²`;
}

function resetearFormulario() {
    document.getElementById("mdrdForm").reset();
    document.getElementById("resultado").innerText = "";
}

