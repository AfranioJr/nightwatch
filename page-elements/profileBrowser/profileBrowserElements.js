module.exports = {

    url: 'https://accounts.google.com/signin/v2',
    elements: {
        body: {
            selector: 'body'
        },
        indentifierId: {   
            selector: '//*[@id="identifierId"]',
            locateStrategy: 'xpath'
        },
        identifierNext: {   
            selector: '#identifierNext'
        },
        identifierPassword: {   
            selector: '//*[@id="password"]/div[1]/div/div[1]/input',
            locateStrategy: 'xpath'
        },
        indentifierPasswordNext: {   
            selector: '#passwordNext'
        }
    }
}