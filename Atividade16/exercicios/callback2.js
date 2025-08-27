function exibemensagensNaOrdem(mensagem, callback){
    console.log(mensagem);
    callback();
}
exibemensagensNaOrdem('Essa é a primeira mensagem exibida na ordem', 
    function(){
    console.log('essa é a segunda mensagem exibida na ordem');
});