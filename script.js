const add = (a,b) => a + b;
  
const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

// const sum = (list) =>  list.reduce( (a, b) => a + b , 0);

// const multiply = (list) =>  list.reduce( (a, b) => a * b);

// const divide = (list) =>  list.reduce( (a, b) => a / b);

function operate(operator,a,b){
    return operator(a,b);
}