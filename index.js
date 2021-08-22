const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-button");
const returnCharge = document.querySelector("#return-charge");
// const cashPart = document.querySelector("#cash-part");

const availableNotes=[2000,500,100,20,10,5,1];
checkButton.addEventListener("click",function validateBillAmountAndCashAmount(){
    errorMessageDisplay();
    if(billAmount.value > 0){
        if(Number(billAmount.value)>=Number(billAmount.value)){
            const amountToBeReturned = cashAmount.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showErrorMessage("Cash given amount should atleast be equal to bill amount.");
        }
    }else{
        showErrorMessage("Invalid Bill amount.");
    }
});

function errorMessageDisplay(){
    errorMessage.style.display = "none";
}

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showErrorMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText= message;
}
