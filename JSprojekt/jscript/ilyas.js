// Opretter en liste af Audi-modeller som et array af objekter
const models = [
    { name: "Audi R8", img1: "images/audi_r8.png", img2: "images/audi_r8_alt.png", type: "Racerbil" },
    { name: "Audi e-tron", img1: "images/audi_etron.png", img2: "images/audi_etron_alt.png", type: "Elbil" },
    { name: "Audi Q7", img1: "images/audi_q7.png", img2: "images/audi_q7_alt.png", type: "Familiebil" },
    { name: "Audi A6 Allroad", img1: "images/audi_a6_allroad.png", img2: "images/audi_a6_allroad_alt.png", type: "Arbejdsbil" },
    { name: "Audi Q8", img1: "images/audi_q8.png", img2: "images/audi_q8_alt.png", type: "Stor bil" },
    { name: "Audi RS6 Avant", img1: "images/audi_rs6.png", img2: "images/audi_rs6_alt.png", type: "Limited edition" },
    { name: "Audi A1", img1: "images/audi_a1.png", img2: "images/audi_a1_alt.png", type: "Lille bil" },
    { name: "Audi A3 TDI", img1: "images/audi_a3_tdi.png", img2: "images/audi_a3_tdi_alt.png", type: "Økonomisk bil" }
];

// Funktion til at generere model-listen i dropdown-menuen
document.addEventListener("DOMContentLoaded", function() {
    const modelList = document.getElementById("ilyas-model-list");

    models.forEach((model) => {
        let listItem = document.createElement("li");
        let img = document.createElement("img");
        let name = document.createElement("span");

        img.src = model.img1;
        img.alt = model.name;
        img.style.width = "100px";
        img.style.transition = "0.5s";
        name.textContent = model.name;
        name.style.color = "black";
        name.style.display = "block";
        name.style.textAlign = "center";

        listItem.appendChild(img);
        listItem.appendChild(name);
        modelList.appendChild(listItem);

        let isFirstImage = true;
        setInterval(() => {
            img.src = isFirstImage ? model.img2 : model.img1;
            isFirstImage = !isFirstImage;
        }, 2000);

        listItem.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
        });

        listItem.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });

    // Boolean check
    let serviceDiscount = true;
    if (serviceDiscount) {
        alert("Spar 10% på service i denne uge!");
    }

    // If-else logic
    function checkCarAvailability() {
        let carName = prompt("Hvilken bilmodel leder du efter?");
        let carFound = models.some(model => model.name.toLowerCase() === carName.toLowerCase());

        if (carFound) {
            alert("Ja, modellen er på lager!");
        } else {
            alert("Desværre, modellen er ikke på lager.");
        }
    }

    // Brug af variabler, operators og arithmetic operations
    let priceBeforeDiscount = 500000;
    let discount = 0.1; // 10% rabat
    let finalPrice = priceBeforeDiscount - (priceBeforeDiscount * discount);
    console.log("Pris efter rabat:", finalPrice);

    // Global og lokal scope
    let globalVar = "Jeg er global";
    function testScope() {
        let localVar = "Jeg er lokal";
        console.log(globalVar);
        console.log(localVar);
    }
    testScope();

    // Event handler for at tjekke biltilgængelighed
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkCarAvailability();
        }
    });
});
