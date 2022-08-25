let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener('DOMContentLoaded', function(){

    let equals = document.querySelector('.equals');
    let decimal = document.querySelector('.decimal');
    let clear = document.querySelector('.clear');
    let backspace = document.querySelector('.backspace');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let prevScreen = document.querySelector('.previous');
    let curScreen = document.querySelector('.current');

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        curScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        prevScreen.textContent = previousValue + " " + operator;
        curScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = ''; 
        operator = '';
        prevScreen.textContent = currentValue;
        curScreen.textContent = currentValue;
    })

    equals.addEventListener("click", function() {
        calculate();
    })

})

function handleNumber(num){
    if(currentValue.length <= 9){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue
    currentValue = '';
}

function calculate() {

}

