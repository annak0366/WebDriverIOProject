const randomData = require('../randomData');
const firstName = '#firstName';
const lastName = '#lastName';
const userName = '#username';
const password = '#password';
const confirmPassword = '#confirmPassword';
const signUpBtn = 'button[type="submit"]';
const firstNameError = '#firstName-helper-text';
const passwordError = '#password-helper-text';
const confirmPasswError = '#confirmPassword-helper-text';
const registeredUserName = randomData.username;
const registeredPassword = randomData.password;
class RegistrationPage {
    async enterValidRegistrationData(){
        await $(firstName).setValue(randomData.firstName);
        await $(lastName).setValue(randomData.lastName);
        await $(userName).setValue(randomData.username);
    }
    async enterValidData(){
        await $(firstName).setValue(randomData.firstName);
        await $(lastName).setValue(randomData.lastName);
        await $(userName).setValue(registeredUserName);
        await $(password).setValue(registeredPassword);
        await $(confirmPassword).setValue(registeredPassword);
    }
    async enterPassword(){
        await $(password).setValue(randomData.password);
    }
    async enterShortPassword(){
        await $(password).setValue(randomData.shortPassword);
    }
    async enterDiffConfirmPassword(){
        await $(confirmPassword).setValue(randomData.invalidPassword);
    }
    async clickSignUpBtn(){
        await $(signUpBtn).click();
    }
    async getSignUpBtn(){
        return await $(signUpBtn);
    }
    async getFirstNameError(){
        return await $(firstNameError);
    }
    async getPasswError(){
        return await $(passwordError);
    }
    async getConfirmPasswError(){
        return await $(confirmPasswError);
    }
    async getRegisteredUsername(){
        return registeredUserName;
    }
    async getRegisteredPassword(){
        return registeredPassword;
    }
}
module.exports = new RegistrationPage();