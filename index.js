const express = require('express')
const app = express()
const  path = require('path')

app.use(express.static('./public'))

app.get('/', function(req,response){
   response.sendFile(path.join(__dirname, '/public.index.html'))
})

const port=3000
app.listen(port, function(){
   console.log("Listenning on port: ",port)
})  