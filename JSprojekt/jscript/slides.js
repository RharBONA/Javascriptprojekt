document.addEventListener("DOMContentLoaded", function() { 
  // Event listener for when the DOM content is loaded (page is ready)

  let slideIndex = 0; // Starter fra det første billede
  let slides = document.getElementsByClassName("mySlides"); // Henter alle elementer med klassen "mySlides"
  let dots = document.getElementsByClassName("dot"); // Henter alle elementer med klassen "dot"

  showSlides(slideIndex); // Starter slideshowet ved at kalde showSlides med det første billede

  // Funktion til at vise slides
  function showSlides(n) {
    let i;

    // Hvis vi er ude af intervallet, starter vi forfra
    if (n >= slides.length) { slideIndex = 0 } // Hvis slideIndex er større end antallet af slides, starter vi forfra
    if (n < 0) { slideIndex = slides.length - 1 } // Hvis slideIndex er mindre end 0, går vi til det sidste slide

    // Skjuler alle slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Skjuler alle slides ved at ændre deres display til "none"
    }

    // Opdaterer prikkerne (dots)
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); // Fjerner "active"-klassen fra alle dots
    }

    // Viser det aktuelle slide
    slides[slideIndex].style.display = "block"; // Viser det slide, der svarer til den aktuelle slideIndex
    dots[slideIndex].className += " active"; // Tilføjer "active"-klassen til den aktuelle dot
  }

  // Funktion til at ændre slide (frem eller tilbage)
  function changeSlide(n) {
    slideIndex += n; // Øger eller formindsker slideIndex
    showSlides(slideIndex); // Kalder showSlides for at vise det nye slide
  }

  // Tilføj event listeners til piletasterne (forrige og næste)
  document.querySelector(".prev").addEventListener("click", function() {
    changeSlide(-1); // Når "prev" knappen bliver klikket, går vi til forrige slide
  });

  document.querySelector(".next").addEventListener("click", function() {
    changeSlide(1); // Når "next" knappen bliver klikket, går vi til næste slide
  });

  // Automatisk skift hvert 4. sekund
  setInterval(function() {
    changeSlide(1); // Skifter til næste slide automatisk hver 4. sekund
  }, 6000);
});
