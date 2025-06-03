const output = document.getElementById('output');


const funcionario1 = {
    matricula: '001',
    nome: 'Ana Silva',
    funcao: 'Desenvolvedora'
};

function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

const funcionario2 = new Funcionario('002', 'Carlos Souza', 'Analista');


class FuncionarioClasse {
    constructor(matricula, nome, funcao) {
        this.matricula = matricula;
        this.nome = nome;
        this.funcao = funcao;
    }
}

const funcionario3 = new FuncionarioClasse('003', 'Beatriz Lima', 'Gerente');


function mostrarFuncionario(funcionario, metodo) {
    return `
    <div class="objeto">
        <strong>${metodo}</strong><br>
        Matrícula: <span>${funcionario.matricula}</span><br>
        Nome: <span>${funcionario.nome}</span><br>
        Função: <span>${funcionario.funcao}</span><br>
    </div>
    `;
}

output.innerHTML = 
    mostrarFuncionario(funcionario1, 'Objeto Literal') +
    mostrarFuncionario(funcionario2, 'Função Construtora') +
    mostrarFuncionario(funcionario3, 'Classe ES6');
