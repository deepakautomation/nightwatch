var login=require('../pages/homePage.js');
var fillCredentials=require('../pages/loginPage.js');
var user=require('../pages/userPage.js');

module.exports = {
  'User Logs in' : function (browser) {
      
    login.goToMeritnation(browser)
    login.clickLoginLink(browser)
     
  },

'User enter username and password' : function(browser){
    fillCredentials.signIn(browser)

},

'Verify User' : function(browser){
    user.verifyUser(browser)

}

};