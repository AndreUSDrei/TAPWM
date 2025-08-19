function validar3() {

  const els = document.formulario3.elements;

  const nome = els["nome"].value.trim();
  const email = els["email"].value.trim();
  const comentario = els["comentario"].value.trim();
  const pesquisa = document.querySelector('input[name="pesquisa"]:checked');


  if (nome.length < 10) {
    alert("O nome deve ter pelo menos 10 caracteres.");
    els["nome"].focus();
    return false;
  }


  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    alert("Digite um email válido.");
    els["email"].focus();
    return false;
  }


  if (comentario.length < 20) {
    alert("O comentário deve ter no mínimo 20 caracteres.");
    els["comentario"].focus();
    return false;
  }

  
  if (!pesquisa) {
    alert("Selecione uma opção na pesquisa (Sim ou Não).");
    return false;
  }

  alert(pesquisa.value === "sim"
    ? "Volte sempre a esta página!"
    : "Que bom que você voltou a visitar esta página!"
  );

  return true;
}