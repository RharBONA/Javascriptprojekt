const carImages = [
  { color: "black", src: "/JSprojekt/images/blackcar.jpeg" },
  { color: "white", src: "/JSprojekt/images/whitecar.jpeg" },
  { color: "blue", src: "/JSprojekt/images/bluecar.jpeg" },
];

const carColorOptions = document.querySelectorAll(".car-color-option");
const carImage = document.getElementById("carImage");

let clickCount = 0;
let isColorChanged = false;

const changeCarColor = (color, selectedOption) => {
  const car = carImages.find((car) => car.color === color);

  if (car) {
    carImage.src = car.src;

    carColorOptions.forEach((option) => option.classList.remove("selected"));
    selectedOption.classList.add("selected");

    clickCount++;

    isColorChanged = true;

    console.log(`Farven er ændret ${clickCount} gange.`);
    console.log("Er farven ændret?", isColorChanged);
  } else {
    alert("Billedet blev ikke fundet for den valgte farve.");
  }
};

carColorOptions.forEach((option) => {
  option.addEventListener("click", function () {
    changeCarColor(this.id, this);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const blackOption = document.getElementById("black");
  changeCarColor("black", blackOption);
});
