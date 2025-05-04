// Career data
const careerData = {
    software: [
        "mobile apps developer", 
        "software developer",
        "web programmer",
        "consultant",
        "web developer",
        "instructor",
        "technical writer",
        "full stack developer",
        "games developer",
        "dev ops engineer",
        "coder",
        "test engineer"
    ],
    data: [
        "data research scientist",
        "database administrator",
        "data analyst",
        "industry analyst"
    ],
    networking: [
        "network architect",
        "network administrator",
        "hardware engineer",
        "chief information officer"
    ],
    cybersecurity: [
        "cybersecurity expert",
        "security analyst",
        "web architect"
    ]
};

// Initialize quadrants
document.querySelectorAll('.quadrant').forEach(quadrant => {
    quadrant.addEventListener('click', function() {
        const quadrantId = this.id;
        
        // Toggle active class
        this.classList.toggle('active');
        
        // Populate careers if active
        if (this.classList.contains('active')) {
            const dropdown = this.querySelector('.careers-dropdown');
            dropdown.innerHTML = careerData[quadrantId].map(career => 
                `<div class="career-item" data-career="${career}">${career}</div>`
            ).join('');
            
            // Add event listeners to career items
            dropdown.querySelectorAll('.career-item').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showCareerModal(this.dataset.career, quadrantId);
                });
            });
        }
    });
});

// Show career modal
function showCareerModal(career, quadrant) {
    const modal = new bootstrap.Modal(document.getElementById('careerModal'));
    const modalContent = document.querySelector('#careerModal .modal-body');
    
    // Get career description (would be expanded in full implementation)
    const description = getCareerDescription(career, quadrant);
    
    modalContent.innerHTML = `
        <h3>${career}</h3>
        <p>${description}</p>
        <p><strong>Suggested Degree Path:</strong> ${quadrant.toUpperCase()}</p>
    `;
    
    modal.show();
}
