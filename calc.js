
const eqaBtn = document.querySelector("#equal");
const acBtn = document.querySelector("#clearAll");
const output = document.getElementById("output");


let numberOne = 0;
let numberTwo = 0;
let operator;

function displayValue(input){
output.value += input

if(operator){
    numberTwo += input
} else {
    numberOne += input
}
if ( input == "+" || input == '-' || input == '*' || input == '/'){
    operator = input;
}
};


function clearAll(){
output.value = "";
numberOne = "";
numberTwo = "";
operator = "";
};


function calculate(){
if ( operator == "+"){
    calcAdd();
} else if ( operator == "-"){
    calcSubtract(); 
} else if ( operator == "*"){
    calcMultiply();
} else if( operator == "/"){
    calcDivide();
}
};


function calcAdd(){
answer = parseFloat(numberOne) + parseFloat(numberTwo)
output.value = answer

numberOne = answer;
numberTwo = 0;
operator = null;

};
   
function calcSubtract(){
answer = parseFloat(numberOne) - parseFloat(numberTwo)
output.value = answer

numberOne = answer;
numberTwo = 0;
operator = null;
};
   
function calcMultiply(){
answer = parseFloat(numberOne) * parseFloat(numberTwo)
output.value = answer

numberOne = answer;
numberTwo = 0;
operator = null;
};
   
function calcDivide(){
answer = parseFloat(numberOne) / parseFloat(numberTwo)
output.value = answer

numberOne = answer;
numberTwo = 0;
operator = null;
};