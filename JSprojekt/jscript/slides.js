// Variabel der holder styr på det aktuelle slide (starter ved 1, fordi slides er 1-indekserede)
let slideIndex = 1;

// Kalder funktionen første gang, så det første slide vises ved indlæsning af siden
showSlides(slideIndex);

/**
 * Funktion der viser det ønskede slide
 * @param {number} n - Nummeret på det slide, der skal vises
 */
function showSlides(n) {
  let i; // Variabel til loop
  const slides = document.getElementsByClassName("mySlides"); // Henter alle slides
  const dots = document.getElementsByClassName("dot"); // Henter alle navigationsdots

  // Hvis n er større end antallet af slides, starter vi forfra ved slide 1
  if (n > slides.length) { 
    slideIndex = 1; 
  } 
  // Hvis n er mindre end 1, går vi til det sidste slide
  else if (n < 1) { 
    slideIndex = slides.length; 
  }

  // Loop gennem alle slides og skjul dem
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Gør alle slides usynlige
  }

  // Loop gennem alle dots og fjern "active"-klassen
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Fjerner aktiv markering
  }

  // Viser det aktuelle slide og markerer den tilsvarende dot
  slides[slideIndex - 1].style.display = "block"; // Viser det rigtige slide
  dots[slideIndex - 1].className += " active"; // Tilføjer "active"-klassen til den valgte dot
}

/**
 * Funktion til at skifte slide ved at trykke på "næste" eller "forrige" knapperne
 * @param {number} n - Antallet af slides, der skal skiftes (+1 eller -1)
 */
function plusSlides(n) {
  showSlides(slideIndex += n); // Opdaterer slideIndex og kalder showSlides
}

/**
 * Funktion til at skifte til et specifikt slide ved at klikke på dots
 * @param {number} n - Slide-nummeret der skal vises
 */
function currentSlide(n) {
  showSlides(slideIndex = n); // Opdaterer slideIndex og viser det ønskede slide
}

// Automatisk skift af slides hver 5. sekund
setInterval(function() {
  plusSlides(1); // Skifter til næste slide automatisk
}, 5000);
