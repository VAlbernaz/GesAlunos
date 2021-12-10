const { response } = require('express');
const express = require('express');
const res = require('express/lib/response');
const app = express()
const connection = require('../dbconnection.js')

const inserirUtilizadorRoutes = express.Router();

inserirUtilizadorRoutes.post('/', function(req,res){
    /*connection.query("SELECT * FROM tipos", (err,result)=>{
       if(err){ 
           console.log(err)
          console.log('Deu m****')
        }else{
          response.json(result)
       }
    })*/
    console.log(req.body)
    res.json({response:'Chegou tudo direito'})

})



module.exports = inserirUtilizadorRoutes