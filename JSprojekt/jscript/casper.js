function updateValues() {
  // Definer input ID'er
  const inputIds = ["driveLength", "leasingLength", "initialPayment"];
  const outputIds = ["driveLengthValue", "leasingValue", "initialPaymentValue"];

  // Hent inputværdier ved hjælp af et loop
  let inputValues = inputIds.map(
    (id) => parseInt(document.getElementById(id).value) || 0
  );

  let [driveLength, leasingMonths, initialPayment] = inputValues; // Destructuring

  // Opdater UI ved hjælp af et loop
  inputValues.forEach((value, index) => {
    document.getElementById(outputIds[index]).innerText =
      value.toLocaleString();
  });

  // Beregn månedlig betaling
  let monthlyPayment = calculateMonthlyPayment(
    driveLength,
    leasingMonths,
    initialPayment
  );

  // Beregn samlet pris
  let totalCost = leasingMonths * monthlyPayment + initialPayment;

  // Beregn restværdi
  let residualValue = calculateResidualValue(totalCost);

  // Definer output data
  const results = [
    { label: "Månedlig betaling", value: monthlyPayment },
    { label: "Førstegangsydelse", value: initialPayment },
    { label: "Samlet pris", value: totalCost },
    { label: "Restværdi efter leasingperiode", value: residualValue },
  ];

  // Opdater UI dynamisk
  document.getElementById("output").innerHTML = results
    .map(
      (result) => `<p>${result.label}: ${result.value.toLocaleString()} kr.</p>`
    )
    .join("");
}

// Funktion til at beregne månedlig betaling
function calculateMonthlyPayment(driveLength, leasingMonths, initialPayment) {
  let baseMonthlyPayment = 6395;
  let driveCostFactor = ((driveLength - 15000) / 5000) * 500;
  let monthlyPayment = baseMonthlyPayment + driveCostFactor;

  // Justering for leasinglængde
  const leasingAdjustments = { 12: 1000, 48: -500 };
  monthlyPayment += leasingAdjustments[leasingMonths] || 0;

  // Reducer baseret på førstegangsbetaling
  let downPaymentEffect = initialPayment * 0.005;
  monthlyPayment -= downPaymentEffect;

  return Math.max(monthlyPayment, 2000); // Minimum 2000 kr.
}

// Funktion til at beregne restværdi
function calculateResidualValue(totalCost) {
  let originalCarValue = 400000;
  let depreciationFactor = 0.4;
  let minimumResidualValue = originalCarValue * 0.2;

  let residualValue =
    originalCarValue * (1 - depreciationFactor) - totalCost * 0.2;
  return Math.max(residualValue, minimumResidualValue);
}

// Kør ved indlæsning
updateValues();
