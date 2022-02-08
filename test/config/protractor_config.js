const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');
const cucumberJunitConvert = require('cucumber-junit-convert');

const reporterOptions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/report.json'),
    output: path.join(__dirname, '../reports/cucumber_report.html'),
    reportSuiteAsScenarios: true,
    launchReport: true
};

const options = {
    inputJsonFile: path.join(__dirname, '../reports/report.json'),
    outputXmlFile: path.join(__dirname, '../reports/cucumber_report.xml')
};

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: [path.resolve('./test/features/**/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox', '--window-size=1366,768']
        },
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: ['../step_definitions/**/*.js'],
        format: ['json:../reports/report.json', '../../node_modules/@cucumber/pretty-formatter'],
        tags: yargs.tags || '@smoke'
    },
    onPrepare: () => {
        return browser.waitForAngularEnabled(false);
    },
    afterLaunch: () => {
        cucumberJunitConvert.convert(options);
        return reporter.generate(reporterOptions);  
    }
};
