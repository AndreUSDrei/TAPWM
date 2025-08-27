let http = require('http');
let server = http.createServer(function(req,res){
    let opcao = req.url;
    if (opcao=='/historia'){
        res.end("<html><body>Historia da Fatec Sorocaba</body></hmtl>");
    
    } 
   else if (opcao=='/professores'){
        res.end("<html><body>Professores</body></hmtl>");
    }
    else
        res.end("<html><body>Site da Fatec Sorocaba</body></hmtl>");
});
server.listen(3000);