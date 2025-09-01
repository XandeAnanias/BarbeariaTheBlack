function abrirWhatsApp() {
  window.open(
    "https://api.whatsapp.com/send/?phone=5519982604239&text&type=phone_number&app_absent=0",
    "_blank"
  );
}
function abrirInstagram() {
  window.open("https://www.instagram.com/_barbearia_the_black/", "_blank");
}

function abrirMaps() {
  window.open("https://maps.app.goo.gl/wEBbeP8xfuNVpYgv9", "_blank");
}

window.onload = function () {
  history.replaceState(null, null, " ");
};

function social() {
  document.getElementById("social").scrollIntoView({
    behavior: "smooth", // animação suave
  });
}

function maquina() {
  document.getElementById("maquina").scrollIntoView({
    behavior: "smooth",
  });
}

function freestyle() {
  document.getElementById("freestyle").scrollIntoView({
    behavior: "smooth",
  });
}

function barba() {
  document.getElementById("barba").scrollIntoView({
    behavior: "smooth",
  });
}
