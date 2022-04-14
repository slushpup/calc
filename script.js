const add = (a,b) => a + b;
  
const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

function operate(op,a,b){
    a = Number(a)
    b = Number(b)
    if (op == "+") {
        return add(a,b)
    }
    else if (op == "-")
    {
        return subtract(a,b)
    }
    else if (op == "*")
    {
        return multiply(a,b)
    }
    else if (op == "/")
    {
        return divide(a,b)
    }
    else{
        return
    }
    // return `${operator}`(a,b);
}

let num1 = "";
let input = "";
let symbol = "";
let answer = false;
const d = document.querySelector(".result");

function clear(){
    num1 = "";
    input = "";
    symbol = "";
    d.textContent = "0";
}

function equation(){
    console.log(`${num1} ${symbol} ${input}`);
}

const numbers = document.querySelectorAll(".operand");
numbers.forEach((button) => {
    button.addEventListener('click', function(e) {
        if(answer){
            clear();
            answer = false;
        }
        input = input + e.target.value;
        d.textContent = input;
        console.log(input);
   
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.value);
        if (e.target.value === "C"){
            clear();
            return;
        }
        if (num1 && symbol) {
            if (!input){
                symbol = e.target.value;
                return;
            }
            else{
                if(e.target.value === "="){
                    equation();
                    d.textContent = operate(symbol,num1,input)
                    console.log(num1 = (operate(symbol,num1,input).toString()))
                    answer = true;
                }
                else{
                    if(answer){
                        symbol = e.target.value;
                        input = "";
                        answer = false;
                        return;
                    }
                    equation();
                    d.textContent = operate(symbol,num1,input)
                    console.log(num1 = (operate(symbol,num1,input).toString()))
                    symbol = e.target.value;
                    input = "";
                }
            }
        }
        else {
            symbol = e.target.value;
            num1 = input;
            if(symbol=== "="){
                console.log(num1)
                symbol = "";
                return;
            }
            input = "";
        }
    })
})

// display.innerText = '5';

// const sum = (list) =>  list.reduce( (a, b) => a + b , 0);

// const multiply = (list) =>  list.reduce( (a, b) => a * b);

// const divide = (list) =>  list.reduce( (a, b) => a / b);

