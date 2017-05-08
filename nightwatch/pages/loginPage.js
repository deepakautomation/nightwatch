    var action = require('../commands/actionDriver.js')

    var signIn  =function (browser) {
        action.clickElement(browser,'//span[text()="LOGIN"]');
        action.typeOnElement(browser,'//*[@id="username_login"]','sunaina@test.com');
        action.typeOnElement(browser,'//*[@id="password_login"]','12345678')
        action.clickElement(browser,'//button[contains(@id,"loginB")]')
        return browser;
    }
module.exports={signIn}



