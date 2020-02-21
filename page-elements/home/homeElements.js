module.exports = {

    url: 'https://cross.gympass-staging.com/',
    elements: {
        body: {
            selector: 'body'
        },
        loginButton: {   
            selector: '//a[@class = "button new outlined"]',
            locateStrategy: 'xpath'
        } 
    }
}