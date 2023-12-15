const loginPage = require('../pageobjects/login.page');
const registerPage = require('../pageobjects/registration.page');
const homePage = require('../pageobjects/home.page');
describe('Registration tests', () => {
    beforeEach(() => {
        browser.url('/signup');
    });
    it('Registration with empty fields', async() => {
        await registerPage.clickSignUpBtn();
        await expect(registerPage.getFirstNameError()).toHaveText('First Name is required');
    });
    it('Registration without confirming the password', async() => {
        await registerPage.enterValidRegistrationData();
        await registerPage.enterPassword();
        await expect(registerPage.getSignUpBtn()).toBeDisabled();
    });
    it('Registration with Non-Matching Passwords', async() => {
        await registerPage.enterValidRegistrationData();
        await registerPage.enterPassword();
        await registerPage.enterDiffConfirmPassword();
        await expect(registerPage.getConfirmPasswError()).toHaveText('Password does not match');
    });
    it('Registration with the password shorter than 4 symbols', async() => {
        await registerPage.enterValidRegistrationData();
        await registerPage.enterShortPassword();
        await expect(registerPage.getPasswError()).toHaveText('Password must contain at least 4 characters');
    });
    it('Registration with valid data', async() => {
        await registerPage.enterValidData();
        await registerPage.clickSignUpBtn();
        await expect(await browser).toHaveUrlContaining('/signin');
        await loginPage.enterRegisteredCredentials();
        await loginPage.clickSignInBtn();
        await expect(await homePage.getHomeBtn()).toExist();
        await expect(await homePage.getlogOutBtn()).toExist();
    });
})