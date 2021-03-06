var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until;

var reporters = require('jasmine-reporters');
var junitReporter = new reporters.JUnitXmlReporter({
    savePath: __dirname,
    consolidateAll: false
});	
	
	
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
var btn_Mult = '//*[@id="calculator"]/span[16]';
var btn_Div = '//*[@id="calculator"]/span[12]';
var btn_Equal = '//*[@id="calculator"]/span[15]';

var btn_Clear = '//*[@id="calculator"]/div[2]'; 
var txt_Display = '//*[@id="calculator"]/div[1]';   

var driver = new webdriver.Builder().forBrowser('firefox').build();
// var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var baseURL = 'D:\\Self_Study\\JavaScript\\Test_\\Tutorial\\HTML\\CalcHTML.HTML';

describe("Jasmine Test Calc 2", function() {

	beforeAll(function(done) {
	// console.log('Inside beforeAll');
	driver.get(baseURL);
	driver.manage().window().maximize().then(done);
    });
  
	beforeEach(function() {
	//console.log('Inside beforeEach');
	});

  it("Add", function (done) {
	//console.log('Add');
	//driver.findElement(webdriver.By.xpath(lnk_MyAcct_xpath)).click();
	driver.findElement(webdriver.By.xpath(btn_1)).click().then (function () {
		//console.log('Clicked 1');
		driver.findElement(webdriver.By.xpath(btn_Add)).click().then ( function (){
			//console.log('Clicked Add btn');
			driver.findElement(webdriver.By.xpath(btn_2)).click().then ( function (){ 
				//console.log('Clicked 2');
				driver.findElement(webdriver.By.xpath(btn_Equal)).click().then (function (){
					//console.log('Verify Addition of 2 numbers');
					driver.findElement(webdriver.By.xpath(txt_Display)).getText().then (function (Added_Value){
						expect(Added_Value).toBe('3');
						done();
						});
				});
			});
		});
	});
  });
    it("Multiply", function (done) {
		//console.log('Multiply');
	//driver.findElement(webdriver.By.xpath(lnk_MyAcct_xpath)).click();
	driver.findElement(webdriver.By.xpath(btn_3)).click().then (function () {
		//console.log('Clicked 1');
		driver.findElement(webdriver.By.xpath(btn_Mult)).click().then ( function (){
			//console.log('Clicked Add btn');
			driver.findElement(webdriver.By.xpath(btn_2)).click().then ( function (){ 
				//console.log('Clicked 2');
				driver.findElement(webdriver.By.xpath(btn_Equal)).click().then (function (){
					//console.log('Verify Multiply of 2 & 3 numbers');
					driver.findElement(webdriver.By.xpath(txt_Display)).getText().then (function (Added_Value){
						expect(Added_Value).toBe('6');
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

	/*
	driver.findElement(By.xpath(lbl_MyAcct_xpath)).getText().then(function(txt_MyAcct) {
	console.log('Welcome to My Console');
	expect(txt_MyAcct).toBe(vfy_lbl_txt_MyAccount); 
	done();
	});
	*/
  
  afterEach(function() {
  // console.log('afterEach');
  driver.findElement(webdriver.By.xpath(btn_Clear)).click();

  });
  
  afterAll(function() {
  // console.log('afterAll');
  driver.quit();
  });
  
});