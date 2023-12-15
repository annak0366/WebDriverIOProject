const randomData = require('../randomData');
const user = "//span[normalize-space()='Edgar Johns']";
const amountField = '#amount';
const noteField = '#transaction-create-description-input';
const payBtn = 'button[data-test="transaction-create-submit-payment"]';
const requestBtn = 'button[data-test="transaction-create-submit-request"]';
const successMessage = "div.MuiGrid-justify-content-xs-center h2";
const userBalance = 'h6[data-test="sidenav-user-balance"]';
const newTransactionBtn = 'a[href="/transaction/new"]';
const noteErrorMessage = '#transaction-create-description-input-helper-text';
const amountErrorMessage = '#transaction-create-amount-input-helper-text';
const requestNotification = '.MuiGrid-direction-xs-column:first-child';
const acceptRequestBtn = "//span[normalize-space()='Accept Request']";
const rejectRequestBtn = "//span[normalize-space()='Reject Request']";
const amount = 1;
const negativeNumber = -10;
const oppositeNumber = negativeNumber * -1; 
const decimalAmount = 0.99;
const note = randomData.note;
const symbolString = randomData.symbolsString;

class TransactionPage {
    async selectUser(){
        await $(user).click();
    }
    async fillTheAmountField(){
        await $(amountField).setValue(amount);
    }
    async getAmountFieldValue(){
        return await $(amountField).getAttribute("value");
    }
    async clickNoteField(){
        await $(noteField).click();
    }
    async transactionExecution(amount){
        await $(newTransactionBtn).click();
        await $(user).click();
        await $(amountField).setValue(amount);
        await $(noteField).setValue(note);    
    }
    async checkAmountField(number){
        await $(newTransactionBtn).click();
        await $(user).click();
        await $(amountField).setValue(number);
    }
    async clickPayBtn(){
        await $(payBtn).click();
    }
    async getPayBtn(){
        return await $(payBtn);
    }
    async clickRequestBtn(){
        await $(requestBtn).click();
    }
    async getSuccessPaymentMsg(){
        return await $(successMessage);
    }
    async getCurrentUserBalance() {
        return await $(userBalance).getText();
    }
    async getNoteErrorMessage(){
        return await $(noteErrorMessage);
    }
    async getAmountErrorMessage(){
        return await $(amountErrorMessage);
    }
    async acceptRequest(){
        await $(requestNotification).click();
        await $(acceptRequestBtn).click();
    }
    async rejectRequest(){
        await $(requestNotification).click();
        await $(rejectRequestBtn).click();
    }  
}
module.exports = {
    tp: new TransactionPage(),
    amount,
    note,
    decimalAmount,
    oppositeNumber,
    symbolString,
    negativeNumber,
};