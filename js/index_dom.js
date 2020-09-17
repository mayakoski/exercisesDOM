import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import { countDown } from "./countdown.js";
import countdown from "./cuenta_regresiva.js";
import goTop from "./topScroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.ogg", "#activar-alarma", "#desactivar-alarma");
  countDown("#countDown", "#startcountdown", "#deadline");
  countdown(
    "countdown",
    "Sep 29 2020 23:18:00",
    "Feliz cumnpleaños Medio Siglo 😔"
  );
  goTop(".topScroll");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".circle", ".blackBox");
});
