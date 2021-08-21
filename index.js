const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes=[2000,500,100,50,10,5,1];
checkButton.addEventListener("click",function validateBillAmountAndCashAmount(){
    errorMessageDisplay();
    if(billAmount.value > 0){
        // console.log(billAmount.value);
        if(cashAmount.value >= billAmount.value){
            // console.log(cashAmount.value);
            // console.log(billAmount.value);
            const amountToBeReturned = cashAmount.value - billAmount.value;
            // console.log(amountToBeReturned);
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
    // console.log("here");
    for(let i=0;i<availableNotes.length;i++){
        // console.log(availableNotes[i]);
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        // console.log(numberOfNotes);
        // console.log(amountToBeReturned);
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showErrorMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText= message;
}
