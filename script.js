let ticking = false;

function updateHeroFade() {
  const heroElement = document.querySelector(".hero-image");
  if (!heroElement) return;

  const scrollY = window.scrollY;
  const fadeDistance = 400;
  const opacity = Math.min(1, scrollY / fadeDistance);

  heroElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${
    0.5 + opacity * 0.5
  }), rgba(0, 0, 0, ${0.5 + opacity * 0.5})), url('img/header.jpg')`;

  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateHeroFade);
    ticking = true;
  }
}

window.addEventListener("scroll", onScroll);

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
