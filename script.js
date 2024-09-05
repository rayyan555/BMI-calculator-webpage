function calculateBMI() {
    // Get values from form
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Validate input
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerText = 'Please enter valid weight and height.';
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    let bmiCategory = '';

    // Determine BMI category
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }

    // Provide analysis and suggestions
    let analysis = '';
    switch (bmiCategory) {
        case 'Underweight':
            analysis = 'You are underweight. Consider consulting a healthcare provider for personalized advice.';
            break;
        case 'Normal weight':
            analysis = 'Your weight is within the normal range. Keep up the good work!';
            break;
        case 'Overweight':
            analysis = 'You are overweight. Consider adopting a healthier lifestyle with a balanced diet and regular exercise.';
            break;
        case 'Obesity':
            analysis = 'You are classified as obese. It is recommended to seek advice from a healthcare provider for a comprehensive plan.';
            break;
    }

    // Display result
    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}. (${bmiCategory}) ${analysis}`;
}
