const express = require('express')
const app = express()
const  path = require('path')
const multer = require('multer')
const cors = require('cors')

app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: false}))



//define as rotas possíveis 

//define as rotas possiveis
app.use('/navbar',require('./routes/navbarRoute'))
app.use('/formdata',require('./routes/formdataRoute'))
app.use('/inserirutilizador',require('./routes/inserirUtilizadorRoutes'))

app.get('/', function(req,response){
   response.sendFile(path.join(__dirname, '/public.index.html'))
})

/************************************* */
//Para Imagens
const storage = multer.diskStorage({
   //define onde e que nome a imagem é guardada
   destination: (req,file,callback)=>{
       callback(null, './public/fotos')
   },
   filename: (req,file,callback)=>{
       callback(null, file.originalname)
   }
})
 
const upload = multer({
   storage: storage,
   limits: {fileSize: 1000000}
}).single('image')
 
app.post('/foto',(req,res) => {
   upload(req,res,(err)=>{
      console.log(req.body.nomeUtilizador)
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
})

app.use(cors())
app.use((req,res,next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})
/********************************************** */
const port=4000
app.listen(port, function(){
   console.log("Listenning on port: ",port)
})  