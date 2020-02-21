const { client } = require('nightwatch-api');

const configBrowser = client.page.profileBrowser.profileBrowserElements();

module.exports = {
    
    openBrowserWithGoolge: () => {
        return configBrowser
                .navigate()
                .waitForElementVisible('@body');
    },
    
    setIdentifierId: (gEmail) => {
        return configBrowser
                .waitForElementVisible('@indentifierId')
                .setValue('@indentifierId', gEmail)
                .click('@identifierNext');
    },

    setPassword: (gPassword) => {
        return configBrowser
                .waitForElementVisible('@identifierPassword')
                .setValue('@identifierPassword', gPassword)
                .click('@indentifierPasswordNext')
                .pause(5000);
    }
}