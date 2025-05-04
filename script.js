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
                    careerItem.className = 'career
