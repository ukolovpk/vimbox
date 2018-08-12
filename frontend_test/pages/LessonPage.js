'use strict';
function LessonPage () {
    var EC = protractor.ExpectedConditions;
    this.url = 'https://vimbox.skyeng.ru/workbook/rezaguhosa/1/materials';
    this.finishButton = element(by.xpath('//*[contains(@data-qa-id,"btn-finish")]'));

    this.finishCourse = function() {
        browser.wait(EC.elementToBeClickable(this.finishButton), 10000);
        this.finishButton.click();
    };
}
module.exports = LessonPage;