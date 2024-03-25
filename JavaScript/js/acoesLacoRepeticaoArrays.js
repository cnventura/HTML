let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
//let cargo = document.getElementById('cargo')
let assunto = document.querySelector('#assunto')
let mensagem = document.querySelector('#mensagem')
let btnenviar = document.getElementById("btnEnviar")

btnEnviar.addEventListener("click" , function (){
    document.getElementById('fnome').innerHTML = nome.value
    document.getElementById('femail').innerHTML = email.value
    document.getElementById('ftelefone').innerHTML = telefone.value
    document.getElementById('fassunto').innerHTML = assunto.value
    document.getElementById('fmensagem').innerHTML = mensagem.value
});
