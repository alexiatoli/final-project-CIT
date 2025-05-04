const questions = [
    {
        question: "Which area do you find most interesting?",
        options: ["Software Development", "Cybersecurity", "Networking", "Data Management"]
    },
    {
        question: "What type of work do you enjoy the most?",
        options: ["Building and coding software", "Protecting systems from threats", "Managing networks", "Handling large sets of data"]
    },
    {
        question: "Which course would you be most excited to take?",
        options: ["Web Programming", "Digital Forensics", "Routing & Switching", "Database Design"]
    },
    {
        question: "What job title sounds most appealing to you?",
        options: ["Software Engineer", "Security Analyst", "Network Administrator", "Data Analyst"]
    },
    {
        question: "Which tool or concept would you like to learn?",
        options: ["JavaScript", "Firewalls", "Cisco Routers", "SQL"]
    },
    {
        question: "What kind of problems do you like solving?",
        options: ["Logical and coding puzzles", "Security breaches", "Connectivity issues", "Pattern analysis"]
    },
    {
        question: "Which environment sounds ideal to you?",
        options: ["Agile development team", "Security operations center", "IT infrastructure team", "Data analytics team"]
    },
    {
        question: "Which topic excites you the most?",
        options: ["Mobile app development", "Ethical hacking", "Cloud networking", "Data warehousing"]
    },
    {
        question: "What do you value in a career?",
        options: ["Creative problem-solving", "Defending digital systems", "Building reliable networks", "Extracting insights from data"]
    },
    {
        question: "Which of these projects sounds most interesting?",
        options: ["Creating a web app", "Analyzing malware", "Setting up a secure Wi-Fi network", "Building a dashboard from a database"]
    },
    {
        question: "Where do you see yourself working?",
        options: ["Tech startup", "Government cybersecurity agency", "Enterprise IT department", "Financial analytics firm"]
    },
    {
        question: "What’s your favorite school subject?",
        options: ["Computer Science", "Criminal Justice", "Electronics", "Statistics"]
    }
];


const trackMap = {
    "Software Development": "Software Development",
    "Building and coding software": "Software Development",
    "Web Programming": "Software Development",
    "Software Engineer": "Software Development",

    "Cybersecurity": "Cybersecurity",
    "Protecting systems from threats": "Cybersecurity",
    "Digital Forensics": "Cybersecurity",
    "Security Analyst": "Cybersecurity",

    "Networking": "Networking",
    "Managing networks": "Networking",
    "Routing & Switching": "Networking",
    "Network Administrator": "Networking",

    "Data Management": "Data Management",
    "Handling large sets of data": "Data Management",
    "Database Design": "Data Management",
    "Data Analyst": "Data Management"
};

let currentQuestion = 0;
let trackScores = {
    "Software Development": 0,
    "Cybersecurity": 0,
    "Networking": 0,
    "Data Management": 0
};

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

        const track = trackMap[selected.value];
        if (track) {
            trackScores[track]++;
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
    
    // Get the track with the highest score
    const recommendedTrack = Object.keys(trackScores).reduce((a, b) =>
        trackScores[a] > trackScores[b] ? a : b
    );

    quizContainer.innerHTML = `
        <div class="alert alert-info mt-4" role="alert">
            Based on your answers, your recommended CIT track is: <strong>${recommendedTrack}</strong>!
        </div>
        <button class="btn btn-secondary mt-3" onclick="location.reload()">Try Again</button>
    `;
}

document.getElementById("quizStartBtn").addEventListener("click", function () {
    currentQuestion = 0;
    trackScores = {
        "Software Development": 0,
        "Cybersecurity": 0,
        "Networking": 0,
        "Data Management": 0
    };
    showQuestion();
});


