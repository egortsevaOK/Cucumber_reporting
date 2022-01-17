const BasePage = require('./base_pages/base_page');
const Element = require('../utils/base_element');

class SigninPage extends BasePage {
  constructor() {
    super();
    this.emailField = new Element('#user-text-field');
    this.continueButton = new Element('#signin-email-submit-button');
    this.emailErrorMsg = new Element('.EmailField_errorMessage__2Go2g');
    this.closeButton = new Element('#registration-close');
  };

  async checkEmail(email) {
    const loginFrame = '.loginframe';
    const LoginIFrame = '#loginIframe';
    await browser.switchTo().frame(await element(by.css(loginFrame)).getWebElement());
    await browser.switchTo().frame(await element(by.css(LoginIFrame)).getWebElement());
    await this.emailField.sendKeys(email);
    await this.continueButton.waitToBeClickable(3000);
    return this.continueButton.check();
  };

  async close() {
    await browser.switchTo().defaultContent();
    await this.closeButton.waitVisibilityOf(1000);
    return this.closeButton.click();
  };
};

module.exports = SigninPage;
