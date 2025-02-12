//Global scope - Disse variabler bruges i hele scriptet
const config = {
  baseMonthlyPayment: 6395,
  minMonthlyPayment: 2000,
  originalCarValue: 400000,
  depreciationFactor: 0.4,
};

//Object til at håndtere inputværdier
const userInput = {
  driveLength: 15000,
  leasingMonths: 36,
  initialPayment: 0,
};

//Funktion til at hente input og opdatere userInput object
function updateUserInput() {
  const inputIds = ["driveLength", "leasingMonths", "initialPayment"];
  inputIds.forEach((id) => {
    userInput[id] = parseInt(document.getElementById(id).value) || 0;
  });
}

//Funktion til at beregne månedlig betaling
function calculateMonthlyPayment() {
  let { driveLength, leasingMonths, initialPayment } = userInput; // 🏠 Local scope

  let driveCostFactor = ((driveLength - 15000) / 5000) * 500;
  let monthlyPayment = config.baseMonthlyPayment + driveCostFactor;

  //Object med leasingjusteringer
  const leasingAdjustments = { 12: 1000, 48: -500 };
  monthlyPayment += leasingAdjustments[leasingMonths] || 0;

  //Reducer betaling baseret på førstegangsbetaling
  monthlyPayment -= initialPayment * 0.005;

  //Boolean operator: Sikrer at månedlig betaling ikke går under minimum
  return monthlyPayment < config.minMonthlyPayment
    ? config.minMonthlyPayment
    : monthlyPayment;
}

//Funktion til at beregne restværdi
function calculateResidualValue(totalCost) {
  let minResidualValue = config.originalCarValue * 0.2;
  let estimatedResidual =
    config.originalCarValue * (1 - config.depreciationFactor) - totalCost * 0.2;

  return estimatedResidual < minResidualValue
    ? minResidualValue
    : estimatedResidual;
}

//Funktion til at opdatere UI
function updateUI() {
  const outputIds = ["driveLengthValue", "leasingValue", "initialPaymentValue"];
  Object.values(userInput).forEach((value, index) => {
    document.getElementById(outputIds[index]).innerText =
      value.toLocaleString();
  });

  let monthlyPayment = calculateMonthlyPayment();
  let totalCost =
    userInput.leasingMonths * monthlyPayment + userInput.initialPayment;
  let residualValue = calculateResidualValue(totalCost);

  const results = [
    { label: "Månedlig betaling", value: monthlyPayment },
    { label: "Førstegangsydelse", value: userInput.initialPayment },
    { label: "Samlet pris", value: totalCost },
    { label: "Restværdi efter leasingperiode", value: residualValue },
  ];

  document.getElementById("output").innerHTML = results
    .map(
      (result) => `<p>${result.label}: ${result.value.toLocaleString()} kr.</p>`
    )
    .join("");
}

//Funktion til at opdatere både input og UI
function updateValues() {
  updateUserInput(); // Opdater inputdata
  updateUI(); // Opdater interface
}

//Event listeners for automatisk opdatering
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", updateValues); // Opdater værdier når input ændres
});

// Hent inputfelter og tilknyt event listeners
document.addEventListener("DOMContentLoaded", function () {
  updateValues(); // Initial opdatering når DOM'en er klar
});
