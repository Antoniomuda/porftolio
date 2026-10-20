const botones = document.querySelectorAll("button[data-tema]");

function aplicarTema(nombre) {
  document.documentElement.dataset.tema = nombre;
  botones.forEach(function (bot) {
    if (bot.dataset.tema === nombre) {
      bot.setAttribute("aria-pressed", "true");
    } else {
      bot.setAttribute("aria-pressed", "false");
    }
  });
  localStorage.setItem("tema", nombre);
}
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    aplicarTema(boton.dataset.tema);
  });
});

const temaGuardado = localStorage.getItem("tema");

if (temaGuardado) {
  aplicarTema(temaGuardado);
}

const lect = document.getElementById("lectura");

function aplicarLectura(activa) {
  if (activa === true) {
    document.documentElement.dataset.lectura = "si";
    lect.setAttribute("aria-pressed", "true");
    localStorage.setItem("lectura", "si");
  } else {
    document.documentElement.dataset.lectura = "no";
    lect.setAttribute("aria-pressed", "false");
    localStorage.setItem("lectura", "no");
  }
}

lect.addEventListener("click", function () {
  if (lect.getAttribute("aria-pressed") === "true") {
    aplicarLectura(false);
  } else {
    aplicarLectura(true);
  }
});
if (localStorage.getItem("lectura") === "si") {
  aplicarLectura(true);
}
