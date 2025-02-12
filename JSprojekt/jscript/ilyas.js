document.addEventListener("DOMContentLoaded", function() {
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

  let modelDropdown = document.getElementById("model-dropdown");
  let isDropdownFilled = false;

  function generateModelList(modelsArray) {
      modelsArray.forEach(model => {
          let listItem = document.createElement("li");
          let img = document.createElement("img");
          let text = document.createElement("p");

          img.src = model.img;
          img.alt = model.name;
          img.classList.add("hover-effect"); // Tilføjer hover effekt via CSS
          text.textContent = `${model.name} - ${model.type}`;

          listItem.appendChild(img);
          listItem.appendChild(text);
          modelDropdown.appendChild(listItem);
      });
  }

  if (!isDropdownFilled) {
      generateModelList(models);
      isDropdownFilled = true;
  }

  let upcomingModel;
  console.log("Ny model:", upcomingModel); 

  let discontinuedModel = null;
  console.log("Udgået model:", discontinuedModel); 

  function showMessage() {
      let message = "Velkommen til Audi"; 
      console.log(message);
  }
  showMessage();

  let specialOfferText = "Spar 10% på service!";
  console.log(specialOfferText);
});
