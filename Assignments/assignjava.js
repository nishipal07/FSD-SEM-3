
let score = 0;

function startQuiz() {

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const branch = document.getElementById("branch").value.trim();
    const section = document.getElementById("section").value.trim();

    if (name === "" || roll === "" || branch === "" || section === "") {
        alert("Please fill all the details.");
        return;
    }

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}


function nextQuestion(questionNumber) {

    // Check answer
    const selected = document.querySelector(
        'input[name="q' + questionNumber + '"]:checked'
    );

    if (selected === null) {
        alert("Please select an answer.");
        return;
    }

    // Correct answers
    if (questionNumber === 1 && selected.value === "Paris") {
        score++;
    }

    if (questionNumber === 2 && selected.value === "Mars") {
        score++;
    }

    if (questionNumber === 3 && selected.value === "Pacific") {
        score++;
    }
    if(questionNumber  ==  4&& selected.value=="New Delhi"){
        score++;
    }

    // Hide current question
    document.getElementById("question" + questionNumber).style.display = "none";

    // Show next question
    document.getElementById("question" + (questionNumber + 1)).style.display = "block";
}


function checkAnswer(option, correctAnswer) {

    // Remove previous highlighting
    let options = document.getElementsByName(option.name);

    for (let i = 0; i < options.length; i++) {
        options[i].parentElement.classList.remove("correct");
        options[i].parentElement.classList.remove("wrong");
    }

    // Highlight only selected option
    if (option.value === correctAnswer) {
        option.parentElement.classList.add("correct");
    } else {
        option.parentElement.classList.add("wrong");
    }
}
function submitQuiz() {

    const selected = document.querySelector('input[name="q4"]:checked');

    if (selected === null) {
        alert("Please select an answer.");
        return;
    }

    if (selected.value === "Tokyo") {
        score++;
    }

    document.getElementById("question4").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("score").innerHTML =
        "Your score is " + score + " out of 5.";
}

