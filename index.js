const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#result");

let calculation=[];
let accumulation;

buttons.forEach(button => button.addEventListener("click",() => calculate(button)))

function calculate(button){
    const value=button.textContent;
    if (value==="clear"){
        calculation=[];
        accumulation=0;
        screenDisplay.textContent ="."
    }
    else if (value === "="){
        display.textContent=eval(accumulation);
       }
    else{
        calculation.push(value);
        accumulation=calculation.join(' ')
        display.textContent=accumulation;
    }
}