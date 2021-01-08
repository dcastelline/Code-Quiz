// Variables needed
// Buttons
var startBtn = document.getElementById("start-btn");
var userChoice = document.getElementById("user-choices");
// Quiz Block
var quizBlock = document.getElementById("quiz-block");
var questionLine = document.getElementById("question-line");
// Time
var timer = document.getElementById("timer");
var timeLeft = 60;
var penalty = 10;

// Score
var score = 0;

// list shortcut
var createList = document.createElement("ul");

//Questions
var questionIndex = 0;
var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hypertext Markup Language", "Hyper Text Marking Language", "Hypertrophy Marketing Language", "Hypertron Module Language"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascade Style State", "Cascading Sheets Styling", "Cascading Style Sheets", "Cascade Style Sheet"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following HTML element types are self closing?",
        choices: ["div", "script", "img", "All of the Above" ],
        answer: "img"
    },
    {
        question: "Which of the following is a JavaScript library?",
        choices: ["jQuery", "Bootstrap", "Bootswatch", "Alexandria"],
        answer: "jQuery"
    },
    {
        question: "Which of the following is a way to declare a variable in JavaScript?",
        choices: ["$var", "vari", "$var =", "var"],
        answer: "var"
    },
];

// Start
startBtn.addEventListener("click", function() {
    
    // Timer
    function setTime(){
        var timerInterval = setInterval(function(){
            timeLeft--;
            timer.textContent = "Time Remaining: " + timeLeft + "s";
    
            if(timeLeft === 0){
                clearInterval(timerInterval);
            }
        }, 1000);
    }   render(questionIndex);
    setTime();
    
    // Questions
    function render(questionIndex) {
        questions.innerHTML = "";
        createList.innerHTML = "";
        for(var i = 0; i < questions.length; i++) {
            var quizQuestion = questions[questionIndex].question;
            var userChoice = questions[questionIndex].choices;
            questions.textContent = quizQuestion;
        }

        userChoice.forEach(function(newItem) {
            var listItem = document.createElement("button");
            listItem.textContent = newItem;
            quizBlock.appendChild(createList);
            createList.appendChild(listItem);
            
        });
        
    };

});
