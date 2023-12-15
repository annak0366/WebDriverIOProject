const homeBtn = '[data-test="sidenav-home"]';
const logOutBtn = 'div[data-test="sidenav-signout"]';
const newTransactionBtn = 'a[href="/transaction/new"]';
class HomePage {
    async getHomeBtn(){
        return await $(homeBtn);
    }
    async getlogOutBtn(){
        return await $(logOutBtn);
    }
    async clickLogoutBtn(){
        return await $(logOutBtn).click();
    }
    async clickNewTransactionBtn(){
        await $(newTransactionBtn).click();
    }
}
module.exports = new HomePage();