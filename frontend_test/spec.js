'use strict';
var LoginPage = require('./pages/LoginPage'),
    MainPage = require('./pages/MainPage'),
    LessonPage = require('./pages/LessonPage');

describe('homepage', function() {

    var loginPage = new LoginPage();
    var mainPage = new MainPage();
    var lessonPage = new LessonPage();

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://vimbox.skyeng.ru');
        loginPage.fillLogin('user10025@example.com');
        loginPage.fillPassword('password');
        loginPage.Submit();
        browser.waitForAngularEnabled(false);
    });

    it('Select "Talking about history" lesson', function() {
        mainPage.selectCourse(mainPage.generalCourse);
        mainPage.selectLevel(mainPage.advancedLevel);
        mainPage.selectLesson(mainPage.lesson19);
        lessonPage.finishCourse();
        expect(mainPage.getPageTitle()).toEqual('Classroom');
        expect(browser.getCurrentUrl()).toEqual(mainPage.url);
    });
});