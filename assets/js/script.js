var timer = getElementById('timer');
var op1 = getElementById('op1');
var op2 = getElementById('op2');
var op3 = getElementById('op3');
var op4 = getElementById('op4');

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