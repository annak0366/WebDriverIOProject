const data = require('../data.json');
const randomData = require('../randomData');
const registerPage = require('../pageobjects/registration.page');
const username = "#username";
const password = '#password';
const signInBtn = "button[type='submit']";
const userNameError = '#username-helper-text';
const errorMessage = "//div[@class='MuiAlert-message']";
const shortPasswordError = "#password-helper-text";
class LoginPage {
    async loginFirstUser() {
        await $(username).setValue(data.firstUser.username);
        await $(password).setValue(data.firstUser.password);
        await $(signInBtn).click();
    }
    async loginSecondUser(){
        await $(username).setValue(data.secondUser.username);
        await $(password).setValue(data.secondUser.password);
        await $(signInBtn).click();
    }
    async enterInvalidPasswordCredentials() {
        await $(username).setValue(data.firstUser.username);
        await $(password).setValue(randomData.invalidPassword);
    }
    async enterShortPasswordCredentials(){
        await $(password).setValue(randomData.shortPassword);
        await $(username).setValue(randomData.invalidUsername);
    }
    async clickSignInBtn(){
        await $(signInBtn).click();
    }
    async getErrorMessage(){
        return await $(errorMessage);
    }
    async getUserNameError(){
        return await $(userNameError);
    }
    async getShortPasswordError(){
        return await $(shortPasswordError);
    }
    async enterRegisteredCredentials() {
        const registeredUsername = await registerPage.getRegisteredUsername();
        const registeredPassword = await registerPage.getRegisteredPassword();
        await $(username).setValue(registeredUsername);
        await $(password).setValue(registeredPassword);
    }   
}
module.exports = new LoginPage();