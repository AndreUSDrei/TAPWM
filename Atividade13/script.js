document.getElementById("maiusculas").addEventListener("change", function () {
    let campo = document.getElementById("texto");
    campo.value = campo.value.toUpperCase();
});

document.getElementById("minusculas").addEventListener("change", function () {
    let campo = document.getElementById("texto");
    campo.value = campo.value.toLowerCase();
});
