let vetor = []
for (let posicao = 0; posicao<vetor.length; posicao++){
    console.log(vetor[posicao])
}

let formContato = document.getElementById("form-contato");
let divLista = document.getElementById("lista");
let nome = [];
let email = [];
let telefone = [];
let assunto = [];
let msg = [];

//inserindo dados no array:
formContato.addEventListener("submit", (event) =>{
    event.preventDefault();
    nome.push(formContato.nome.value);
    email.push(formContato.email.value);
    telefone.push(formContato.telefone.value);
    assunto.push(formContato.assunto.value);
    assunto.push(formContato.mensagem.value);
    girarLista()
})

function gerarLista(){
    
}