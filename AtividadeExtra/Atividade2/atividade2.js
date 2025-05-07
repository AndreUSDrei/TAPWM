function gerarPalavras() {
    const input = document.getElementById('letras').value.toUpperCase();
    const letras = input.split(',').map(letra => letra.trim());
    
    if (letras.length !== 5 || letras.some(l => l.length !== 1 || !/[A-Z]/.test(l))) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira exatamente 5 letras válidas (A-Z) separadas por vírgula.';
        return;
    }
    
    const palavras = formarPalavras.apply(null, letras);
    
    let html = '<h3>Palavras geradas:</h3>';
    palavras.slice(0, 10).forEach(palavra => {
        html += `<span class="palavra">${palavra}</span>`;
    });
    
    document.getElementById('resultado').innerHTML = html;
}

function formarPalavras(a, b, c, d, e) {
    const letras = [a, b, c, d, e];
    const combinacoes = [];
    

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    for (let i = 0; i < 20; i++) {
        const combinacao = shuffle([...letras]).join('');
        if (!combinacoes.includes(combinacao)) {
            combinacoes.push(combinacao);
            if (combinacoes.length >= 10) break;
        }
    }
    
    return combinacoes;
}