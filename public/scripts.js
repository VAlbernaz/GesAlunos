
function init(){
    loadNavBar()
    getTipos()
}

function loadNavBar(){
    const nbar=document.getElementById('nbar')
    fetch('http://localhost:4000/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch((err)=>{
        alert('Ocorreu um erro!')
    })
}

function getTipos(){

    fetch('http://localhost:4000/formdata')
    .then(res=> res.json())
    .then(data => preencheTipos(data))
    .catch()

}


function preencheTipos(data){
   
    for(let i=0;i<data.length;i++)
        {   let opcao = data[i].designacao
            if(opcao=="Aluno")
            {
                let row =` <option value="${i+1}" selected>${opcao}</option>`
                document.getElementById('tipo').innerHTML += row
            }else{
            let row =` <option value="${i+1}">${opcao}</option>`
            document.getElementById('tipo').innerHTML += row
            }
        }
}

function getDados(){
    //Recolhe os dados
    let nome = document.getElementById('nome').value
    let morada = document.getElementById('morada_rua').value
    let moradaN = document.getElementById('morada_num').value
    let date = document.getElementById('dnasc').value
    let telem = document.getElementById('telem').value
    let email = document.getElementById('email').value
    let tipo = document.getElementById('tipo').value
    
    //Verifica se os dados nao sao nulls
    if(nome!=""&& morada!=""&& moradaN!=""&& date!=""&& telem!=""&& email!=""&& tipo!="")
    {
    
        
        //!!Valida Numeros!!
        //Verifica se o telem é inteiro 
        let i=0
        for(i;i<telem.length;i++)
        {
            let c = telem.charAt(i)
            console.log(c)
            if(isNaN(telem.charAt(i)))
            {
                alert("numero inválido")
                break
                    
            }
               
        }
            
        if(i==telem.length)
        {
            //Passar dados de String para Inteiros
                ///moradaN = parseInt(moradaN);
            telem = parseInt(telem);
            tipo = parseInt(tipo)

            //Gurada num Objeto JSON
            var dados=
            {   
                nomeutilizador: nome,
                moradarua: morada,
                moradanumero: moradaN,
                datanascimento: date,
                telemovel: telem,
                email: email,
                idtipos: tipo
            }
                
        
        //const dados = [nome,morada,moradaN,date,telem,email,tipo]//Guarda dados num Array 
        let jsonDados = JSON.stringify(dados)
            
        /* !!!!IMPORTANTE!!!*/
        //preparar o pedido
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: jsonDados
        }
        fetch('http://localhost:4000/utilizador',options)
        .then(res => res.json())
        .then(res => alert(res.text))
        .catch((err)=>{
            alert('Ocorreu um erro no pedido')
        })
    }
    }else{
        const classlb= document.getElementsByClassName('obrig')
        for(let i=0;i<classlb.length;i++){
        classlb[i].innerHTML = `*Obrigatório`}
        alert("Preencha todos os campos!")
        
    }   

}

function sendImage()
{
    //Recolher imagem
    const image = document.getElementById('file').files[0]
    
    const nome = document.getElementById('nome').value
    const morada = document.getElementById('morada_rua').value
    const moradaN = document.getElementById('morada_num').value
    const date = document.getElementById('dnasc').value
    const telem = document.getElementById('telem').value
    const email = document.getElementById('email').value
    const tipo = document.getElementById('tipo').value

    const imageData = new FormData()
     

    imageData.append('image', image)
    imageData.append('nome', nome)
    imageData.append('morada',morada)
    imageData.append('moradaN',moradaN)
    imageData.append('date',date)
    imageData.append('telem',parseInt(telem))
    imageData.append('email',email)
    imageData.append('tipo',tipo)
   
    var options = {
        method: 'POST',
        headers: {
            'Accept':'application/json'
        },
        mode: 'cors',
        body: imageData
    }
    fetch('http://localhost:4000/utilizador', options)
    .then(res => res.json())
    .then(data => alert(data.res))
    .catch((err)=>{
        alert(err)
    })
}

