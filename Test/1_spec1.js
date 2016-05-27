var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
jasmine.DEFAULT_UPDATE_INTERVAL = 0;

var btn_0 = '//*[@id="calculator"]/span[13]';
var btn_1 = '//*[@id="calculator"]/span[9]';
var btn_2 = '//*[@id="calculator"]/span[10]';
var btn_3 = '//*[@id="calculator"]/span[11]';
var btn_4 = '//*[@id="calculator"]/span[5]';
var btn_5 = '//*[@id="calculator"]/span[6]';
var btn_6 = '//*[@id="calculator"]/span[7]';
var btn_7 = '//*[@id="calculator"]/span[13]';
var btn_8 = '//*[@id="calculator"]/span[13]';
var btn_9 = '//*[@id="calculator"]/span[13]';

var btn_Add = '//*[@id="calculator"]/span[4]';
var btn_Sub = '//*[@id="calculator"]/span[8]';
var btn_Mult = '//*[@id="calculator"]/span[12]';
var btn_Div = '//*[@id="calculator"]/span[16]';
var btn_Equal = '//*[@id="calculator"]/span[15]';

var btn_Clear = '//*[@id="calculator"]/div[2]'; 
var txt_Display = '//*[@id="calculator"]/div[1]';   

var driver = new webdriver.Builder().forBrowser('firefox').build();
var baseURL = 'D:\\Self_Study\\JavaScript\\Test_\\Tutorial\\HTML\\CalcHTML.HTML';

describe("Jasmine Test Calc", function() {

	beforeAll(function(done) {
	console.log('Inside beforeAll');
	driver.get(baseURL);
	driver.manage().window().maximize().then(done);
    });
  
	/*
	beforeEach(function(done) {
	console.log('Inside beforeEach');
	}); */

  it("Add", function () {
	console.log('Add');
	//driver.findElement(webdriver.By.xpath(lnk_MyAcct_xpath)).click();
	driver.findElement(webdriver.By.xpath(btn_1)).click().then (function () {
		console.log('Clicked 1');
		driver.findElement(webdriver.By.xpath(btn_Add)).click().then ( function (){
			console.log('Clicked Add btn');
			driver.findElement(webdriver.By.xpath(btn_2)).click().then ( function (){ 
				console.log('Clicked 2');
				driver.findElement(webdriver.By.xpath(btn_Equal)).click().then (function (){
					console.log('Verify Addition of 2 numbers');
					driver.findElement(webdriver.By.xpath(txt_Display)).getText().then (function (Added_Value){
						expect(Added_Value).toBe('3');
						done();
						});
				});
			});
		});
	});
  });
  /*
	console.log('Clicked 1');
	driver.findElement(webdriver.By.xpath(btn_Add)).click();
	console.log('Clicked Add btn');
	driver.findElement(webdriver.By.xpath(btn_2)).click(); 
	console.log('Clicked 2');
	driver.findElement(webdriver.By.xpath(btn_Equal)).click();
  console.log('Clicked Equal'); 
	driver.findElement(webdriver.By.xpath(txt_Display)).getText().then (function (Add_Value){
		expect(Add_Value).toBe('3');
		} );
  }); */

  
  afterEach(function() {
  console.log('afterEach');

  });
  
  afterAll(function() {
  console.log('afterAll');
  // driver.quit();
  });
  
});


