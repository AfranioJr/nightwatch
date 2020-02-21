const { client } = require('nightwatch-api');

const forgetPassword = client.page.login.forgetPasswordElements();

module.exports = {

    insertEmail: (email) => {
        return forgetPassword
                .waitForElementVisible('@emailInput')
                .clearValue('@emailInput')
                .setValue('@emailInput', email);
    },

    clickOnSendButton: () => {
        return forgetPassword
                .click('@sendButton');
    }
}