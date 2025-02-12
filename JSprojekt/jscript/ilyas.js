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

const modelMenu = document.getElementById("model-menu");

// Generer dropdown-menu med biler
models.forEach(model => {
    let li = document.createElement("li");
    li.classList.add("model-item");

    let img = document.createElement("img");
    img.src = model.img1;
    img.alt = model.name;

    // Billedeskift
    let isFirstImage = true;
    setInterval(() => {
        img.src = isFirstImage ? model.img2 : model.img1;
        isFirstImage = !isFirstImage;
    }, 2000);

    let span = document.createElement("span");
    span.textContent = model.name;

    li.appendChild(img);
    li.appendChild(span);
    modelMenu.appendChild(li);
});

// Tjek tilgængelighed
function checkAvailability(model) {
    const availability = {
        "Audi R8": 4,
        "Audi A4": 0
    };

    if (availability[model] > 0) {
        alert(`${model} er tilgængelig! Der er ${availability[model]} tilbage.`);
    } else {
        alert(`${model} er desværre ikke på lager.`);
    }
}

// Rabat på elbiler
function checkDiscount(model) {
    if (model === "Audi e-tron") {
        alert("Tillykke! Du får 10% rabat på denne elbil.");
    } else {
        alert("Ingen rabat på denne model.");
    }
}
