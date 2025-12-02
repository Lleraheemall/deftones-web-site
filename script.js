let ticking = false;

function updateHeroFade() {
  const heroElement = document.querySelector(".hero-image");
  if (!heroElement) return;

  const scrollY = window.scrollY;
  const fadeDistance = 400;
  const opacity = Math.min(1, scrollY / fadeDistance);

  heroElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${
    0.5 + opacity * 0.5
  }), rgba(0, 0, 0, ${0.5 + opacity * 0.5})), url('img/content/hero.jpg')`;

  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateHeroFade);
    ticking = true;
  }
}

window.addEventListener("scroll", onScroll);
