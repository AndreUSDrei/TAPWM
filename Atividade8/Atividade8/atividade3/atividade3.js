function verificarPalindromo() {
    const texto = document.getElementById('texto').value;
    
    // Remover espaços e converter para minúsculas
    const textoFormatado = texto.toLowerCase().replace(/\s/g, '');
    
    // Criar o texto invertido
    const textoInvertido = textoFormatado.split('').reverse().join('');
    
    // Verificar se é palíndromo
    const ehPalindromo = textoFormatado === textoInvertido;
    
    document.getElementById('resultado').innerHTML = 
        ehPalindromo ? "É um palíndromo!" : "Não é um palíndromo.";
}