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
    const tipos=document.getElementById('tipo')
    fetch('http://localhost:3000/formdata')
    .then(res=> res.json())
    .then(data => preencheTipos(data))
    .catch()

}


function preencheTipos(data){
   
    for(let i=0;i<10;i++)
        {
            let opcao = data[i].designacao
            if(data[i].designacao=="Aluno")
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
    let nome = document.getElementById('nome').value
    let morada = document.getElementById('morada_rua').value
    let moradaN = document.getElementById('morada_num').value
    let date = document.getElementById('dnasc').value
    let telem = document.getElementById('telem').value
    let email = document.getElementById('email').value
    let tipo = document.getElementById('tipo').value

    const dados = [nome,morada,moradaN,date,telem,email,tipo]
    console.log(dados)

}

