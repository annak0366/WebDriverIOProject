const homePage = require('../pageobjects/home.page');
const loginPage = require('../pageobjects/login.page');
const {tp, amount, note, decimalAmount, oppositeNumber, symbolString, negativeNumber} = require('../pageobjects/transactions.page');

describe('New Transaction', () => {
    beforeEach(() => {
        browser.url('/signin');
    });
    afterEach(() => {
        homePage.clickLogoutBtn();
    });
    it("Testing the Sender's transaction confirmation and balance update", async() => {
        await loginPage.loginSecondUser();  
        const initialAmount = await tp.getCurrentUserBalance();
        await tp.transactionExecution(amount);
        await tp.clickPayBtn();
        await expect(await tp.getSuccessPaymentMsg()).toHaveText(`Paid $${amount.toFixed(2)} for ${note}`);
        const checkAmount =`$${(parseFloat(initialAmount.replace(/[^\d.]/g, '')) - amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        await browser.pause(5000);
        const updatedAmount = await tp.getCurrentUserBalance();
        await expect(updatedAmount).toEqual(checkAmount);
    });
    it("Testing the Recipient's balance update after making a new transaction", async() => {
        await loginPage.loginFirstUser();
        const initialAmount = await tp.getCurrentUserBalance();
        await homePage.clickLogoutBtn();
        await loginPage.loginSecondUser();
        await tp.transactionExecution(amount);
        await tp.clickPayBtn();
        await homePage.clickLogoutBtn();
        await loginPage.loginFirstUser();
        const updatedAmount = await tp.getCurrentUserBalance();
        const checkAmount = `$${(parseFloat(initialAmount.replace(/[^\d.]/g, '')) + amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        expect(updatedAmount).toEqual(checkAmount);
    });
    it('Entering the invalid data into the "Amount" input field while creating a new transaction', async() => {
        await loginPage.loginSecondUser();
        await tp.checkAmountField(symbolString);
        await expect(await tp.getAmountFieldValue()).toEqual('');
    });
    it("Checking that it's impossible to create a new transaction without filling the 'Add a note' field.", async() => {
        await loginPage.loginSecondUser();
        await homePage.clickNewTransactionBtn();
        await tp.selectUser();
        await tp.clickNoteField();
        await tp.fillTheAmountField();
        await expect(await tp.getNoteErrorMessage()).toHaveText('Please enter a note');
        await expect(await tp.getPayBtn()).toBeDisabled();
    });
    it("Checking that it's impossible to create a new transaction with empty input fields.", async() => {
        await loginPage.loginSecondUser();
        await homePage.clickNewTransactionBtn();
        await tp.selectUser();
        await tp.clickNoteField();
        await expect(await tp.getAmountErrorMessage()).toHaveText('Please enter a valid amount');
        await expect(await tp.getPayBtn()).toBeDisabled();
    });
    it("Validation of Negative Amount Input while creating the New transaction", async() => {
        await loginPage.loginSecondUser();
        await tp.checkAmountField(negativeNumber);
        expect(await tp.getAmountFieldValue()).toEqual(`$${oppositeNumber}`);
    });
    it("Verifying the payment transaction with decimal amount", async() => {
        await loginPage.loginSecondUser();
        await tp.transactionExecution(decimalAmount);
        await tp.clickPayBtn();
        await expect(await tp.getSuccessPaymentMsg()).toHaveText(`Paid $${decimalAmount} for ${note}`);
    });
    it("Verify Request Money Feature: Initiating a Fund Request from the First User", async() => {
        await loginPage.loginSecondUser();
        const initialAmount = await tp.getCurrentUserBalance();
        await tp.transactionExecution(amount);
        await tp.clickRequestBtn();
        const updatedAmount = await tp.getCurrentUserBalance();
        await expect(updatedAmount).toEqual(initialAmount);
        await expect(tp.getSuccessPaymentMsg()).toHaveText(`Requested $${amount.toFixed(2)} for ${note}`);
    });
    it("Verify Successful Approval of Money Transfer Request", async() => {
        await loginPage.loginSecondUser();
        await tp.transactionExecution(amount);
        await tp.clickRequestBtn();
        await homePage.clickLogoutBtn();
        await loginPage.loginFirstUser();
        const initialSecondUserBalance = await tp.getCurrentUserBalance();
        await tp.acceptRequest();
        const updatedSeconduserBalance = await tp.getCurrentUserBalance();
        const checkAmount =`$${(parseFloat(initialSecondUserBalance.replace(/[^\d.]/g, '')) - amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        expect(updatedSeconduserBalance).toEqual(checkAmount);
    });
    it("Verify receipt of transferred funds after successful approval of request", async() => {
        await loginPage.loginSecondUser();
        const initialBalance = await tp.getCurrentUserBalance();
        await tp.transactionExecution(amount);
        await tp.clickRequestBtn();
        await homePage.clickLogoutBtn();
        await loginPage.loginFirstUser();
        await tp.acceptRequest();
        await homePage.clickLogoutBtn();
        await loginPage.loginSecondUser();
        const updatedBalance = await tp.getCurrentUserBalance();
        const checkAmount =`$${(parseFloat(initialBalance.replace(/[^\d.]/g, '')) + amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        expect(updatedBalance).toEqual(checkAmount);
    });
    it("Verify 'Reject Request' Functionality", async() => {
        await loginPage.loginSecondUser();
        await tp.transactionExecution(amount);
        await tp.clickRequestBtn();
        await homePage.clickLogoutBtn();
        await loginPage.loginFirstUser();
        const initialBalance = await tp.getCurrentUserBalance();
        await tp.rejectRequest();
        const updatedBalance = await tp.getCurrentUserBalance();
        expect(updatedBalance).toEqual(initialBalance);
    });
});