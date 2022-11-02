var timer = document.getElementById('timer');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var quizHead = document.getElementById('quizHead');
var mainContainer = document.getElementById('mainContainer');
var startButton = document.getElementById('start')

var questionsArray = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: ['<js>', '<scripting', '<javascript>', '<script>'],
        answer: 3
    },
    {
        question: 'How do you create a function in JavaScript?',
        choices: ['function myFunction()', 'function = myFunction()', 'myFunction()', 'function'],
        answer: 1
    },
    {
        question: 'How do you create an unorganized list in HTML',
        choices: ['<ul>', '<li>', '<ol>', '<list>'],
        answer: 0
    },
    {
        question: 'How do you call a function named "myFunction"?',
        choices: ['myFunction', 'go get my function', 'myFunction()', 'call myFunction()'],
        answer: 2
    },
    {
        question: 'How do you add comments in HTML?',
        choices: ['// comment', '"comment"', '<!--comment-->', 'comment'],
        answer: 2
    },
    {
        question: 'How do you add comments in JavaScript?',
        choices: ['// comment', '"comment"', '<!--comment-->', 'comment'],
        answer: 0
    },
]

var pageLoad = function () {
    var quizHead = document.createElement('h2')
    quizHead.textContent = "Ansewer the following questions relating to code. Keep in mind that you are being timed and a wrong answer will penalize you by 10 seconds";
    mainContainer.appendChild(quizHead);

    var startBtn = document.createElement('button');
    startBtn.textContent = "start";
    startBtn.addEventListener('click', startGame)
    mainContainer.appendChild(startButton);

};

var startGame = function() {

}

pageLoad();