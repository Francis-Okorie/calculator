const display = document.querySelector("#display");


const buttonValues = [
    "AC", "+/-", "%", "÷", 
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

let A = 0;
let B = null;
let operator = null

for(let i = 0; i < buttonValues.length; i++){
    let value = buttonValues[i];
    const buttons =document.querySelector(".buttons")
    let buttonValue = document.createElement("button");
    buttonValue.innerHTML = value;
    buttonValue.classList.add("btn-element")
    buttons.appendChild(buttonValue);

    if(rightSymbols.includes(value)){
        buttonValue.style.backgroundColor="rgb(255, 149, 0)";
    }else if(topSymbols.includes(value)){
        buttonValue.style.backgroundColor="rgb(212, 212, 210)";
    }else if(value === "0"){
        buttonValue.style.width="100%"
        buttonValue.style.gridColumn="span 2";
    }
    else{
        buttonValue.style.backgroundColor="#505050";
        buttonValue.style.color="white";
    }

    buttonValue.addEventListener("click", handleButton);

    function handleButton(){

        if(rightSymbols.includes(value)){
           if (value === "="){
              if(A!=null){
                B = display.value;
                console.log(B);
                let numA = Number(A);
                let numB = Number(B);
                if(operator === "+"){
                   display.value = numA+numB;
                }
                else if (operator === "-"){
                    display.value = numA-numB;
                } 
                else if (operator === "÷") {
                    display.value = numA/numB;
                }else if(operator === "×"){
                    display.value = numA*numB;
                }
              }
           }
           else {
              operator = value;
              A = display.value;
              display.value="";
              
           }
        }
        else if(topSymbols.includes(value)){
            if(value === "%"){
                display.value = Number(display.value)/100;
            }else if (value === "+/-"){
                if(display.value !="" && display.value !="0"){
                    if(display.value[0] === "-"){
                        display.value = display.value.slice(1);
                        console.log(display.value)
                    }else {
                        display.value = `-${display.value}`
                    }
                }
            }else if (value === "AC"){
                display.value="";
            }
        }else {
            if(display.value === "0"){
                 display.value = value;
            }else if (value === "."){
                if(display.value !="" && !display.value.includes(value)){
                    display.value +=value;
                }
            }else {
                display.value +=value;
            }
        }
    }


}

