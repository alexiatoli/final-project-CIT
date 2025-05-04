document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let result = document.getElementById('question1').value;
    // Process the quiz result and show suggestions
    alert('Your path: ' + result);
});
