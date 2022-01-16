const EC = protractor.ExpectedConditions;

class Element {
  constructor(selector) {
    this.element = element(by.css(selector));
  }

  click() {
    return this.element.click();
  };

  getText() {
    return this.element.getText();
  };

  sendKeys(text) {
    return this.element.sendKeys(text);
  };

  check() {
    return browser.executeScript('arguments[0].click()', this.element);
  };

  scroll() {
    return browser.executeScript('arguments[0].scrollIntoView();', this.element);
  };

  mouseMove() {
    return browser.actions().mouseMove(this.element).perform();
  };

  waitToBeSelected() {
    return browser.wait(EC.elementToBeSelected(this.element));
  };

  waitVisibilityOf(ms) {
    return browser.wait(EC.visibilityOf(this.element), ms);
  };

  waitPresenceOf(ms) {
    return browser.wait(EC.presenceOf(this.element), ms);
  };
  
  waitToBeClickable(ms) {
    return browser.wait(EC.elementToBeClickable(this.element), ms);
  }
};
module.exports = Element;
