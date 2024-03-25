let nome = document.getElementById('nome')
let serie = document.getElementById('serie')
let materia = document.getElementById('.materia')
//let cargo = document.getElementById('cargo')
let bimestre1 = document.querySelector('bimestre1')
let bimestre2 = document.querySelector('bimestre2')
let bimestre3 = document.querySelector('bimestre3')
let bimestre4 = document.querySelector('bimestre4')




let btnsalvar = document.getElementById("btnsalvar")

btnsalvar.addEventListener("click" , function (){
    document.getElementById('fnome').innerHTML = nome.value
    document.getElementById('fserie').innerHTML = idade.value
    document.getElementById('fmateria').innerHTML = salario.value
    document.getElementById('fb1').innerHTML = cargo.value
    document.getElementById('fb2').innerHTML = cargo.value
    document.getElementById('fb3').innerHTML = cargo.value
    document.getElementById('fb4').innerHTML = cargo.value
});