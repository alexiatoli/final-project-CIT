// Ensure that the DOM is fully loaded before running scripts
$(document).ready(function () {
    
    // Handle clicking on quadrants to show career info
    $(".quadrant").click(function () {
        const quadrantId = $(this).attr('id'); // Get the ID of the clicked quadrant
        let careerInfo = '';

        // Based on the clicked quadrant, define career info
        switch (quadrantId) {
            case 'software':
                careerInfo = 'Software Development involves designing, coding, testing, and maintaining software applications. Suggested Degree: Applied Computing in Software Development.';
                break;
            case 'cybersecurity':
                careerInfo = 'Cybersecurity is about protecting systems and networks from digital threats. Suggested Degree: Applied Computing in Cybersecurity.';
                break;
            case 'networking':
                careerInfo = 'Networking involves managing and optimizing the communication systems within organizations. Suggested Degree: Applied Computing in Networking.';
                break;
            case 'data-management':
                careerInfo = 'Data Management involves managing and utilizing data effectively for businesses. Suggested Degree: Applied Computing in Data Management.';
                break;
            default:
                careerInfo = 'Select a career pathway for more information.';
        }

        // Show the modal with relevant career info
        $('#careerModalLabel').text(quadrantId.charAt(0).toUpperCase() + quadrantId.slice(1));
        $('#careerInfo').text(careerInfo);
        $('#careerModal').modal('show');
    });

    // Handle quiz form submission
    $("#quizForm").submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect quiz answers
        const answers = {
            question1: $('#question1').val(),
            // Collect other questions similarly
        };

        // Display results based on the answers
        let recommendedPathway = '';

        switch (answers.question1) {
            case 'software':
                recommendedPathway = 'You seem to be interested in Software Development. A degree in Software Development could be a good fit for you!';
                break;
            case 'cybersecurity':
                recommendedPathway = 'Cybersecurity could be your calling! Consider pursuing a degree in Cybersecurity.';
                break;
            case 'networking':
                recommendedPathway = 'Networking could be an exciting career for you! A degree in Networking is a great choice.';
                break;
            case 'data-management':
                recommendedPathway = 'You might enjoy working with data! Consider a degree in Data Management.';
                break;
            default:
                recommendedPathway = 'Please select your preferences to get a recommendation.';
        }

        // Show the result in a modal or a designated area
        alert(recommendedPathway); // Or render in a new element like a result box

        // Optionally, reset the form or display more detailed recommendations
        // $("#quizForm")[0].reset();
    });

});

