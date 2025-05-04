const questions = [
    {
        question: "Which area do you find most interesting?",
        options: ["Software Development", "Cybersecurity", "Networking", "Data Management"],
        correctAnswer: "Software Development"
    },
    {
        question: "What type of work do you enjoy the most?",
        options: ["Building and coding software", "Protecting systems from threats", "Managing networks", "Handling large sets of data"],
        correctAnswer: "Building and coding software"
    },
    // ... (other questions unchanged)
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const quizContainer = document.getElementById("quizContainer");
    const q = questions[currentQuestion];

    quizContainer.innerHTML = `
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">${q.question}</h5>
                ${q.options.map((option, idx) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="option" id="option${idx}" value="${option}">
                        <label class="form-check-label" for="option${idx}">${option}</label>
                    </div>
                `).join("")}
                <button class="btn btn-primary mt-3" id="nextBtn">Next</button>
            </div>
        </div>
    `;

    document.getElementById("nextBtn").addEventListener("click", () => {
        const selected = document.querySelector('input[name="option"]:checked');
        if (!selected) {
            alert("Please select an answer.");
            return;
        }

        if (selected.value === q.correctAnswer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });
}

function showResult() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = `
        <div class="alert alert-success mt-4" role="alert">
            You scored ${score} out of ${questions.length}!
        </div>
    `;
}

document.getElementById("quizStartBtn").addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    showQuestion();
});

