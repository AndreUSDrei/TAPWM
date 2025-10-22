let express = require('express');
let consign = require('consign');
let app=express(); // executando o express  
app.set('view engine', 'ejs');
consign().include('app/routes').into(app);
app.set('views','./app/views');
consign({cwd:'app'})
.include('routes')
.then('config/dbConnection.js')
.into(app);
module.exports = app;