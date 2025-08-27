let http = require('http');
let server = http.createServer(function(req,res){
        res.end("<html><body><H1 style='text-align:center'><b>Site da fatec Sorocaba</b></H1><body></html>");
});
server.listen(3000)