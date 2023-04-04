// click start to start timer
    //count down from 60
//question appears on screen
    //4 options below
    //on wrong answer, reduce time by 10 seconds
    //on correct, go to next question and add +1 to the score
    //remove finished question from array of questions
//when time = 0, end game
//prompt for initials
//score and initials entered into scoreboard

// Questions
const q1 = "Commonly used data types do not include:";

const q2 = "The condition in an if / else statement is enclosed with ____";

const q3 = "Arrays in Javascript can be used to store ____";

const q4 = "String values must be enclosed within ____ when being assigned to variables.";

const q5 = "A very useful tool used during development and debugging for printing content to the debugger is:"


// Answers array
const a1 = ["Strings", "booleans", "alerts", "numbers"]

const a2 = ["quotes", "curly brackets", "parenthesis", "square brackets"]

const a3 = ["numbers and strings", "other arrays", "beeloeans", "all of the above"]

const a4 = ["commas", "curly brackets", "quotes", "parenthesis"]

const a5 = ["javascript", "terminal/bash", "for loops", "console.log"]

// start quiz put q1 in view
const startBtn = document.getElementById("startButton");
let questionTitle = document.getElementById("questionTitle");

function showQuestion() {
  questionTitle.textContent = q1;
  console.log("test");
}

startBtn.addEventListener("click", showQuestion);
