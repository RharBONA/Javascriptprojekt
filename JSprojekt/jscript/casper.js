function updateValues() {
  // Hent inputfelter
  const driveLengthInput = document.getElementById("driveLength");
  const leasingMonthsInput = document.getElementById("leasingLength");
  const initialPaymentInput = document.getElementById("initialPayment");

  // Hent outputfelter
  const driveLengthValue = document.getElementById("driveLengthValue");
  const leasingValue = document.getElementById("leasingValue");
  const initialPaymentValue = document.getElementById("initialPaymentValue");
  const output = document.getElementById("output");

  // Konverter inputværdier til tal
  let driveLength = parseInt(driveLengthInput.value) || 0;
  let leasingMonths = parseInt(leasingMonthsInput.value) || 0;
  let initialPayment = parseInt(initialPaymentInput.value) || 0;

  // Opdater UI med inputværdier
  driveLengthValue.innerText = driveLength.toLocaleString();
  leasingValue.innerText = leasingMonths;
  initialPaymentValue.innerText = initialPayment.toLocaleString();

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

  // Opdater UI med beregninger
  output.innerHTML = `
      <p>Månedlig betaling: ${monthlyPayment.toLocaleString()} kr.</p>
      <p>Førstegangsydelse: ${initialPayment.toLocaleString()} kr.</p>
      <p>Samlet pris: ${totalCost.toLocaleString()} kr.</p>
      <p>Restværdi efter leasingperiode: ${residualValue.toLocaleString()} kr.</p>
    `;
}

// Funktion til at beregne månedlig betaling
function calculateMonthlyPayment(driveLength, leasingMonths, initialPayment) {
  let baseMonthlyPayment = 6395;
  let driveCostFactor = ((driveLength - 15000) / 5000) * 500;
  let monthlyPayment = baseMonthlyPayment + driveCostFactor;

  // Justering for leasinglængde
  if (leasingMonths === 12) monthlyPayment += 1000;
  else if (leasingMonths === 48) monthlyPayment -= 500;

  // Reducer baseret på førstegangsbetaling
  let downPaymentEffect = initialPayment * 0.005;
  monthlyPayment -= downPaymentEffect;

  return Math.max(monthlyPayment, 2000); // Minimum 2000 kr.
}

// Funktion til at beregne restværdi
function calculateResidualValue(totalCost) {
  let originalCarValue = 400000;
  let depreciationFactor = 0.4; // 40% værditab
  let minimumResidualValue = originalCarValue * 0.2; // Minimum restværdi 20%

  let residualValue =
    originalCarValue * (1 - depreciationFactor) - totalCost * 0.2;
  return Math.max(residualValue, minimumResidualValue);
}

// Kør ved indlæsning
updateValues();
