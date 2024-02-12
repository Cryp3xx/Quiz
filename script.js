function submitQuiz() {
    // Retrieving the form element
    var form = document.getElementById("quiz-form");

    // Retrieving all radio button inputs within the form
    var inputs = form.querySelectorAll('input[type="radio"]:checked');

    // Calculating the number of correct answers
    var score = 0;
    inputs.forEach(function(input) {
        // Checking if the value of the checked radio button is 'a'
        if (input.value === 'a') {
            score++;
        }
    });

    // Displaying the score
    alert("Your score is: " + score + "/" + inputs.length);
    location.reload()
}