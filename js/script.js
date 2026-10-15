const botones= document.querySelectorAll("button[data-tema]");

botones.forEach(function(boton){
    boton.addEventListener('click', function(){
       document.documentElement.dataset.tema=boton.dataset.tema;
       botones.forEach(function(bot){
        if(bot === boton){
            bot.setAttribute("aria-pressed", "true");
        }else{
            bot.setAttribute("aria-pressed", "false");
        }
       })
    })
})
 
