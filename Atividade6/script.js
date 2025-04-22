const pessoas = [];

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const idade = parseInt(this.idade.value);
    const sexo = this.sexo.value;
    const opiniao = parseInt(this.opiniao.value);

    pessoas.push({ idade, sexo, opiniao });

    this.reset();
});

function mostrarResultados() {
    if (pessoas.length === 0) {
        alert("Nenhum dado foi inserido ainda.");
        return;
    }

    const idades = pessoas.map(p => p.idade);
    const mediaIdade = (idades.reduce((a, b) => a + b, 0) / idades.length).toFixed(2);
    const maisVelha = Math.max(...idades);
    const maisNova = Math.min(...idades);
    const pessimos = pessoas.filter(p => p.opiniao === 1).length;
    const otimosEBons = pessoas.filter(p => p.opiniao === 4 || p.opiniao === 3).length;
    const porcentagemOtimosEBons = ((otimosEBons / pessoas.length) * 100).toFixed(2);

    const contagemSexo = { masculino: 0, feminino: 0, outros: 0 };
    pessoas.forEach(p => contagemSexo[p.sexo]++);

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Média da idade: <strong>${mediaIdade}</strong></p>
        <p>Idade da pessoa mais velha: <strong>${maisVelha}</strong></p>
        <p>Idade da pessoa mais nova: <strong>${maisNova}</strong></p>
        <p>Quantidade de pessoas que responderam "péssimo": <strong>${pessimos}</strong></p>
        <p>Porcentagem de respostas "ótimo" ou "bom": <strong>${porcentagemOtimosEBons}%</strong></p>
        <p>Quantidade de Mulheres: <strong>${contagemSexo.feminino}</strong></p>
        <p>Quantidade de Homens: <strong>${contagemSexo.masculino}</strong></p>
        <p>Quantidade de Outros: <strong>${contagemSexo.outros}</strong></p>
    `;
}
