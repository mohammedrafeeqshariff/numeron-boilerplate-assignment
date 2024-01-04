// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
playButton = document.getElementById("play-button")

playButton.addEventListener("click",()=>{
    location.href = "../numeron-boilerplate-assignment/game.html"
})