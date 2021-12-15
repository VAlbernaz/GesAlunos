const { response } = require('express');
const express = require('express');
const multer = require('multer')
const res = require('express/lib/response');
const app = express()
const connection = require('../dbconnection.js')

const inserirUtilizadorRoutes = express.Router();
/************************************* */
//Para Imagens
const storage = multer.diskStorage({
  //define onde e que nome a imagem é guardada
  destination: (req,file,callback)=>{
      callback(null, '../public/fotos')
  },
  filename: (req,file,callback)=>{
      callback(null, file.originalname)
  }
})

const upload = multer({
  storage: storage,
  limits: {fileSize: 1000000}
}).single('image')

inserirUtilizadorRoutes.post('/', function(req,res){
  
  upload(req,res,(err)=>{
    console.log(req.body)
    console.log(req.file)
    if(err){
       res.json({res: err})
    }else{
       if(req.file==undefined)
       {
          res.json({res : 'No file Selected'})
       }else{
          res.json({res:"Sucesso!"})
       }
    }
  })
  
  /*connection.query(
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
    })*/
})



module.exports = inserirUtilizadorRoutes