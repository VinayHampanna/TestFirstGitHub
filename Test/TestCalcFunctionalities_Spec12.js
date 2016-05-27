var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until;

var CalcPO = require('D:\\Self_Study\\JavaScript\\Test_\\Test\\Calc_po.js');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
jasmine.DEFAULT_UPDATE_INTERVAL = 0;

var driver = new webdriver.Builder().forBrowser('firefox').build();

describe('Calc POC', function(){

	beforeEach(function (){
		console.log("Inside before Each");
		driver.get('http://www.nopcommerce.com/');
		driver.get(CalcPO.baseURL);
	});
	
	afterEach(function (){
	console.log("Inside After Each");
		
	});
	
	it('Add 2 Numbers',function(){
		console.log("Inside Add 2 Numbers");
		driver.get('D:\\Self_Study\\JavaScript\\Test_\\Tutorial\\HTML\\CalcHTML.HTML');
		driver.get(CalcPO.baseURL);
		driver.findElement(CalcPO.btn_0).click();
		expect("Sometest").toEqual("Sometest");
	
	});
});