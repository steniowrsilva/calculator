const add = function(a,b){
    return a+b;
}

const subtract = function(a,b){
    return a-b;
}

const multiply = function(a,b){
    return a*b;
}

const divide = function(a,b){
    return a/b;
}

const operate = function (operator, num1, num2) {
    return operator(num1,num2);
}

// KEYPAD
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

// DISPLAY
const display = document.querySelector('#display');
let displayText = '';

// OPERATORS
const clear = document.querySelector('#clear');

// NUMBERS EVENTS
zero.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '0': display.textContent += '0';
    displayText += display.textContent;
});
one.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '1': display.textContent += '1';
    displayText += display.textContent;
});
two.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '2': display.textContent += '2';
    displayText = display.textContent;
});
three.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '3': display.textContent += '3';
    displayText = display.textContent;
});
four.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '4': display.textContent += '4';
    displayText = display.textContent;
});
five.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '5': display.textContent += '5';
    displayText = display.textContent;
});
six.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '6': display.textContent += '6';
    displayText = display.textContent;
});
seven.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '7': display.textContent += '7';
    displayText = display.textContent;
});
eight.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '8': display.textContent += '8';
    displayText = display.textContent;
});
nine.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '9': display.textContent += '9';
    displayText = display.textContent;
});

// CLEAR EVENT
clear.addEventListener('click', e => {
    display.textContent = '0';
    displayText = display.textContent;
});

// OPERATORS
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');

// OPERATORS EVENTS
addButton.addEventListener('click', e => {
    let fistNumber = parseFloat(display.textContent);
});