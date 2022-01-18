const BasePage = require('./base_pages/base_page');
const Element = require('../utils/base_element');

class SigninPage extends BasePage {
  constructor() {
    super();
    this.emailField = '#user-text-field';
    this.continueButton = '#signin-email-submit-button';
    this.emailErrorMsg = '.EmailField_errorMessage__2Go2g';
    this.closeButton = '#registration-close';
    this.loginFrame = '.loginframe';
    this.LoginIFrame = '#loginIframe';
  };

  async checkEmail(email) {
    const emailField = new Element(this.emailField);
    const continueButton = new Element(this.continueButton);
    await browser.switchTo().frame(await element(by.css(this.loginFrame)).getWebElement());
    await browser.switchTo().frame(await element(by.css(this.LoginIFrame)).getWebElement());
    await emailField.sendKeys(email);
    await continueButton.waitToBeClickable(3000);
    return continueButton.check();
  };

  async close() {
    const closeButton = new Element(this.closeButton);
    await browser.switchTo().defaultContent();
    await closeButton.waitVisibilityOf(1000);
    return closeButton.click();
  };
};

module.exports = SigninPage;
