//Andreus Vinícius Araújo De Andrade

// Calculadora de Média 
function calcularMedia() {
    const n1 = parseFloat(document.getElementById('nota1').value) || 0;
    const n2 = parseFloat(document.getElementById('nota2').value) || 0;
    const n3 = parseFloat(document.getElementById('nota3').value) || 0;
    
    const media = (n1 + n2 + n3) / 3;
    document.getElementById('resultado-media').textContent = media.toFixed(2);
}

// Calculadora Básica
let valorAnterior = '';
let operacao = '';
let display = document.getElementById('display');

function adicionarNumero(num) {
    display.value += num;
}

function operar(op) {
    valorAnterior = display.value;
    operacao = op;
    display.value = '';
}

function calcular() {
    let resultado;
    const valorAtual = display.value;
    
    switch(operacao) {
        case '+':
            resultado = parseFloat(valorAnterior) + parseFloat(valorAtual);
            break;
        case '-':
            resultado = parseFloat(valorAnterior) - parseFloat(valorAtual);
            break;
        case '*':
            resultado = parseFloat(valorAnterior) * parseFloat(valorAtual);
            break;
        case '/':
            resultado = parseFloat(valorAnterior) / parseFloat(valorAtual);
            break;
        default:
            return;
    }
    
    display.value = resultado;
    operacao = '';
}

function limpar() {
    display.value = '';
    valorAnterior = '';
    operacao = '';
}
