document.addEventListener("DOMContentLoaded", function() {
    // select the <UL> element to display the high scores
    const highScorelist = document.querySelector('ul');
    
    // Get the object from local storage
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScores.sort((a, b) => b.score - a.score);
    highScores.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${score.initials} - ${score.score} seconds🏁`;
        console.log(listItem);
        highScorelist.appendChild(listItem);
    });
    // Add event listener to the clear list button
    const clearScoreButton = document.querySelector('.clearHS');
    clearScoreButton.addEventListener('click', function() {
        localStorage.removeItem('highScores');
        highScorelist.innerHTML = '';
    });
});