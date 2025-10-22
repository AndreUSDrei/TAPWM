module.exports = function(app){
    app.get('admin/adcionar_usuario', function(req,res){
        res.render('admin/adcionar_usuario')
    });
}