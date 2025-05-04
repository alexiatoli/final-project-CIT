// Example quiz array with 10 questions
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
    {
        question: "Which of the following careers involves securing computer systems and networks?",
        options: ["Web Developer", "Network Engineer", "Cybersecurity Analyst", "Database Administrator"],
        correctAnswer: "Cybersecurity Analyst"
    },
    {
        question: "If you enjoy designing websites and web applications, which concentration is most suitable for you?",
        options: ["Software Development", "Cybersecurity", "Networking", "Data Management"],
        correctAnswer: "Software Development"
    },
    {
        question: "Which degree would likely prepare you for a career as a network administrator?",
        options: ["Software Development", "Cybersecurity", "Networking", "Data Management"],
        correctAnswer: "Networking"
    },
    {
        question: "Which field focuses on managing and analyzing data using databases and tools?",
        options: ["Software Development", "Cybersecurity", "Networking", "Data Management"],
        correctAnswer: "Data Management"
    },
    {
        question: "Which of the following jobs is associated with protecting an organization’s information systems from cyberattacks?",
        options: ["Software Engineer", "Cybersecurity Analyst", "Network Administrator", "Data Scientist"],
        correctAnswer: "Cybersecurity Analyst"
    },
    {
        question: "What career would involve configuring and maintaining computer networks?",
        options: ["Software Developer", "Cybersecurity Specialist", "Network Engineer", "Database Administrator"],
        correctAnswer: "Network Engineer"
    },
    {
        question: "Which of the following is a major task of a software developer?",
        options: ["Designing websites", "Fixing network issues", "Writing code for applications", "Protecting data from breaches"],
        correctAnswer: "Writing code for applications"
    },
    {
        question: "Which of the following roles focuses on managing large sets of data for analytics?",
        options: ["Data Analyst", "Cybersecurity Specialist", "Software Developer", "Network Engineer"],
        correctAnswer: "Data Analyst"
    }
];

// Event listener for quiz start button
document.getElementById("quizStartBtn").addEventListener("click", function() {
    let score = 0;
    questions.forEach((q, index) => {
        const userAnswer = prompt(`${q.question}\n${q.options.join('\n')}`);
        if (userAnswer === q.correctAnswer) {
            score++;
        }
    });
    alert(`You scored ${score} out of ${questions.length}`);
});

