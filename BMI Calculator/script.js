function calculateBMI() {
    // Get height and weight values
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // Validate input
    if (height === '' || weight === '') {
        alert('Please enter both height and weight!');
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;  // Convert cm to meters
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Display Result
    const result = document.getElementById('result');
    let message = '';

    if (bmi < 18.5) {
        message = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        message = 'Overweight';
    } else {
        message = 'Obesity';
    }

    result.innerHTML =` Your BMI is <strong>${bmi}</strong> (${message})`;
}