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

// DISPLAY OPERATORS
const clear = document.querySelector('#clear');
const signal = document.querySelector('#signal');
const dot = document.querySelector('#dot');
const deleteDigit = document.querySelector('#delete');

// NUMBERS EVENTS
zero.addEventListener('click', () => {
    display.textContent==='0' || verifyOperation===true ? display.textContent = '0': display.textContent += '0';
    display.textContent = verifyDivisionOperation===true ? 'Cannot divide by zero!' : display.textContent;
    if (display.textContent==='Cannot divide by zero!' ){
        verifyOperation = true;
        result=[];
    } else {
        verifyOperation = false;
    }
});
one.addEventListener('click', () => {
    display.textContent==='0' || verifyOperation===true ? display.textContent = '1': display.textContent += '1';
    verifyOperation=false;
});
two.addEventListener('click', () => {
    display.textContent==='0' || verifyOperation===true ? display.textContent = '2': display.textContent += '2';
    verifyOperation=false;
});
three.addEventListener('click', () => {
    display.textContent==='0' || verifyOperation===true ? display.textContent = '3': display.textContent += '3';
    verifyOperation=false;
});
four.addEventListener('click', () => {
    display.textContent==='0' || verifyOperation===true ? display.textContent = '4': display.textContent += '4';
    verifyOperation=false;
});
five.addEventListener('click', () => {
    display.textContent==='0' || verifyOperation===true ? display.textContent = '5': display.textContent += '5';
    verifyOperation=false;
});
six.addEventListener('click', () => {
    display.textContent==='0' || verifyOperation===true ? display.textContent = '6': display.textContent += '6';
    verifyOperation=false;
});
seven.addEventListener('click', () => {
    display.textContent==='0' || verifyOperation===true ? display.textContent = '7': display.textContent += '7';
    verifyOperation=false;
});
eight.addEventListener('click', () => {
    display.textContent==='0' || verifyOperation===true ? display.textContent = '8': display.textContent += '8';
    verifyOperation=false;
});
nine.addEventListener('click', () => {
    display.textContent==='0' || verifyOperation===true ? display.textContent = '9': display.textContent += '9';
    verifyOperation=false;
});

// CLEAR EVENT
clear.addEventListener('click', () => {
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
let verifyOperation=false;
let verifyDivisionOperation=false;
addButton.addEventListener('click', () => {  
    // display.textContent = result.length===0 ? display.textContent : result[0];
    result.push(parseFloat(display.textContent));
    result=[operate(operator,result)];
    operator = '+';
    display.textContent = result[0];
    verifyOperation=true;   
});

subtractButton.addEventListener('click', ()=> {
    // display.textContent = result.length===0 ? display.textContent : result[0];
    result.push(parseFloat(display.textContent));
    result=[operate(operator,result)];
    operator = '-';
    display.textContent = result[0];
    verifyOperation=true; 
})

multiplyButton.addEventListener('click', ()=> {
    // display.textContent = result.length===0 ? display.textContent : result[0];
    result.push(parseFloat(display.textContent));
    result=[operate(operator,result)];
    operator = 'x';
    display.textContent = result[0];
    verifyOperation=true; 
})

divideButton.addEventListener('click', ()=> {
    // display.textContent = result.length===0 ? display.textContent : result[0];
    result.push(parseFloat(display.textContent));
    result=[operate(operator,result)];
    operator = '÷';
    display.textContent = result[0];
    verifyOperation=true;
    verifyDivisionOperation=true;
})

equalButton.addEventListener('click', () => {
    result.push(parseFloat(display.textContent));
    result=[operate(operator,result)];
    display.textContent=result[0];
    result=[];
    verifyOperation=true;
});

signal.addEventListener('click', ()=> {
    if (parseFloat(display.textContent)>0) {
        display.textContent = '-' + display.textContent;
    } else {
        display.textContent = (parseFloat(display.textContent)*(-1)).toString();
    }
    
});

dot.addEventListener('click', ()=> {
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
});

deleteDigit.addEventListener('click', ()=> {
    if (display.textContent.length > 1){
        let arr = display.textContent.split('');
        arr.pop();
        display.textContent = ''.concat(...arr);
    } else if (display.textContent.length===1){
        display.textContent = '0';
    }
});


