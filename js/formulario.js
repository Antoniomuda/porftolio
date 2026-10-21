const formulario = document.querySelector("form");
formulario.noValidate=true;

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
    console.log("Todo correcto. Listo para enviar");
  }
  else {
    console.log("hay errores");
  }
});
