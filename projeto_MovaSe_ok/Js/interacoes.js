$(document).ready(function(){
    $('#destaque').slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false
    });
});

//Interação para menu: se eu clicar no menu apareça. Se eu clicar de novo esconda.
function clickMenu(){
    // alert("Funcionou")
    if(itens.style.display=="block"){
        itens.style.display="none"
    }else{
        itens.style.display = 'block'}
    }
        

