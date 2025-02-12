document.addEventListener("DOMContentLoaded", function() {
    // ✅ Arrays & Objects - Liste over Audi-modeller
    const models = [
        { name: "Audi R8", img: "/JSprojekt/Billeder/audi_r8.png", type: "Racerbil" },
        { name: "Audi e-tron", img: "/JSprojekt/Billeder/audi_etron.png", type: "Elbil" },
        { name: "Audi Q7", img: "/JSprojekt/Billeder/audi_q7.png", type: "Familiebil" },
        { name: "Audi A6 Allroad", img: "/JSprojekt/Billeder/audi_a6_allroad.png", type: "Arbejdsbil" },
        { name: "Audi Q8", img: "/JSprojekt/Billeder/audi_q8.png", type: "Stor bil" },
        { name: "Audi RS6 Avant", img: "/JSprojekt/Billeder/audi_rs6.png", type: "Limited edition" },
        { name: "Audi A1", img: "/JSprojekt/Billeder/audi_a1.png", type: "Lille bil" },
        { name: "Audi A3 TDI", img: "/JSprojekt/Billeder/audi_a3_tdi.png", type: "Økonomisk bil" }
    ];

    // ✅ Global scope - Denne variabel kan tilgås overalt
    let isDropdownFilled = false;

    // ✅ Funktion til at generere bilmodellerne i dropdown
    function generateModelList(modelsArray) {
        let modelDropdown = document.getElementById("model-dropdown");

        modelsArray.forEach(model => {
            let listItem = document.createElement("li");
            let img = document.createElement("img");
            let text = document.createElement("p");

            img.src = model.img;
            img.alt = model.name;
            text.textContent = `${model.name} - ${model.type}`;

            listItem.appendChild(img);
            listItem.appendChild(text);
            modelDropdown.appendChild(listItem);
        });
    }

    // ✅ If-else statement - Fylder dropdown kun én gang
    if (!isDropdownFilled) {
        generateModelList(models);
        isDropdownFilled = true;
    }

    // ✅ Funktion med if-else statement for at tjekke biltilgængelighed
    function checkCarAvailability(modelName) {
        let carFound = models.some(model => model.name === modelName);
        let messageBox = document.getElementById("availability-message");

        if (carFound) {
            messageBox.textContent = `${modelName} er tilgængelig!`;
            messageBox.style.color = "green";
        } else {
            messageBox.textContent = `${modelName} er ikke på lager.`;
            messageBox.style.color = "red";
        }
    }

    // ✅ Event Listener - Gør så knapperne kan tjekke biltilgængelighed
    document.getElementById("check-r8").addEventListener("click", function() {
        checkCarAvailability("Audi R8");
    });

    document.getElementById("check-tt").addEventListener("click", function() {
        checkCarAvailability("Audi TT");
    });

    // ✅ Boolean - Eksempel på en sand/falsk værdi
    let specialOffer = true;
    let offerMessage = document.getElementById("offer-message");
    offerMessage.textContent = specialOffer ? "🎉 Spar 10% på service!" : "Ingen tilbud i dag.";
    
    // ✅ Aritmetiske operationer
    let totalModels = models.length;
    let halfModels = Math.floor(totalModels / 2);
    document.getElementById("model-count").textContent = `Vi har ${totalModels} modeller, og halvdelen er ${halfModels}.`;
});
