function calculateBMI() {
    let weight = parseFloat(document.getElementById("Weight").value);
    let height = parseFloat(document.getElementById("Height").value);

  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

 
    let bmi = weight / (height * height);

 
    document.getElementById("bmiResult").innerHTML = "Your BMI is " + bmi.toFixed(2) ;

    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obesity";
    }
    document.getElementById("bmiCategory").innerHTML = "Category : " + bmiCategory;
}

const colors = [
    'linear-gradient(to right, #a18cd1, #fbc2eb)',
   'linear-gradient(to right, #00c6ff, #0072ff)',
   'linear-gradient(to right, #1a2980, #26d0ce)'
];

let currentColor = 0;

function changeBackground() {
    currentColor = (currentColor + 1) % colors.length;
    document.body.style.background = colors[currentColor];
}