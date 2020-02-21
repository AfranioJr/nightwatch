const { Given, Then, When } = require('cucumber');

const profileBrowserActions = require('../../page-actions/profileBrowser/profileBrowserActions.js');

Given('I am open Google Account', () => {
    return profileBrowserActions.openBrowserWithGoolge();
});

When('I inform email {string}', (gEmail) => {
    return profileBrowserActions.setIdentifierId(gEmail);
});

Then('I put password {string}', (gPassword) => {
    return profileBrowserActions.setPassword(gPassword);
});