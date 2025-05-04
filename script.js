// Career Pathway Data
const pathways = {
    software: {
        title: "Software Development",
        description: "The Software Development concentration prepares students for careers designing, developing, and testing software applications and systems. Students learn programming languages, software engineering principles, and application development.",
        image: "images/software-dev.jpg",
        careers: [
            { name: "Web Developer", 
              description: "Design and implement web applications using modern frameworks and technologies. Web developers create interactive experiences for users across various platforms.",
              degree: "BS in CIT - Software Development Track",
              salary: "$60,000 - $110,000" },
            { name: "Mobile App Developer", 
              description: "Create applications for iOS and Android devices using platform-specific languages and frameworks. Mobile developers build the apps we use every day.",
              degree: "BS in CIT - Software Development Track",
              salary: "$70,000 - $120,000" },
            // More careers...
        ],
        degreeInfo: "The CIT Software Development degree provides hands-on experience with industry-standard tools and practices, preparing graduates for immediate employment in tech roles."
    },
    data: {
        title: "Data Management",
        description: "The Data Management concentration focuses on organizing, storing, and analyzing large datasets. Students learn database design, data analytics, and information management systems.",
        image: "images/data-mgmt.jpg",
        careers: [
            { name: "Database Administrator", 
              description: "Manage and maintain database systems to ensure data integrity, security, and availability. DBAs optimize database performance and troubleshoot issues.",
              degree: "BS in CIT - Data Management Track",
              salary: "$80,000 - $130,000" },
            // More careers...
        ],
        degreeInfo: "CIT's Data Management program teaches students to work with SQL and NoSQL databases, data warehousing, and business intelligence tools used across industries."
    },
    // Other pathways...
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize quadrants
    const quadrants = document.querySelectorAll('.quadrant');
    
    quadrants.forEach(quadrant => {
        quadrant.addEventListener('click', function() {
            const quadrantId = this.id;
            const pathway = pathways[quadrantId];
            
            // Toggle active state
            this.classList.toggle('active');
            
            // Populate career dropdown if active
            if (this.classList.contains('active')) {
                const dropdown = this.querySelector('.career-dropdown');
                dropdown.innerHTML = '';
                
                pathway.careers.forEach(career => {
                    const careerItem = document.createElement('div');
                    careerItem.className = 'career-item';
                    careerItem.textContent = career.name;
                    careerItem.addEventListener('click', function(e) {
                        e.stopPropagation();
                        showPathwayModal(quadrantId, career);
                    });
                    dropdown.appendChild(careerItem);
                });
            }
        });
    });
    
    // Explore button animation
    const exploreBtn = document.getElementById('exploreBtn');
    exploreBtn.addEventListener('click', function() {
        // Scroll to quadrants with animation
        document.querySelector('.quadrant-container').scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        // Add pulse animation to all quadrants
        quadrants.forEach(quadrant => {
            quadrant.classList.add('animate__pulse');
            setTimeout(() => {
                quadrant.classList.remove('animate__pulse');
            }, 2000);
        });
    });
    
    // Initialize modal
    const pathwayModal = new bootstrap.Modal(document.getElementById('pathwayModal'));
});

// Show pathway modal with career details
function showPathwayModal(quadrantId, career) {
    const pathway = pathways[quadrantId];
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = career.name;
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${pathway.image}" alt="${pathway.title}" class="pathway-image img-fluid">
                <h4>${pathway.title}</h4>
                <p>${pathway.description}</p>
                <div class="degree-info p-3 bg-light rounded">
                    <h5>Degree Information</h5>
                    <p>${pathway.degreeInfo}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="career-details">
                    <h4>Career Details</h4>
                    <p><strong>Description:</strong> ${career.description}</p>
                    <p><strong>Suggested Degree:</strong> ${career.degree}</p>
                    <p><strong>Average Salary Range:</strong> ${career.salary}</p>
                    
                    <div class="skills mt-4">
                        <h5>Key Skills:</h5>
                        <ul>
                            <li>${getSkillsForCareer(quadrantId, career.name)}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const pathwayModal = new bootstrap.Modal(document.getElementById('pathwayModal'));
    pathwayModal.show();
}

// Helper function to get skills for career
function getSkillsForCareer(quadrantId, careerName) {
    // This would be expanded with actual skills data
    switch(quadrantId) {
        case 'software':
            return "Programming, Problem Solving, Software Design";
        case 'data':
            return "Database Management, SQL, Data Analysis";
        case 'networking':
            return "Network Configuration, Troubleshooting, Security";
        case 'cybersecurity':
            return "Security Protocols, Risk Assessment, Ethical Hacking";
        default:
            return "Technical Skills, Communication, Teamwork";
    }
}
