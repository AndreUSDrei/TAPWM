function calcular() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const num3 = parseFloat(document.getElementById('numero3').value);
    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira todos os números corretamente.';
        return;
    }
    
    const resultado = calcularResultado(num1, num2, num3);
    document.getElementById('resultado').innerHTML = resultado;
}

function calcularResultado(a, b, c) {
    const soma = a + b + c;
    const quadradoA = a * a;
    const quadradoB = b * b;
    
    return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadradoA} e o quadrado do segundo é: ${quadradoB}`;
}