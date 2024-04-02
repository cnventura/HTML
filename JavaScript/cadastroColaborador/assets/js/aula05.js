// tem algum errinho, pegue da professora

let formFuncionario = document.getElementById("form-funcionario");
let relatorio = document.getElementById("relatorio");

formFuncionario.addEventListener('submit', (event)=>{
    event.preventDefault();
    //Variáveis para o uso de Cálculos:
    let inss = 0;
    let irpf = 0;
    let vt = 0;
    let liquido = 0;

    //Variáveis das DIVs HTML:
    let nomeFunc = document.getElementById("nome-func");
    let cargoFunc = document.getElementById("cargo-func");
    let dpFunc = document.getElementById("dp-func");
    let salarioFunc = document.getElementById("salario-base");
    let proventoFunc = document.getElementById("provento-salario");
    let liquidoFunc = document.getElementById("salario-liquido");
    let inssFunc = document.getElementById("desc-inss");
    let irpFunc = document.getElementById("desc-irpf");
    let vtFunc = document.getElementById("desc-vt");

//Condicional para desconto de inss:

    if (formFuncionario.salario.value <= 1412) //1412 salario de 2024
    inss = formFuncionario.salario.value * 0.075; // ao invés de lançar 8% transforma em ?? ver expressão não precisa abrir chaves aqui
else if (formFuncionario.salario.value > 1412 && formFuncionario.salario.value <= 2824)
inss = formFuncionario.salario.value * 0.90;
else if (formFuncionario.salario.value > 2980 && formFuncionario.salario.value < 3200)
inss = formFuncionario.salario.value * 0.12;
else if (formFuncionario.salario.value > 3200 && formFuncionario.salario.value <= 7080 || formFuncionario.salario.value > 7080)
inss= formFuncionario.salario.value * 0.14;

//Condicional para desconto de irpf:

if (formFuncionario.salario.value > 1900 && formFuncionario.salario.value <= 2826) 
    irpf = (formFuncionario.salario.value - inss) * 0.075; 
else if (formFuncionario.salario.value > 2826 && formFuncionario.salario.value <= 3751)
irpf = (formFuncionario.salario.value - inss) * 0.15;
else if (formFuncionario.salario.value > 3751 && formFuncionario.salario.value <= 4664)
irpf = (formFuncionario.salario.value - inss) * 0.225;
else if (formFuncionario.salario.value > 4664)
irpf= (formFuncionario.salario.value - inss) * 0.275;

vt = formfuncionario.salario.value * 0.06;

liquido = formFuncionario.salario.value - inss - irpf - vt;

relatorio.style.display = "block"; //ao criar no css o relatorio que aparecerá abaixo após clicar botão de principio é none(oculto)

nomeFunc.innerHTML = formFuncionario.nome.value;
cargoFunc.innerHTML = formFuncionario.cargo.value;
dpFunc.innerHTML = formFuncionario.departamento.value;

salarioFunc.innerHTML = `${Number (formFuncionario.salario.value).toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`;
inssFunc.innerHTML = `${inss.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`;
irpfFunc.innerHTML = `${irpf.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`;
vtFunc.innerHTML = `${Number(formFuncionario.salario.value).toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`;
proventoFunc.innerHTML = `${Number(formFuncionario.salario.value).toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`;
liquidoFunc.innerHTML = `${liquido.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`;


// salario.innerHTML = `${Number (formFuncionario.salario.value).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} ` ;
//      inssFunc.innerHTML = `${inss.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} ` ;
//      irpfFunc.innerHTML = `${irpf.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} ` ;
//      vtFunc.innerHTML = `${Number(formFuncionario.salario.value).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} ` ;
//      proventoFunc.innerHTML = `${Number (formFuncionario.salario.value).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} ` ;
//      liquidoFunc.innerHTML = `${liquido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} ` ;

// })