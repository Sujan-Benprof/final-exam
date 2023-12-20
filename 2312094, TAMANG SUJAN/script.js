// script.js

function generateSchedule() {
    var plantType = document.getElementById('plantType').value;
    var potSize = document.getElementById('potSize').value;
    var environment = document.getElementById('environment').value;

    var scheduleResult = document.getElementById('scheduleResult');
    scheduleResult.innerHTML = '';

    if (plantType && potSize && environment) {
        var wateringFrequency = calculateWateringFrequency(plantType, potSize, environment);

        scheduleResult.innerHTML = `<p>Your recommended watering frequency is every ${wateringFrequency} days.</p>`;
    } else {
        scheduleResult.innerHTML = '<p>Please fill out all fields.</p>';
    }
}

function calculateWateringFrequency(plantType, potSize, environment) {
    var baseFrequency = 7;
    var potSizeFactor = potSize / 12;
    var environmentFactor = (environment === 'outdoor') ? 1.5 : 1;

    var wateringFrequency = baseFrequency * potSizeFactor * environmentFactor;

    return Math.round(wateringFrequency);
}

// Update pot size value display dynamically
var potSizeInput = document.getElementById('potSize');
var potSizeValueDisplay = document.getElementById('potSizeValue');
potSizeInput.addEventListener('input', function() {
    potSizeValueDisplay.textContent = potSizeInput.value + ' inches';
});
