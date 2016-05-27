var sleep = require('sleep-async');
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
jasmine.DEFAULT_UPDATE_INTERVAL = 0;

var driver = new webdriver.Builder().forBrowser('firefox').build();  
// driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

var baseURL = 'D:\\Self_Study\\JavaScript\\Test_\\Tutorial\\HTML\\CalcHTML.HTML';
var btn_1 = '//*[@id="calculator"]/span[9]';
var btn_2 = '//*[@id="calculator"]/span[10]';
var btn_Add = '//*[@id="calculator"]/span[4]';
var btn_Equal = '//*[@id="calculator"]/span[15]';
var Base_URL = 'D:\\Self_Study\\JavaScript\\Test_\\Tutorial\\HTML\\CalcHTML.HTML';
var txt_Display = '//*[@id="calculator"]/div[1]';

describe("Jasmine Add 2 numbers", function() {
  

  beforeAll(function(done) {
  console.log('Inside beforeAll');
  driver.get(Base_URL);
  driver.manage().window().maximize().then(done);
  
  });
  
  beforeEach(function() {
	console.log('Inside beforeEach');	
  });
  
	it("Add", function(done) {
	driver.findElement(webdriver.By.xpath(btn_1)).click();
	driver.findElement(webdriver.By.xpath(btn_Add)).click();
	driver.findElement(webdriver.By.xpath(btn_2)).click(); 
	driver.findElement(webdriver.By.xpath(btn_Equal)).click();
	setTimeout(function(){
    //do what you need here
	driver.findElement(webdriver.By.xpath(txt_Display)).getText().then( function( result_text){
	expect(result_text).toBe("3");
	done();
	});
	}, 5000);
	
	//expect(2).toEqual(2);
	}); 
  
});