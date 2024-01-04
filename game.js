// Iteration 2: Generate 2 random number and display it on the screen

var number1box = document.querySelector("#number1")
var number2box = document.querySelector("#number2")

number1 = Math.ceil(Math.random()*100)
number2 = Math.ceil(Math.random()*100)

number1box.innerHTML=number1
number2box.innerHTML=number2



// Iteration 3: Make the options button functional
var greaterThan = document.querySelector("#greater-than")
var equalTo = document.querySelector("#equal-to")
var lessThan = document.querySelector("#lesser-than")

var total_score = 0


greaterThan.onclick = ()=>{
    if (number1 > number2){
        total_score ++;
        resetTime()
    }
    else{
        location.href = "../numeron-boilerplate-assignment/gameover.html"
    }

    number1 = Math.ceil(Math.random()*100);
    number2 = Math.ceil(Math.random()*100);

    number1box.innerHTML=number1;
    number2box.innerHTML=number2;
}

equalTo.onclick = ()=>{
    if (number1 == number2){
        total_score ++;
        resetTime()
    }
    else{
        location.href = "../numeron-boilerplate-assignment/gameover.html"
    }

    number1 = Math.ceil(Math.random()*100);
    number2 = Math.ceil(Math.random()*100);

    number1box.innerHTML=number1;
    number2box.innerHTML=number2;
}

lessThan.onclick = ()=>{
    if (number1 < number2){
        total_score ++;
        resetTime()
    }
    else{
        location.href = "../numeron-boilerplate-assignment/gameover.html"
    }

    number1 = Math.ceil(Math.random()*100);
    number2 = Math.ceil(Math.random()*100);

    number1box.innerHTML=number1;
    number2box.innerHTML=number2;
}


// Iteration 4: Build a timer for the game

var time = 5;
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
  time = 5;
  timer.innerHTML = time;

  timerId = setInterval(() => {
    time--;
    if (time == 0) {
      location.href = "./gameover.html";
    }
    timer.innerHTML = time;
  }, 1000);
  
  localStorage.setItem("score", total_score);
}

function resetTime() {
  clearInterval(timerId);
  startTimer();
}

startTimer();
