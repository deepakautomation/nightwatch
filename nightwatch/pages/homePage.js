var action = require('../commands/actionDriver.js')


 var clickLoginLink  =function (browser) {
        action.clickElement(browser,'//span[text()="LOGIN"]');
        return browser;
    }

var goToMeritnation = function (browser) {
        browser
            .windowMaximize()
            .url('http://meritnation.com')
        return browser;
    }

module.exports = {goToMeritnation,clickLoginLink}