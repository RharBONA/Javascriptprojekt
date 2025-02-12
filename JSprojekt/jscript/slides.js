let slideIndex = 1;
showSlides(slideIndex);

// Funktion til at vise slides
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Kontrollerer om index er uden for grænserne
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Skjuler alle slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Fjerner 'active' fra alle dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Viser den aktuelle slide
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Funktion til at ændre slides ved klik på knapper
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Funktion til at vise en specifik slide ved klik på dots
function currentSlide(n) {
  showSlides(slideIndex = n);
}
setInterval(function() {
  plusSlides(1);
}, 3000)