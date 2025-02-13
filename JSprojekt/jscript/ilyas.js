// Const, let & IKKE var. )
const priceBeforeDiscount = 500000; // Originalpris
const discount = 0.1; // 10% rabat
let finalPrice = priceBeforeDiscount - (priceBeforeDiscount * discount);

// Loops (forEach bruges senere i koden)

// Functions (Opretter en funktion til at tjekke bilmodeller)
function checkCarAvailability() {
    let carName = prompt("Hvilken bilmodel leder du efter?");
    let carFound = models.some(model => model.name.toLowerCase() === carName.toLowerCase());

    if (carFound) {
        alert("Ja, modellen er på lager!");
    } else {
        alert("Desværre, modellen er ikke på lager.");
    }
}

// Arrays (Liste over Audi-modeller)
const models = [
    { name: "Audi R8", img1: "/JSprojekt/Billeder/audi_r8.png", img2: "/JSprojekt/Billeder/audi_r8_alt.png", type: "Racerbil" },
    { name: "Audi e-tron", img1: "/JSprojekt/Billeder/audi_etron.png", img2: "/JSprojekt/Billeder/audi_etron_alt.png", type: "Elbil" },
    { name: "Audi Q7", img1: "/JSprojekt/Billeder/audi_q7.png", img2: "/JSprojekt/Billeder/audi_q7_alt.png", type: "Familiebil" },
    { name: "Audi A6 Allroad", img1: "/JSprojekt/Billeder/audi_a6_allroad.png", img2: "/JSprojekt/Billeder/audi_a6_allroad_alt.png", type: "Arbejdsbil" },
    { name: "Audi Q8", img1: "/JSprojekt/Billeder/audi_q8.png", img2: "/JSprojekt/Billeder/audi_q8_alt.png", type: "Stor bil" },
    { name: "Audi RS6 Avant", img1: "/JSprojekt/Billeder/audi_rs6.png", img2: "/JSprojekt/Billeder/audi_rs6_alt.png", type: "Limited edition" },
    { name: "Audi A1", img1: "/JSprojekt/Billeder/audi_a1.png", img2: "/JSprojekt/Billeder/audi_a1_alt.png", type: "Lille bil" },
    { name: "Audi A3 TDI", img1: "/JSprojekt/Billeder/audi_a3_tdi.png", img2: "/JSprojekt/Billeder/audi_a3_tdi_alt.png", type: "Økonomisk bil" }
];

// DOM (Manipulation af HTML-struktur)
document.addEventListener("DOMContentLoaded", function() {
    const modelList = document.getElementById("ilyas-model-list");

    models.forEach((model) => {
        let listItem = document.createElement("li");
        let img = document.createElement("img");
        let name = document.createElement("span");

        // Opsætning af billede og navn
        img.src = model.img1;
        img.alt = model.name;
        img.style.width = "100px";
        img.style.transition = "0.5s";
        name.textContent = model.name;
        name.style.color = "black";
        name.style.display = "block";
        name.style.textAlign = "center";

        // Tilføj til DOM'en
        listItem.appendChild(img);
        listItem.appendChild(name);
        modelList.appendChild(listItem);

        // If else (Betingelse for at skifte billede)
        let isFirstImage = true;
        setInterval(() => {
            if (isFirstImage) {
                img.src = model.img2;
            } else {
                img.src = model.img1;
            }
            isFirstImage = !isFirstImage;
        }, 2000);

        // Events (Håndtering af brugerinteraktioner)
        listItem.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
        });

        listItem.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });

    // Objects (Audi-modellerne er defineret som objekter i models-arrayet)

    // Operators (Tjekker om en bil er på lager ved at sammenligne brugerinput med arrayets værdier)
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkCarAvailability();
        }
    });

    // Global og local scope (Variablerne priceBeforeDiscount og discount er globale, finalPrice er lokal)
    
    // Arithmetic operations (Udregner rabatten og viser den i en alert)
    alert(`Prisen efter 10% rabat: ${finalPrice} DKK`);

    // Boolean datatypes (Bruges i if-else tjek for biltilgængelighed)
});
