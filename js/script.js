const botones= document.querySelectorAll("button[data-tema]");

botones.forEach(function(boton){
    boton.addEventListener('click', function(){
       document.documentElement.dataset.tema=boton.dataset.tema;
    })
})
 
