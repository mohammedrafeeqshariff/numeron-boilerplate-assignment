// Iteration 5: Store the player score and display it on the game over screen
var score_box = document.querySelector("#score-board")
// score_box.innerHTML= total_score;

var total = localStorage.getItem("score");
score_box.innerHTML = total


var play_again = document.querySelector("#play-again-button")

play_again.addEventListener("click", ()=>{
    location.href="../numeron-boilerplate-assignment/index.html"
})
