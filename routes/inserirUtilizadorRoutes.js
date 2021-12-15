const { response } = require('express');
const express = require('express');
const multer = require('multer')
const res = require('express/lib/response');
const app = express()
const connection = require('../dbconnection.js')

const inserirUtilizadorRoutes = express.Router();


inserirUtilizadorRoutes.post('/', function(req,res){
  
  
  
  connection.query(
      "INSERT INTO utilizadores (nomeutilizador, moradarua,moradanumero,datanascimento,telemovel,email,idtipos) VALUES (?,?,?,?,?,?,?)",
      [req.body.nomeutilizador,req.body.moradarua,req.body.moradanumero,req.body.datanascimento,req.body.telemovel,req.body.email,req.body.idtipos], 
      (err,result)=>{
       if(err){ 
           console.log(err)
           console.log('Erro na Base de Dados...')
        }else{
          console.log(result)
          res.json({text: 'Utilizador adicionado com sucesso'})
       }
    })
    
})



module.exports = inserirUtilizadorRoutes