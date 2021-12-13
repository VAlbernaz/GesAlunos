const express = require('express')
const app = express()
const  path = require('path')

app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: false}))

app.use(cors())
app.use((req,res,next)=>{
   res.header('Access-Control-Allow.Origin','*')
   res.header('Access-Control-Allow-Headers','Origin,')
})

//define as rotas possiveis
app.use('/navbar',require('./routes/navbarRoute'))
app.use('/formdata',require('./routes/formdataRoute'))
app.use('/inserirutilizador',require('./routes/inserirUtilizadorRoutes'))

app.get('/', function(req,response){
   response.sendFile(path.join(__dirname, '/public.index.html'))
})

const port=3000
app.listen(port, function(){
   console.log("Listenning on port: ",port)
})  