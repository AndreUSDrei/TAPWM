module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql');
    //let dbConnection = require('../config/dbConection');
//
      async function getProfessores() {
          try {
              let dbConnection = app.config.dbConnection;
              const pool = await dbConnection();
         
               const results = await pool.request().query('SELECT * from PROFESSORES')
         
               //res.json(results.recordset);
               
               res.render('informacao/professores',{profs: results.recordset})
   
           } catch (err) {
               console.log(err)
          }
       }
      getProfessores();
   });
}