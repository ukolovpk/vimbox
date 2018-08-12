'use strict';
function MainPage () {
    var EC = protractor.ExpectedConditions;
    this.url = 'https://vimbox.skyeng.ru/showcase';
    this.h1 = element(by.xpath('//h1'));
    this.generalCourse = element(by.xpath(('//div[h2[contains(text(),"General English")]]//div[contains(text(),"General")]')));
    this.advancedLevel = element(by.xpath('//vim-gui-tabs/ul//*[contains(text(),"Advanced")]'));
    this.lesson19 = element(by.xpath('//vim-rooms-lesson-list//div[div[contains(text(),"Talking about history")]]/div[contains(@class, "overlay")]'));

    //Методы выбора не привязаны к конкретному уровню/курсу/уроку - универсальные
    this.selectCourse = function(courseElem) {
        browser.wait(EC.presenceOf(courseElem), 100000);
        courseElem.click();
    };

    this.selectLesson = function(lessonElem) {
        browser.wait(EC.presenceOf(lessonElem), 100000);
        browser.actions().mouseMove(lessonElem).perform();
        lessonElem.click();
    };

    this.selectLevel = function(levelElem) {
        levelElem.click();
    };

    this.getPageTitle = function () {
        browser.wait(EC.presenceOf(this.h1), 100000);
        return this.h1.getText();
    }
}
module.exports = MainPage;