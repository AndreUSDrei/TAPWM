let app = require('./app/config/server'); //carregando o módulo do servidor
let rotaHome = require('./app/routes/home');
rotaHome(app);
 
let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);
 
let rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);
 
let rotaCursos = require('./app/routes/cursos');
rotaCursos(app);
 
let rotaProfessores = require('./app/routes/professores');
rotaProfessores(app);
app.get('/', function(req,res){
    res.send("<html><body>Site da Fatec Sorocaba</body></html>");
});
 
app.get('/historia', function(rea,res){
    res.send("<html><body>História da Fatec Sorocaba</body></html>");
});
app.get('/cursos', function(reg,res){
    res.send("<html><body>Cursos da Fatec Sorocaba</body></html>");
});
 
app.get('/professores', function(req,res){
    res.send("<html><body>Professores da Fatec Sorocaba</body></html>");
});
 
app.listen(3000, function(){
    console.log("servidor iniciado");
});