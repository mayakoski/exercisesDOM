import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import { countDown } from "./countdown.js";
import countdown from "./cuenta_regresiva.js";
import goTop from "./topScroll.js";
import scrollTopButton from "./boton_scroll.js";
import changeTheme from "./changeTheme.js";
import darkTheme from "./tema_oscuro.js";

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
  scrollTopButton(".scroll-top-btn");
  changeTheme(".darkLightBtn", ".main");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".circle", ".blackBox");
});

darkTheme(".dark-theme-btn", "dark-mode");
