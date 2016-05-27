var by = require('selenium-webdriver').By;
var CalcPage = function () {

this.btn_0 = by.xpath('//*[@id="calculator"]/span[13]');
/*
this.btn_1 = element(by.xpath('//*[@id="calculator"]/span[9]'));
this.btn_2 = element(by.xpath('//*[@id="calculator"]/span[10]'));
this.btn_3 = element(by.xpath('//*[@id="calculator"]/span[11]'));
this.btn_4 = element(by.xpath('//*[@id="calculator"]/span[5]'));
this.btn_5 = element(by.xpath('//*[@id="calculator"]/span[6]'));
this.btn_6 = element(by.xpath('//*[@id="calculator"]/span[7]'));
this.btn_7 = element(by.xpath('//*[@id="calculator"]/span[1]'));
this.btn_8 = element(by.xpath('//*[@id="calculator"]/span[2]'));
this.btn_9 = element(by.xpath('//*[@id="calculator"]/span[3]'));

this.btn_Add = element(by.xpath('//*[@id="calculator"]/span[4]'));
this.btn_Sub = element(by.xpath('//*[@id="calculator"]/span[8]'));
this.btn_Mult = element(by.xpath('//*[@id="calculator"]/span[12]'));
this.btn_Div = element(by.xpath('//*[@id="calculator"]/span[16]'));


this.btn_Decimal = element(by.xpath('//*[@id="calculator"]/span[14]'));
this.btn_Equal = element(by.xpath('//*[@id="calculator"]/span[15]'));
this.btn_Clear = element(by.xpath('//*[@id="calculator"]/div[2]')); 

this.txt_Display = element(by.xpath('//*[@id="calculator"]/div[1]'));   
this.baseURL = 'D:\\Self_Study\\JavaScript\\Test_\\Tutorial\\HTML\\CalcHTML.HTML';   */
this.baseURL = 'http://codingpen.com/2016/02/01/a-simple-calculator-in-pure-javascript/';

this.getPage = function () {
	browser.get('D:/Self_Study/JavaScript/Test_/Tutorial/HTML/CalcHTML.HTML');
}

this.sleep = function () {
	browser.sleep(3000);
}


};

module.exports = new CalcPage();