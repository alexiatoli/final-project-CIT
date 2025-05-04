// Career data
const careerData = {
    software: [
        "Web Developer",
        "Mobile App Developer",
        "Software Engineer",
        "Game Developer"
    ],
    data: [
        "Database Administrator",
        "Data Analyst",
        "Data Scientist",
        "Business Intelligence Analyst"
    ],
    networking: [
        "Network Administrator",
        "Systems Administrator",
        "Cloud Engineer",
        "Network Architect"
    ],
    cybersecurity: [
        "Security Analyst",
        "Ethical Hacker",
        "Security Engineer",
        "Information Security Manager"
    ]
};

// Initialize quadrants
document.querySelectorAll('.quadrant').forEach(quadrant => {
    quadrant.addEventListener('click', function() {
        // Toggle active class
        this.classList.toggle('active');
        
        // Only populate if becoming active
        if (this.classList.contains('active')) {
            const quadrantId = this.id;
            const careersContainer = this.querySelector('.careers');
            
            // Clear existing content
            careersContainer.innerHTML = '';
            
            // Add career items
            careerData[quadrantId].forEach(career => {
                const careerItem = document.createElement('div');
                careerItem.className = 'career-item';
                careerItem.textContent = career;
                careersContainer.appendChild(careerItem);
            });
        }
    });
});

// Close all quadrants when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.quadrant')) {
        document.querySelectorAll('.quadrant').forEach(quadrant => {
            quadrant.classList.remove('active');
        });
    }
});
