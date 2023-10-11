document.addEventListener("DOMContentLoaded", function() {
// Select the start quiz button by its ID
let startButton = document.querySelector('.start-Quiz');
// Select the landing page by its ID
let landingPage = document.querySelector('.landing-Page');

startButton.addEventListener('click', function() {
    landingPage.style.display = 'none'
    console.log('clicked button. Landing page hidden.');
});

});
