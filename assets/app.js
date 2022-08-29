const dobInput = document.querySelector("#dob");
const luckyNumInput = document.querySelector("#luckyNum");
const checkBtn = document.querySelector("#checkLuckyNumBtn");
const outputMsg = document.querySelector(".output-msg");

checkBtn.addEventListener("click", checkIfDobIsLucky);

function checkIfDobIsLucky() {
    let dob = dobInput.value;
    let luckyNum = luckyNumInput.value;

    if(dob && luckyNum) {
        let dobSum = calculateDobSum(dob);
        comparNumbersToBeLucky(dobSum, luckyNum);
    } else {
        showMessage("Please enter both the fields! 🤨");
    }
}

function calculateDobSum(dob) {

    let dobDigit = dob.replaceAll("-", "");
    let dobDigitSum = 0;

    for (let digit of dobDigit) {
        dobDigitSum += Number(digit);
    }
    
    return dobDigitSum;
}

function comparNumbersToBeLucky(dobSum, luckyNum) {
    if(dobSum % luckyNum != 0) {
        showMessage(`${luckyNum} is not a lucky number! 🥲`);
    } else {
        showMessage(`${luckyNum} is a lucky number! 😊`);
    }
}

function showMessage(msg) {
    outputMsg.innerText = msg;
}