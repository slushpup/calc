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
        return
    }
    else{
        return
    }
    // return `${operator}`(a,b);
}

let num1 = "";
let num2 = "";
let value = "";
let symbol = "";
const d = document.querySelector(".display");

function calculate(){

}

const numbers = document.querySelectorAll(".operand");
numbers.forEach((button) => {
    button.addEventListener('click', function(e) {
        if(!symbol){
            value = value + e.target.value;
            console.log(value);
        }
        else {
            value = value + e.target.value;
            console.log(value);
        }
        // console.log(typeof(e.target.value));
   
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', function(e) {
        if(e.target.value === "="){
            num2 = value;
            console.log(symbol);
            console.log(operate(symbol,num1,num2))
            d.textContent = operate(symbol,num1,num2)
        }
        else{
            symbol = e.target.value;
            console.log(symbol);
            num1 = value;
            value = ""; 
        }
 
    })
})

// display.innerText = '5';


// const sum = (list) =>  list.reduce( (a, b) => a + b , 0);

// const multiply = (list) =>  list.reduce( (a, b) => a * b);

// const divide = (list) =>  list.reduce( (a, b) => a / b);

