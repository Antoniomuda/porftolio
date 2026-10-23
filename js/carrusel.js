const carruseles = document.querySelectorAll(".carrusel");

carruseles.forEach(function (carrusel){
    const galeria = carrusel.querySelector(".galeria");
    const anterior = carrusel.querySelector(".carrusel-anterior");
    const siguiente= carrusel.querySelector(".carrusel-siguiente");

    siguiente.addEventListener("click", function (){
        galeria.scrollBy({
            left:galeria.clientWidth, behavior: "smooth"
        });
   
    });
     anterior.addEventListener("click", function (){
        galeria.scrollBy({
            left:-galeria.clientWidth, behavior: "smooth"
        });
    });

});