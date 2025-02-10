document.addEventListener("DOMContentLoaded", () => {
const navLinks = document.querySelectorAll('.nav-link');
//Til mine dropdown menuer// 
const dropdownData = {
    Home: ['Book prøvetur', 'Find forhandler', 'Priser og brochurer'],
    Modeloverblik: [
        { name: 'Audi R8 (Racerbil)', img: '/JSprojekt/Billeder/r8.jpg'},
        { name: 'Audi Q4 e-tron (El-bil)', img: '/JSprojekt/Billeder/q4-e-tron.jpg' },
        { name: 'Audi A6 Avant (Familievogn)', img: '/JSprojekt/Billeder/a6-avant.jpg' },   
        { name: 'Audi Q7 (Arbejdsbil)', img: '/JSprojekt/Billeder/q7.jpg' },
        { name: 'Audi Q8 (Stor bil)', img: '/JSprojekt/Billeder/q8.jpg' },
        { name: 'Audi RS7 (Limited Edition)', img: '/JSprojekt/Billeder/rs7.jpg' },
        { name: 'Audi A1 (Lille bil)', img: '/JSprojekt/Billeder/a1.jpg' },
        { name: 'Audi A3 TDI (Økonomisk bil)', img: '/JSprojekt/Billeder/a3-tdi.jpg' }
        ],
        'Find og køb': ['Kampagner', 'Finansiering', 'Forsikring', 'Elektrisk og hybrid', 'Opladning'],
        'Service og tilbehør': ['Audi SPORT', 'Om Audi', 'Kontakt os', 'Karriere'],
        'Alt om elbiler': ['System', 'Tilslutningsmuligheder', 'Forsikring', 'Andet'],
        'Stories of Progress': ['Audi 1910', 'Audi 1932', 'Audi S']
      };
      
        //For at lave dropdown menuer, prøver jeg dette//
        const createDropdown = (items, parentLink) => {
            const dropdown = document.createElement('div');
            dropdown.classList.add('dropdown-menu');
//Note til mig at huske: if er til hvis der ikke er billeder - Else er til når der er billeder//
            if (Array.isArray(items)) {
                items.forEach(item => {
                    const dropdownItem = document.createElement('a');
                    dropdownItem.href = '#';
                    dropdownItem.textContent = item;
                    dropdownItem.classList.add('dropdown-item');
                    dropdown.appendChild(dropdownItem);
                  });
                
                } else {
                    items.forEach(item => {
                        const dropdownItem = document.createElement('div');
                        dropdownItem.classList.add('dropdown-item');

                        const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.name;
      img.style.width = '100px';
      img.style.borderRadius = '8px';
      img.style.transition = 'transform 0.3s';
      
      const text = document.createElement('span');
      text.textContent = item.name;

      const text = document.createElement('span');
      text.textContent = item.name;

      dropdownItem.appendChild(img);
      dropdownItem.appendChild(text);

     //Prøver at se om hovereffekt virker her// 
     
     dropdownItem.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
      });
      dropdownItem.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
      });
      dropdown.appendChild(dropdownItem);
    });
  }

  dropdown.style.display = 'none';
  dropdown.style.position = 'absolute';
  dropdown.style.backgroundColor = 'white';
  dropdown.style.border = '1px solid #ccc';
  dropdown.style.padding = '10px';
  dropdown.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';

  parentLink.style.position = 'relative';
  parentLink.appendChild(dropdown);

  //Nu skal den vises og skjules//

  parentLink.addEventListener('mouseover', () => {
    dropdown.style.display = 'block';
  });
  parentLink.addEventListener('mouseout', () => {
    dropdown.style.display = 'none';
  });
};

// Navigationselementerne//
navLinks.forEach(link => {
    const text = link.textContent.trim();
    if (dropdownData[text]) {
      createDropdown(dropdownData[text], link);
    }
  });
});
