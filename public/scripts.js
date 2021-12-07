function init(){
    loadNavBar()
    getTipos()
}

function loadNavBar(){
    const nbar=document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch((err)=>{
        alert('Ocorreu um erro!')
    })
}

function getTipos(){

    fetch('http://localhost:3000/formdata')
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
        //Verifica se o moradaN e telem é inteiro 
        //if(Number.isInteger(moradaN)&& Number.isInteger(telem)){
            //Cria um objeto com os
            let i=0
            for(i;i<telem.length;i++)
            {
                let c = telem.charAt(i)
                console.log(c)
                if(isNaN(c))
                {
                    alert("numero inválido")
                    break
                    
                }
            
            }
            if(i==telem.length)
            {
                //Passar dados de String para Inteiros
                moradaN = parseInt(moradaN);
                telem = parseInt(telem);
            }
            
            var dados=
            {"Dados": 
                {"Nome Completo": nome,
                "Morada": morada,
                "Morada Nº": moradaN,
                "Data de Nascimento": date,
                "Nº Telemovel": telem,
                "E-mail": email,
                "Cargo": tipo}
            }
            //const dados = [nome,morada,moradaN,date,telem,email,tipo]//Guarda dados num Array 
        console.log(dados)
       // }else{//lança alerta
        //   alert("Dados Inválidos!")
        //}
    }else{
        const classlb= document.getElementsByClassName('obrig')
        for(let i=0;i<classlb.length;i++){
        classlb[i].innerHTML = `*Obrigatório`}
        alert("Preencha todos os campos!")
        
    }   

}

