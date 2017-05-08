var wait=6000;

var clickElement=function(browser,loc){
    browser.useXpath()
         .waitForElementVisible(loc, wait)
         .click(loc);
}
var typeOnElement=function(browser,loc,input){
    browser.useXpath()
    .waitForElementVisible(loc, wait)
    .setValue(loc,input);
}


var verifyElementPresent = function(browser, loc){
    browser.useXpath()
    .waitForElementVisible(loc, wait)
    .expect.element(loc).to.be.present;
}
// module.exports.clickelement = function(browser,loc){
//     return new actionDriver(browser,loc);
// }
// module.exports.typeElement = function(browser,loc,input){
//     return new actionDriverType(browser,loc,input);
// }

module.exports = {clickElement,typeOnElement,verifyElementPresent}