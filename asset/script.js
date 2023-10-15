document.addEventListener("DOMContentLoaded", function () {
    // Select the start quiz button by its class
    let startButton = document.querySelector('.start-Quiz');
    // Select the landing page by its class
    let landingPage = document.querySelector('.landing-Page');
    // Target the question div and remove the class attribute
    let questionPage = document.getElementById('question-Page');
    // Target the result page 
    let resultPage = document.getElementById('result-page');
    // Target submition form
    let submitBtn = document.getElementById('submit');

    startButton.addEventListener('click', function () {
        landingPage.style.display = 'none'
        console.log('clicked button. Landing page hidden.');
        questionPage.removeAttribute('class');
        displayQuestion();
    });
    // Start the object index always at 0
    let startQuizIndex = 0;
    // Start display question function:
    // attribute the title object to the h2 title
    // attribute the option object to the options div
    function displayQuestion() {
        let startQuiz = questions[startQuizIndex];
        // Target the element title & options html
        let questionTitleEl = document.getElementById('question');
        let quizzOptionEl = document.getElementById('options');

        // display the question title
        questionTitleEl.textContent = startQuiz.title;
        console.log(questionTitleEl);

        // clear the previous options
        quizzOptionEl.innerHTML = '';

        // loop to display each choices as a button
        for (var i = 0; i < startQuiz.options.length; ++i) {
            let optionEL = startQuiz.options[i];
            console.log(optionEL);
            let optionButtons = document.createElement('button');
            optionButtons.setAttribute('class', 'quizButton');
            optionButtons.setAttribute('value', optionButtons);

            optionButtons.textContent = i + 1 + " " + optionEL;
            console.log(optionButtons);

            quizzOptionEl.appendChild(optionButtons);
        }
        // Add an event listener for the quiz option buttons
        let quizButtons = document.querySelectorAll('.quizButton');

        quizButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                console.log(button)
                // Check if the selected answer matches the correct answer
                if (button.textContent.includes(questions[startQuizIndex].answer)) {
                    // add a class to highlight the correct answer
                    button.setAttribute('id', 'correct-answer-highlight');
                } else {
                    button.setAttribute('id', 'wrong-answer-highlight');
                }
                // 🔥HOTFIX🔥 Prevent the user from selecting other options 
                quizButtons.forEach(function(btn) {
                    btn.disabled = true;
                });
        // set delay time for moving to the next question
        setTimeout(function() {
            // remove the highlighted id to the choices
            button.removeAttribute('correct-answer-highlight', 'wrong-answer-highligth');
            // move to the next question index
            startQuizIndex++;
            // check if there are more questions,if not, move to the result page
            if (startQuizIndex < questions.length) {
                // display the next question
                displayQuestion();
            } else {
                console.log('Quiz done');
                questionPage.setAttribute('class','hide');
                resultPage.removeAttribute('class','hide');
            }
        },375); //delay time
            })
        });
    }
    // Submit result page

});
