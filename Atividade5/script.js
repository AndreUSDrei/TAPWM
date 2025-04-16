function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
  
    let resultado = '';
  
    if (escolhaUsuario === escolhaComputador) {
      resultado = 'Empate!';
    } else if (
      (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
      (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
      (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
      resultado = 'Você venceu!';
    } else {
      resultado = 'Você perdeu!';
    }
  
    // Mostrar resultado e escolhas
    document.getElementById('mensagem').textContent = resultado;
    document.getElementById('escolhas').textContent = `Você escolheu ${escolhaUsuario}, o computador escolheu ${escolhaComputador}.`;
  
    // Mostrar imagens
    document.getElementById('img-usuario').src = `img/${escolhaUsuario}.png`;
    document.getElementById('img-computador').src = `img/${escolhaComputador}.png`;
  
    // Mostrar a comparação
    document.getElementById('comparacao').classList.remove('oculto');
  }
  