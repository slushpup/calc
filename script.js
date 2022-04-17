const add = (a,b) => a + b;
  
const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

function operate(op,a,b){
    a = Number(a);
    b = Number(b);
    if (op == "+") {
        return add(a,b);
    }
    else if (op == "-")
    {
        return subtract(a,b);
    }
    else if (op == "*")
    {
        return multiply(a,b);
    }
    else if (op == "/")
    {
        return divide(a,b);
    }
    else{
        return
    }
    // return `${operator}`(a,b);
}

let num1 = "";
let input = "0";
let symbol = "";
let answer = false;
const d = document.querySelector(".result");

function clear(){
    num1 = "";
    input = "0";
    symbol = "";
}

function display(str){
    if(Number(str) > 9999999999999){
        str = Number(str).toExponential(6);
        console.log(str);
    }
    else if ( str.length > 13){
        // str = +parseFloat(str).toFixed(5);
        str = str.substring(0,13);
    }
    d.textContent = str;
}

divideByZero= (sym,num) => {return (Number(num) === 0 && sym === "/")};


const numbers = document.querySelectorAll(".operand");
numbers.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (e.target.value=="%"){
            if(answer){
                num1 = num1 * 0.01;
                display(num1);
                return;
            }
            input = (input * 0.01).toString();
        }
        else if(e.target.value == "sign"){
            if(answer){
                num1 = num1 * (-1);
                display(num1);
                return;
            }
            else{
                if(input){
                    input = input * (-1);
                }else{
                    input = num1 * (-1);
                }
            }
        }
        else if (e.target.value=="C"){
            clear();
        }
        else if (e.target.value == "DEL"){
            input = input.slice(0,-1);
        }
        else if(input.length<13){
            if(answer){
                clear();
                answer = false;
            }
            if((e.target.value == "." && (input.indexOf(".")!=-1))){
                return;
            }
            if(e.target.value == "." && input == ""){      
                input = "0";
            }
            if(e.target.value == "." && input == "0"){    
                input = "0";
            }
            else if(input == "0"){
                if(e.target.value=="0"){
                    return;
                }
                input = "";
            }
            input = input + e.target.value;
        }
        if (input === ""){
            input = "0";
        }
        else{
            display(input);
        }
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (num1 && symbol) {
            if (!input){
                symbol = e.target.value;
                return;
            }
            else{
                if(e.target.value === "="){
                    if(divideByZero(symbol,input) === true){
                        display("Error");
                        return;
                    }
                    display(operate(symbol,num1,input).toString());
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
                    if(divideByZero(symbol,input) === true){
                        display("Error");
                        return;
                    }
                    display(operate(symbol,num1,input).toString());
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


// function equation(){
//     console.log(`${num1} ${symbol} ${input}`);
// }