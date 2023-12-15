const getRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
const getSymbolsString = (length) => {
    const characters = '!@#$%^&*()_+?><:|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
module.exports = {
    invalidUsername: getRandomString(5),
    invalidPassword: getRandomString(5),
    shortPassword: getRandomString(3),
    username: getRandomString(5),
    firstName: getRandomString(5),
    lastName: getRandomString(5),
    password: getRandomString(5),
    note: getRandomString(6),
    symbolsString: getSymbolsString(10)
};