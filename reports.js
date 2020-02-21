const report = require('cucumber-html-reporter');

module.exports = {

    createTestReport: () => {
        return report.generate({
            name: 'X-Features Front',
            theme: 'bootstrap',
            jsonFile: 'report/cucumber_report.json',
            output: 'report/cucumber_report.html',
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "Autor":"Junior ASJ",
                "Test Environment": "devInt",
                "Browser": "Chrome  80.0.3987.100",
                "Platform": "Linux",
                "Parallel": "Scenarios",
                "Executed": "Local"
            }
        });
    }
}