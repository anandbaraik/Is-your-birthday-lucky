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
        showMessage("Please enter both the fields! ๐คจ");
    }
}

function calculateDobSum(dob) {

    let dobDigit = dob.replaceAll("-", ""); //replces all ocurrance
    let dobDigitSum = 0;

    for (let digit of dobDigit) {
        dobDigitSum += Number(digit);
    }
    
    return dobDigitSum;
}

function comparNumbersToBeLucky(dobSum, luckyNum) {
    if(dobSum % luckyNum != 0) {
        showMessage(`${luckyNum} is not a lucky number! ๐ฅฒ`);
    } else {
        showMessage(`${luckyNum} is a lucky number! ๐`);
    }
}

function showMessage(msg) {
    outputMsg.innerText = msg;
}