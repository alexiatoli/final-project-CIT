/**
 * CIT 312 Final Project - Interactive Career Pathways
 * Main JavaScript File
 */

// Career data with detailed information
const careerData = {
    software: {
        title: "Software Development",
        description: "Focuses on designing, developing, and testing software applications and systems.",
        careers: [
            {
                name: "Mobile Apps Developer",
                description: "Creates applications for mobile devices across various platforms.",
                degree: "BS in CIT - Software Development Track",
                salary: "$70,000 - $120,000"
            },
            {
                name: "Web Developer",
                description: "Designs and builds websites and web applications using various technologies.",
                degree: "BS in CIT - Software Development Track",
                salary: "$60,000 - $110,000"
            },
            // More careers...
        ]
    },
    data: {
        title: "Data Management",
        description: "Focuses on storing, organizing, and analyzing large sets of data.",
        careers: [
            {
                name: "Database Administrator",
                description: "Manages and maintains database systems to ensure data integrity and security.",
                degree: "BS in CIT - Data Management Track",
                salary: "$80,000 - $130,000"
            },
            // More careers...
        ]
    },
    networking: {
        title: "Networking",
        description: "Focuses on designing, implementing, and managing network infrastructure.",
        careers: [
            {
                name: "Network Administrator",
                description: "Maintains and troubleshoots computer networks within an organization.",
                degree: "BS in CIT - Networking Track",
                salary: "$65,000 - $115,000"
            },
            // More careers...
        ]
    },
    cybersecurity: {
        title: "Cybersecurity",
        description: "Focuses on protecting systems, networks, and data from digital attacks.",
        careers: [
            {
                name: "Security Analyst",
                description: "Monitors networks for security breaches and investigates violations.",
                degree: "BS in CIT - Cybersecurity Track",
                salary: "$75,000 - $140,000"
            },
            // More careers...
        ]
    }
};

// Quiz questions and answers
const quizQuestions = [
    {
        question: "What type of work environment do you prefer?",
        answers: [
            { text: "Creating new applications and software", value: "software" },
            { text: "Working with data and analytics", value: "data" },
            { text: "Maintaining and optimizing networks", value: "networking" },
            { text: "Protecting systems from threats", value: "cybersecurity" }
        ]
    },
    // More questions...
];

// DOM Elements
const quadrants = document.querySelectorAll('.quadrant');
const careerModal = new bootstrap.Modal(document.getElementById('careerModal'));
const careerModalBody = document.getElementById('careerModalBody');
const careerModalLabel = document.getElementById('careerModalLabel');
const quizForm = document.getElementById('careerQuizForm');
const quizResults = document.getElementById('quizResults');
const resultContent = document.getElementById('resultContent');

/**
 * Initialize quadrant interactivity
 */
function initQuadrants() {
    quadrants.forEach(quadrant => {
        quadrant.addEventListener('click', function() {
            const quadrantId = this.id;
            const quadrantData = careerData[quadrantId];
            
            // Remove any existing dropdown
            const existingDropdown = this.querySelector('.career-dropdown');
            if (existingDropdown) {
                existingDropdown.remove();
                this.classList.remove('active');
                return;
            }
            
            // Create dropdown
            const dropdown = document.createElement('div');
            dropdown.className = 'career-dropdown';
            
            // Add careers to dropdown
            quadrantData.careers.forEach(career => {
                const item = document.createElement('div');
                item.className = 'career-item';
                item.textContent = career.name;
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showCareerModal(career, quadrantData.title);
                });
                dropdown.appendChild(item);
            });
            
            this.appendChild(dropdown);
            this.classList.add('active');
        });
    });
}

/**
 * Show career details in modal
 * @param {Object} career - Career object
 * @param {String} category - Career category title
 */
function showCareerModal(career, category) {
    careerModalLabel.textContent = career.name;
    
    careerModalBody.innerHTML = `
        <div class="career-info">
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Description:</strong> ${career.description}</p>
            <p><strong>Suggested Degree:</strong> ${career.degree}</p>
            <p><strong>Average Salary Range:</strong> ${career.salary}</p>
        </div>
    `;
    
    careerModal.show();
}

/**
 * Handle quiz submission
 */
function handleQuizSubmit(e) {
    e.preventDefault();
    
    // Calculate results
    const results = {
        software: 0,
        data: 0,
        networking: 0,
        cybersecurity: 0
    };
    
    // Count answers
    const formData = new FormData(quizForm);
    for (let [name, value] of formData.entries()) {
        results[value]++;
    }
    
    // Determine highest score
    let highestScore = 0;
    let recommendedPath = '';
    
    for (const path in results) {
        if (results[path] > highestScore) {
            highestScore = results[path];
            recommendedPath = path;
        }
    }
    
    // Show results
    showQuizResults(recommendedPath);
}

/**
 * Display quiz results
 * @param {String} path - Recommended career path
 */
function showQuizResults(path) {
    const pathData = careerData[path];
    
    resultContent.innerHTML = `
        <h4 class="mb-3">${pathData.title}</h4>
        <p>${pathData.description}</p>
        <div class="mt-4">
            <h5>Potential Careers:</h5>
            <ul class="list-unstyled">
                ${pathData.careers.map(career => `<li>${career.name}</li>`).join('')}
            </ul>
        </div>
        <a href="#${path}" class="btn btn-gold mt-3">Learn More</a>
    `;
    
    quizResults.classList.remove('d-none');
    quizResults.scrollIntoView({ behavior: 'smooth' });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initQuadrants();
    
    // Quiz event listener
    quizForm.addEventListener('submit', handleQuizSubmit);
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.quadrant')) {
            quadrants.forEach(quadrant => {
                const dropdown = quadrant.querySelector('.career-dropdown');
                if (dropdown) {
                    dropdown.remove();
                    quadrant.classList.remove('active');
                }
            });
        }
    });
});
