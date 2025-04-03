document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    let gpa = parseFloat(document.getElementById("gpa").value);
    let ielts = parseFloat(document.getElementById("ielts").value);
    let achievements = document.getElementById("achievements").value === "yes";
    
    let university = document.getElementById("university").value.trim();
    let universityAcceptanceRates={
        "harvard":5,
        'mit':7,
        'stanford':4,
        'iowa': 60,
        'florida': 24
    };

    let probability = 0;

    if (gpa < 2.5) {
        probability = 20;
    } else if (gpa >= 2.5 && gpa <= 3.5 && ielts >= 6.0) {
        probability = 50;
    } else if (gpa > 3.5 && ielts >= 7.0) {
        probability = 80;
    }

    if (achievements) {
        probability += 10;
    }

    let acceptanceRate=universityAcceptanceRates[university];
    probability= (probability * acceptanceRate)/100;

    probability = probability > 100 ? 100 : probability;

console.log("Selected university:", university);
    document.getElementById("result").textContent = `Your admission chance for ${university.toUpperCase()} is: ${probability}%`;
});