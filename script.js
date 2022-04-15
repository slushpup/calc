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

function display(str){
    console.log(str);
    if(str.length > 12){
        str = Number(str).toExponential(7);
    }
    d.textContent = str;
}

const numbers = document.querySelectorAll(".operand");
numbers.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (e.target.value=="%"){
            input = (input * 0.01).toString();
        }
        else if (e.target.value=="C"){
            clear();
        }
        else if (e.target.value == "DEL"){
            input = input.slice(0,-1);
            // console.log(input.slice(0,-1));
        }
        else if(input.length<12){
            if(answer){
                clear();
                answer = false;
            }
            if((e.target.value == "." && (input.indexOf(".")!=-1))){
                return;
            }
            if(e.target.value == "." && input === ""){
                input = "0";
            }
            input = input + e.target.value;
        }

        if (input === ""){
            display("0");
        }
        else{
            display(input);
        }
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', function(e) {
        // console.log(e.target.value);
        if(e.target.value == "sign"){
            if(answer){
                num1 = num1 * (-1);
                display(num1);
            }
            else{
                input = input * (-1);
                display(input);
            }
        }
        if (num1 && symbol) {
            if (!input){
                symbol = e.target.value;
                return;
            }
            else{
                if(e.target.value === "="){
                    // equation();
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
                    // equation();
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