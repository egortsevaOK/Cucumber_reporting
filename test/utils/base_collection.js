class Collection {
  constructor(selector) {
    this.collection = element.all(by.css(selector));
  };

  async getCount() {
    return await this.collection.count();
  };

  async getTexts() {
    return await this.collection.getText();
  };

  async clickElementByText(textToClick) {
    const arrayOfElementTexts = await this.collection.getText();
    const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
    if (elementToClickIndex === -1) {
      throw new Error(`No element with [${textToClick}] text found!`);
    }
    return this.collection.get(elementToClickIndex).click();
  };
  
  async mouseMoveByText(textToMouseMove) {
    const arrayOfElementTexts = await this.collection.getText();
    const elementToClickIndex = arrayOfElementTexts.indexOf(textToMouseMove);
    if (elementToClickIndex === -1) {
      throw new Error(`No element with [${textToMouseMove}] text found!`);
    }
    return browser.actions().mouseMove((this.collection.get(elementToClickIndex))).perform();
  };
};

module.exports = Collection;
