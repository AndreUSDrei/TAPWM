function verificarSubconjunto() {
    const palavra1 = document.getElementById('palavra1').value;
    const palavra2 = document.getElementById('palavra2').value;
    
    if (!palavra1 || !palavra2) {
        document.getElementById('resultado').innerHTML = "erro";
        return;
    }
    

    const palavra1Lower = palavra1.toLowerCase();
    const palavra2Lower = palavra2.toLowerCase();
    

    const ehSubconjunto = palavra1Lower.includes(palavra2Lower);
    
    document.getElementById('resultado').innerHTML = 
        ehSubconjunto ? "é um subconjunto" : "não é um subconjunto";
}