const express = require('express')
const app = express()
const connection = require('../dbconnection.js')

const formdataRoute = express.Router();

formdataRoute.get('/', function(req,response){
    connection.query("SELECT * FROM tipos", (err,result)=>{
       if(err){
           console.log(err)
          console.log('Deu m****')
        }else{
          response.json(result)
       }
    })
})


module.exports = formdataRoute