import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import { countDown } from "./countdown.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.ogg", "#activar-alarma", "#desactivar-alarma");
  countDown("#countdown", "#startcountdown", "#deadline");
  // countDown('#countdown', 'startCountDown'new Date('Aug 31 2019 00:00:00 GMT-0500'));
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".circle", ".blackBox");
});
