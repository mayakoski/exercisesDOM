const d = document;
export default function goTop(goTopBtn) {
  const goTop = d.querySelector(goTopBtn);
  console.log(goTop);
  d.addEventListener("scroll", (e) => {
    if (document.body.scrollTop > 500 || d.documentElement.scrollTop > 500) {
      goTop.classList.remove("hidden");
      goTop.classList.add("shown");
    } else {
      goTop.classList.add("hidden");
      goTop.classList.remove("shown");
    }
  });
}
