/** 
 En este arcivo voy a conseguir validar los datos introducidos por el 
 usuario. A parte voy a controlar el aviso de correo enviado para evitar
 que lo gestione Formpree y no lo redirija a esa web con el mensaje de éxito de envío.
 Saldrá un mensaje de aviso de éxito al envíar el mail.
**/

const formulario = document.getElementById("formulario-contacto");
formulario.noValidate = true;

function mostrarAviso(texto, tipo) {
  const aviso = document.getElementById("aviso");
  const avisoTexto = document.getElementById("aviso-texto");
  avisoTexto.textContent = texto;
  aviso.dataset.tipo = tipo;
  aviso.showModal();
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let todoBien = true;

  const nombre = document.getElementById("nombre");
  const errorNombre = document.getElementById("error-nombre");
  const patronNombre = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]{2,60}$/;

  if (patronNombre.test(nombre.value.trim())) {
    errorNombre.textContent = "";
    nombre.removeAttribute("aria-invalid");
  } else {
    errorNombre.textContent = "Escribe tu nombre, al menos 2 letras.";
    nombre.setAttribute("aria-invalid", "true");
    todoBien = false;
  }

  const correo = document.getElementById("correo");
  const errorCorreo = document.getElementById("error-correo");

  if (correo.value.trim() === "" || correo.validity.typeMismatch) {
    errorCorreo.textContent =
      "Escribe un correo válido, por ejemplo: ana@mail.com";
    correo.setAttribute("aria-invalid", "true");
    todoBien = false;
  } else {
    errorCorreo.textContent = "";
    correo.removeAttribute("aria-invalid");
  }

  const mensaje = document.getElementById("mensaje");
  const errorMensaje = document.getElementById("error-mensaje");

  if (mensaje.value.trim().length < 4) {
    errorMensaje.textContent = "Escribe un mensaje, al menos 4 caracteres.";
    mensaje.setAttribute("aria-invalid", "true");
    todoBien = false;
  } else {
    errorMensaje.textContent = "";
    mensaje.removeAttribute("aria-invalid");
  }

  if (todoBien) {
    const boton = formulario.querySelector("button");


    boton.disabled = true;
    boton.textContent = "Enviando...";

    fetch(formulario.action, {
      method: "POST",
      body: new FormData(formulario),
      headers: { Accept: "application/json" },
    })
      .then(function (respuesta) {
        if (respuesta.ok) {
         
          mostrarAviso("¡Gracias! Le contesto pronto.", "ok");
          formulario.reset();
        } else {
        
            mostrarAviso("Algo ha fallado. Escríbame directamente a mi correo.", "error");
        }
      })
      .catch(function () {
        mostrarAviso("Algo ha fallado. Mejor escríbeme directamente al correo.", "error");
      })
      .finally(function () {
        boton.disable = false;
        boton.textContent = "Enviar";
      });
  }
});
