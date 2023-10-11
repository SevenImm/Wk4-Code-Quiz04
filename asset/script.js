document.addEventListener("DOMContentLoaded", function () {
    // Select the start quiz button by its class
    let startButton = document.querySelector('.start-Quiz');
    // Select the landing page by its class
    let landingPage = document.querySelector('.landing-Page');
    // Target the question div and remove the class attribute
    let questionPage = document.getElementById('question-Page');

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
        // Target the element title & options
        let questionTitle = document.getElementById('question');
        let questionOptions = document.getElementById('options');

        // display the question title
        questionTitle.textContent = startQuiz.title;
        console.log(questionTitle);

        // clear the previous options
        questionOptions.innerHTML = '';


    }
});
