
// Exercício de Objetos em JavaScript
// Crie uma tabela de dados onde o usuário possa inserir os pedidos de acordo com o cardápio do restaurante.
 
// Dados como: 

// - Nome do lanche

// - Observações

// - Nome do cliente 

// - Id 

// - Valor do lanche.

const lanche={
    lanche1: "hamburguer",
    lanche2: "cachorro quente", 
    lanche3: "duplo hamburguer",
    lancheCliente: function (){
        return "O lanche do " + this.lanche2 +}
    };
    console.log(lanche.lancheCliente());

    const Observações={
        observacao1: "sem cebola",
        observacao2: "nada acrescentar", 
        observacao3: "sem alface",
        observacaoCliente: function (){
            return "A observação do cliente é " + this.observacao2 +}
        };
        console.log(Observações.observacaoCliente());

        const nome={
            nome1: "Pedro",
            nome2: "Cristina", 
            nome3: "João",
            nomeCliente: function (){
                return "O nome do cliente é" + this.nome2 +}
            };
            console.log(nome.nomeCliente());

            const id={
                id1: "1",
                id2: "2", 
                id3: "3",
                idCliente: function (){
                    return "O id do cliente é" + this.id2 +}
                };
                console.log(id.idCliente());

                const valor={
                    valor1: "10",
                    valor2: "20", 
                    valor3: "30",
                    valorCliente: function (){
                        return "O valor do cliente é " + this.valor2 +}
                    };
                    console.log(valor.valorCliente());


// const pedido = {
//     lanche: "hamburguer",
//     observacao: "sem cebola",
//     nomeCliente: "Angela",
//     id: "2",
//     valorLanche: "20,00"
// }
// function pessoa (nome, idade, sexo){
//     this.nome= nome;
//     this.idade= idade;
//     this.sexo= sexo;
// }
// var jose = new pessoa ("Jose Silva", 33, "M");
// var paulo = new pessoa ("Paulo Santos", 39, "M");

// function pedido (lanche, observacao, nomeCliente, id, valorLanche){
//     this.lanche= lanche;
//     this.observacao= observacao;
//     this.nomeCliente= nomeCliente;
//     this.id= id;
//     this.valorLanche= valorLanche;
// }
// var pedido1= new pedido ()



const person = {nome: "John", lanche: "hamburguer", observacao: "sem cebola", id: "3", valor: "30,00"};
const person = {};
person.nome = "John";
person.lanche = "hamburguer";
person.observacao = "sem cebola";
person.id = "3";
person.valor = "30,00";

person.lanche;
console.log (person.id)
person["valor"];

/////////////////


const person = {nome: "John", lanche: "hamburguer", observacao: "sem cebola", id: "3", valor: "30,00"};
