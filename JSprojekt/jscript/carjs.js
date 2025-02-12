const carImages = [
  { color: "black", src: "/JSprojekt/images/blackcar.jpeg" },
  { color: "white", src: "/JSprojekt/images/whitecar.jpeg" },
  { color: "blue", src: "/JSprojekt/images/bluecar.jpeg" },
];

const colorOptions = document.querySelectorAll(".color-option");
const carImage = document.getElementById("carImage");

// Globale variabler
let clickCount = 0; // Aritmetisk operation (tæl klik)
let isColorChanged = false; // Boolean variabel

const changeCarColor = (color, selectedOption) => {
  const car = carImages.find((car) => car.color === color);

  if (car) {
    carImage.src = car.src;

    colorOptions.forEach((option) => option.classList.remove("selected"));
    selectedOption.classList.add("selected");

    // Øg klik tælleren (Aritmetisk operation)
    clickCount++;

    // Opdater Boolean værdi
    isColorChanged = true;

    console.log(`Farven er ændret ${clickCount} gange.`);
    console.log("Er farven ændret?", isColorChanged);
  } else {
    alert("Billedet blev ikke fundet for den valgte farve.");
  }
};

// Tilknyt event listeners til alle farve muligheder
colorOptions.forEach((option) => {
  option.addEventListener("click", function () {
    changeCarColor(this.id, this);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const blackOption = document.getElementById("black");
  changeCarColor("black", blackOption);
});

$(document).ready(function () {
  // Load the navbar from navbar.html into the container
  $("#navbar-container").load("navbar.html");

  // Add event listener to handle page switching
  $(".nav-link").click(function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the target page ID from the data-page attribute
    var targetPage = $(this).data("page");

    // Hide all pages
    $(".page").removeClass("active").hide();

    // Show the target page
    $("#" + targetPage)
      .addClass("active")
      .show();
  });
});
