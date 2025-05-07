function ordenarNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    const numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    
    document.getElementById('resultado').innerHTML = `Números em ordem crescente: ${numeros.join(', ')}`;
}