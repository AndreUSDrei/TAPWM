document.getElementById('formIMC').addEventListener('submit', function(e) {
    e.preventDefault();

    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    exibirResultado(imc, classificacao);
});

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Magreza (Grau 0)';
    } else if (imc < 24.9) {
        return 'Normal (Grau 0)';
    } else if (imc < 29.9) {
        return 'Sobrepeso (Grau I)';
    } else if (imc < 39.9) {
        return 'Obesidade (Grau II)';
    } else {
        return 'Obesidade Grave (Grau III)';
    }
}

function exibirResultado(imc, classificacao) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h3>Seu IMC é: ${imc}</h3>
        <p>Classificação: ${classificacao}</p>
    `;
}
