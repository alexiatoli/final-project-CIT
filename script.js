// Career Pathway Data
const pathways = {
    software: {
        title: "Software Development",
        description: "The Software Development concentration prepares students to design, develop, and test software applications and systems. Coursework covers programming languages, software engineering principles, and application development.",
        image: "images/software.jpg",
        careers: [
            {
                name: "Web Developer",
                description: "Design and implement web applications using modern frameworks. Develop interactive user experiences and ensure cross-browser compatibility.",
                degree: "BS in CIT - Software Development Track",
                salary: "$60,000 - $110,000"
            },
            {
                name: "Mobile App Developer",
                description: "Create applications for iOS and Android platforms using native or cross-platform frameworks. Optimize performance for mobile devices.",
                degree: "BS in CIT - Software Development Track",
                salary: "$70,000 - $120,000"
            },
            // Additional careers...
        ]
    },
    data: {
        title: "Data Management",
        description: "The Data Management concentration focuses on organizing, storing, and analyzing large datasets. Students learn database design, data analytics, and information management systems.",
        image: "images/data.jpg",
        careers: [
            {
                name: "Database Administrator",
                description: "Manage and maintain database systems to ensure data integrity and availability. Optimize performance and implement security measures.",
                degree: "BS in CIT - Data Management Track",
                salary: "$80,000 - $130,000"
            },
            // Additional careers...
        ]
    },
    networking: {
        title: "Networking",
        description: "The Networking concentration prepares students to design, implement, and manage network infrastructure. Coursework covers routing, switching, and network security.",
        image: "images/networking.jpg",
        careers: [
            {
                name: "Network Administrator",
                description: "Maintain and troubleshoot computer networks. Configure routers, switches, and firewalls to ensure optimal performance.",
                degree: "BS in CIT - Networking Track",
                salary: "$65,000 - $115,000"
            },
            // Additional careers...
        ]
    },
    cybersecurity: {
        title: "Cybersecurity",
        description: "The Cybersecurity concentration focuses on protecting systems, networks, and data from digital attacks. Students learn ethical hacking, risk assessment, and security protocols.",
        image: "images/cybersecurity.jpg",
        careers: [
            {
                name: "Security Analyst",
                description: "Monitor networks for security breaches and investigate violations. Implement security measures to protect organizational data.",
                degree: "BS in CIT - Cybersecurity Track",
                salary: "$75,000 - $140,000"
            },
            // Additional careers...
        ]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up quadrants
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
                        showCareerModal(pathway, career);
                    });
                    dropdown.appendChild(careerItem);
                });
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.quadrant')) {
            quadrants.forEach(quadrant => {
                const dropdown = quadrant.querySelector('.career-dropdown');
                if (dropdown) {
                    quadrant.classList.remove('active');
                }
            });
        }
    });
});

// Show career modal with detailed information
function showCareerModal(pathway, career) {
    const modal = new bootstrap.Modal(document.getElementById('careerModal'));
    
    // Set modal content
    document.getElementById('modalTitle').textContent = career.name;
    document.getElementById('modalImage').src = pathway.image;
    document.getElementById('modalImage').alt = pathway.title;
    document.getElementById('concentrationTitle').textContent = pathway.title;
    document.getElementById('concentrationDesc').textContent = pathway.description;
    document.getElementById('careerDesc').textContent = career.description;
    document.getElementById('degreeInfo').textContent = career.degree;
    document.getElementById('salaryInfo').textContent = career.salary;
    
    modal.show();
}
