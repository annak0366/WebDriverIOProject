const loginPage = require('../pageobjects/login.page');
const homePage = require('../pageobjects/home.page');
describe('Login tests', () => {
    beforeEach(() => {
        browser.url('/signin');
    });
    it('Login with the valid username and invalid password', async() => {
        await loginPage.enterInvalidPasswordCredentials();
        await loginPage.clickSignInBtn();
        await expect(loginPage.getErrorMessage()).toHaveText('Username or password is invalid');
    });
    it('Login with empty fields', async() => {
        await loginPage.clickSignInBtn();
        await expect(await loginPage.getUserNameError()).toHaveText('Username is required');
    });
    it('Login with the password shorter than 4 symbols', async() => {
        await loginPage.enterShortPasswordCredentials();
        await expect(await loginPage.getShortPasswordError()).toHaveText('Password must contain at least 4 characters');
    });   
    it('Log in with valid data', async() => {
        await loginPage.loginFirstUser();
        await expect(await homePage.getHomeBtn()).toExist();
        await expect(await homePage.getlogOutBtn()).toExist();
    });
})