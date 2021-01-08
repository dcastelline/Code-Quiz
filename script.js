// Variables needed
// Buttons
var startBtn = document.getElementById("start-btn")
var submitScore = document.getElementById("score-btn")
// Quiz Block
var quizBlock = document.getElementById("quiz-block")
// Time
var timer = document.getElementById("timer")
var lostTime = 10;
var timeLeft = 60;
var timeInterval = 0;
// Score
var score = 0;
// Question asked tracker
var questionAsked = 0;
// New element shortcut
var newEl = document.createElement("ul");

//Questions
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
    {
        question: "What is the airspeed velocity of an unladen swallow?"
        choices: ["24mph", "32mph", "15mph", "African or European?"]
        answer: "African or European?"
    }
