var Jasmine = require('jasmine');

var jasmine = new Jasmine();
var reporters = require('jasmine-reporters');
var junitReporter = new reporters.JUnitXmlReporter({
    savePath: __dirname,
    //consolidateAll: false
	consolidateAll: true
});

jasmine.loadConfigFile('spec/support/jasmine.json');
//console.log('Inside Config file.');

jasmine.addReporter(junitReporter);
jasmine.execute();

// Reporting : Convert XML to HTML format.
var HTMLReport = require('jasmine-xml2html-converter');
testConfig = {
	reportTitle: 'Test Execution Report',
	outputPath: './Html_Report'
	};
new HTMLReport().from( __dirname + '/junitresults.xml', testConfig);

// Reporting : Convert XML to HTML format.



// jasmine.loadConfig({
//    spec_dir: 'spec',
//    spec_files: [
//        'appSpec.js',
//        'requests/**/*[sS]pec.js',
//        'utils/**/*[sS]pec.js'
//    ],
//    helpers: [
//        'helpers/**/*.js'
//    ]
// }); 