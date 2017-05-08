  var action = require('../commands/actionDriver.js')


var verifyUser = function(browser, loc){
    action.verifyElementPresent(browser, '//p[contains(text(),"What")]');
    return browser;
}

module.exports = {verifyUser}


