function updateValues() {
  let driveLength = parseInt(document.getElementById("driveLength").value);
  let leasingMonths = parseInt(document.getElementById("leasingLength").value);
  let initialPayment = parseInt(
    document.getElementById("initialPayment").value
  );

  // Opdater slider værdierne
  document.getElementById("driveLengthValue").innerText =
    driveLength.toLocaleString();
  document.getElementById("leasingValue").innerText = leasingMonths;
  document.getElementById("initialPaymentValue").innerText =
    initialPayment.toLocaleString();

  // Basis månedlig betaling
  let baseMonthlyPayment = 6395;

  // Tillæg pr. ekstra 5.000 km
  let driveCostFactor = ((driveLength - 15000) / 5000) * 500;

  // Beregn månedlig betaling
  let monthlyPayment = baseMonthlyPayment + driveCostFactor;

  // Justering af månedlig betaling efter leasinglængde
  if (leasingMonths == 12) {
    monthlyPayment += 1000; // Kort leasing = dyrere månedligt
  } else if (leasingMonths == 48) {
    monthlyPayment -= 500; // Lang leasing = billigere månedligt
  }

  // Reducer månedlig betaling baseret på førstegangsydelse
  let downPaymentEffect = initialPayment * 0.005; // 0.5% af førstegangsydelsen
  monthlyPayment -= downPaymentEffect;

  if (monthlyPayment < 2000) monthlyPayment = 2000; // Minimum månedlig betaling

  // Beregn samlet pris
  let totalCost = leasingMonths * monthlyPayment + initialPayment;

  // Simuleret oprindelig bilværdi
  let originalCarValue = 400000;

  // Beregn realistisk afskrivning
  let depreciationFactor = 0.4; // Estimeret værditab på 40% over leasingperioden
  let minimumResidualValue = originalCarValue * 0.2; // Minimum restværdi er 20% af bilens værdi

  // Beregn restværdi mere realistisk
  let residualValue =
    originalCarValue * (1 - depreciationFactor) - totalCost * 0.2;

  // Sikre at restværdien ikke falder under minimum
  if (residualValue < minimumResidualValue)
    residualValue = minimumResidualValue;

  // Opdater output
  document.getElementById("output").innerHTML = `
        <p>Månedlig betaling: ${monthlyPayment.toLocaleString()} kr.</p>
        <p>Førstegangsydelse: ${initialPayment.toLocaleString()} kr.</p>
        <p>Samlet pris: ${totalCost.toLocaleString()} kr.</p>
        <p>Restværdi efter leasingperiode: ${residualValue.toLocaleString()} kr.</p>
    `;
}

// Kør funktionen ved load
updateValues();
