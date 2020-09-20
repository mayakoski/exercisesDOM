const d = document;

export default function changeTheme(btn, main) {
  const $main = d.querySelector(main);

  const keyTheme = "theme";
  let value;

  verifyTheme(btn, $main);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      // console.log(btn);
      $main.classList.toggle("main-dark");
      if ($main.classList.contains("main-dark")) {
        d.querySelector(btn).innerHTML = "☀️";
        value = "☀️";
        localStorage.setItem(keyTheme, value);
      } else {
        d.querySelector(btn).innerHTML = "🌙";
        value = "🌙";
        localStorage.removeItem(keyTheme);
      }
    }
  });
}

const verifyTheme = (btn, tag) => {
  if (localStorage.getItem("theme") !== null) {
    tag.classList.toggle("main-dark");
    d.querySelector(btn).innerHTML = "☀️";
  }
};
