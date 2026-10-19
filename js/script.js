const botones= document.querySelectorAll("button[data-tema]");

function aplicarTema(nombre){

    document.documentElement.dataset.tema=nombre;
    botones.forEach(function (bot){
        if (bot.dataset.tema===nombre){
            bot.setAttribute("aria-pressed", "true");
        }else{
            bot.setAttribute("aria-pressed", "false");
        }
    });
    localStorage.setItem("tema", nombre);

}
botones.forEach(function (boton){
    boton.addEventListener("click", function(){
        aplicarTema(boton.dataset.tema);
    });
});

const temaGuardado = localStorage.getItem("tema");

if (temaGuardado){

    aplicarTema(temaGuardado);
}


