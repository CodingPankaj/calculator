const mainDiv = document.querySelector(".main");
let calcScreen = document.querySelector("#calScrn");
let opr = ["+", "-", "*", "/", ".", "%"];

mainDiv.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML;
    let screenText = calcScreen.innerHTML;
    let lastChar = screenText[screenText.length - 1];

    if (e.target.tagName == "BUTTON") {
        if (buttonText == "AC") {
            calcScreen.innerHTML = 0;
        } else if (buttonText == "DEL") {
            if (screenText.length == 1) {
                calcScreen.innerHTML = 0;
            } else {
                calcScreen.innerHTML = screenText.slice(0, -1);
            }
        } else if (buttonText == "%") {
            if (Number(screenText)) {
                calcScreen.innerHTML = screenText * 0.01;
            } else {
                if (opr.includes(screenText[screenText.length - 1])) {
                    calcScreen.innerHTML = "Error";
                } else {
                    let numberAfterOpr = "";
                    let numberBeforOpr = "";

                    for (let i = screenText.length; i > 0; i--) {
                        if (!opr.includes(screenText[i])) {
                            numberAfterOpr = screenText[i - 1] + numberAfterOpr;
                        } else {
                            break;
                        }
                    }

                    numberBeforOpr = screenText.slice(0, -numberAfterOpr.length);

                    if (numberAfterOpr.startsWith("/")) {
                        calcScreen.innerHTML = Number(
                            eval(numberBeforOpr) / (numberAfterOpr.slice(1) / 100)
                        ).toFixed(2);
                    } else if (numberAfterOpr.startsWith("*")) {
                        calcScreen.innerHTML = Number(
                            eval(numberBeforOpr) * (numberAfterOpr.slice(1) / 100)
                        ).toFixed(2);
                    } else {
                        calcScreen.innerHTML = Number(
                            eval(numberBeforOpr) +
                            (numberAfterOpr / 100) * eval(numberBeforOpr)
                        ).toFixed(2);
                    }
                }
            }
        } else if (buttonText == "=") {
            calcScreen.innerHTML = eval(screenText);
        } else {
            if (screenText == "0") {
                calcScreen.innerHTML = "";
                calcScreen.innerHTML += buttonText;
            } else if (screenText == "/") {
                calcScreen.innerHTML = "";
                calcScreen.innerHTML += buttonText;
            } else if (screenText == "*") {
                calcScreen.innerHTML = "";
                calcScreen.innerHTML += buttonText;
            } else if (screenText == "%") {
                calcScreen.innerHTML = "";
                calcScreen.innerHTML += buttonText;
            } else if (opr.includes(buttonText) && opr.includes(lastChar)) {
                calcScreen.innerHTML = screenText.slice(0, -1) + buttonText;
            } else {
                calcScreen.innerHTML += buttonText;
            }
        }
        
    }
});
















// const mainDiv = document.querySelector(".main");
// const calcScreen = document.querySelector("#calScrn");
// const opr = ["+", "-", "*", "/", ".", "%"];
// const INITIAL_VALUE = 0;

// mainDiv.addEventListener("click", (e) => {
//     if (e.target.tagName !== "BUTTON") return;

//     const buttonText = e.target.innerHTML;
//     let screenText = calcScreen.innerHTML;
//     const lastChar = screenText[screenText.length - 1];

//     switch (buttonText) {
//         case "AC":
//             calcScreen.innerHTML = INITIAL_VALUE;
//             break;

//         case "DEL":
//             calcScreen.innerHTML = screenText.length === 1 ? INITIAL_VALUE : screenText.slice(0, -1);
//             break;

//         case "%":
//             handlePercentage(screenText);
//             break;

//         case "=":
//             calcScreen.innerHTML = eval(screenText);
//             break;

//         default:
//             handleDefaultInput(buttonText, screenText, lastChar);
//             break;
//     }
// });

// function handlePercentage(screenText) {
//     if (Number(screenText)) {
//         calcScreen.innerHTML = (screenText * 0.01).toFixed(2);
//     } else if (opr.includes(screenText[screenText.length - 1])) {
//         calcScreen.innerHTML = "Error";
//     } else {
//         const { numberBeforeOp, numberAfterOp } = extractNumbers(screenText);
//         const percentageValue = Number(numberAfterOp.slice(1)) / 100;
//         calcScreen.innerHTML = calculatePercentage(numberBeforeOp, percentageValue).toFixed(2);
//     }
// }

// function extractNumbers(screenText) {
//     let numberAfterOp = "";
//     let numberBeforeOp = "";

//     for (let i = screenText.length; i > 0; i--) {
//         if (!opr.includes(screenText[i])) {
//             numberAfterOp = screenText[i - 1] + numberAfterOp;
//         } else {
//             numberBeforeOp = screenText.slice(0, -numberAfterOp.length);
//             break;
//         }
//     }

//     return { numberBeforeOp, numberAfterOp };
// }

// function calculatePercentage(numberBeforeOp, percentageValue) {
//     return eval(numberBeforeOp) * percentageValue; // Adjust the operation based on your logic
// }

// function handleDefaultInput(buttonText, screenText, lastChar) {
//     if (screenText === INITIAL_VALUE.toString() || opr.includes(screenText) || opr.includes(lastChar)) {
//         calcScreen.innerHTML = screenText === INITIAL_VALUE.toString() ? buttonText : screenText.slice(0, -1) + buttonText;
//     } else {
//         calcScreen.innerHTML += buttonText;
//     }
// }
