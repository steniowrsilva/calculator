const add = function(sum, number){
    return sum+number;
}

const subtract = function(difference, number){
    return difference-number;
}

const multiply = function(product, number){
    return product*number;
}

const divide = function(ratio, number){
    return ratio/number;
}

const operate = function (operator, result) {
    switch (operator) {
        case '+':
            return result.reduce((sum, number) => add(sum, number), 0);

        case '-':
            return result.reduce((difference, number) => subtract(difference, number));

        case 'x':
            return result.reduce((product, number) => multiply(product, number), 1);

        case '÷':
            return result.reduce((ratio, number) => divide(ratio, number));
            
        default:
            return parseFloat(display.textContent);
    }
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

// OPERATORS
const clear = document.querySelector('#clear');

// NUMBERS EVENTS
zero.addEventListener('click', () => {
    display.textContent==='0' ? display.textContent = '0': display.textContent += '0';
});
one.addEventListener('click', () => {
    display.textContent==='0' ? display.textContent = '1': display.textContent += '1';
});
two.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '2': display.textContent += '2';
});
three.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '3': display.textContent += '3';
});
four.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '4': display.textContent += '4';
});
five.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '5': display.textContent += '5';
});
six.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '6': display.textContent += '6';
});
seven.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '7': display.textContent += '7';
});
eight.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '8': display.textContent += '8';
});
nine.addEventListener('click', e => {
    display.textContent==='0' ? display.textContent = '9': display.textContent += '9';
});

// CLEAR EVENT
clear.addEventListener('click', e => {
    display.textContent = '0';
    result=[];
});

// OPERATORS
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const equalButton = document.querySelector('.equal');

// OPERATORS EVENTS
let result=[];
let operator;
addButton.addEventListener('click', () => {           // 6+3-2=1 // 4-3+1=8 // (5+2)*3=30
    result.push(parseFloat(display.textContent));
    result=[operate(operator,result)];
    operator = '+';
    display.textContent = '0';    
});

subtractButton.addEventListener('click', ()=> {
    result.push(parseFloat(display.textContent));
    result=[operate(operator,result)];
    operator = '-';
    display.textContent = '0';
})

multiplyButton.addEventListener('click', ()=> {
    result.push(parseFloat(display.textContent));
    result=[operate(operator,result)];
    operator = 'x';
    display.textContent = '0';
})

divideButton.addEventListener('click', ()=> {
    result.push(parseFloat(display.textContent));
    result=[operate(operator,result)];
    operator = '÷';
    display.textContent = '0';
})

equalButton.addEventListener('click', () => {
    result.push(parseFloat(display.textContent));
    result=[operate(operator,result)];
    display.textContent=result[0];
    result=[];
});


