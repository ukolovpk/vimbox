'use strict';
function LoginPage () {
    var EC = protractor.ExpectedConditions;
    var loginField = element(by.name('_username')),
    passwordField = element(by.name('_password'));

    this.fillLogin = function(name) {
        browser.wait(EC.elementToBeClickable(loginField), 10000);
        loginField.sendKeys(name);
    };

    this.fillPassword = function(password) {
        passwordField.sendKeys(password);
    };

    this.Submit = function () {
        passwordField.submit();
    };
}
module.exports = LoginPage;