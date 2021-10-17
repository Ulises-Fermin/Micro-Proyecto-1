let Hero = document.getElementById("hero");
var i = 0;
var imagenes = [];
var time = 3000;

imagenes[0] = "./img1.jpg";
imagenes[1] = "./img2.jpg";
imagenes[2] = "./img4.jpg";

function hero_s() {
  Hero.src = imagenes[i];
  if (i < imagenes.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("hero_s()", time);
}

window.onload = hero_s;

const Nf = document.getElementById("Nombre_f");
const Cf = document.getElementById("Correo_f");
const Mf = document.getElementById("Mensaje_f");
const Bt_f = document.getElementById("Enviar_f");
let N_T = "";
let C_T = "";
let M_F = "";

Nf.addEventListener("change", (event) => {
  N_T = event.target.value;
});
Cf.addEventListener("change", (event) => {
  C_T = event.target.value;
});
Mf.addEventListener("change", (event) => {
  M_F = event.target.value;
});

Bt_f.addEventListener("click", () => {
  console.log(N_T);
  console.log(C_T);
  console.log(M_F);
  console.log("Su solicitud ha sido enviada");
});
