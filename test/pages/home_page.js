const BasePage = require('./base_pages/base_page');
const Collection = require('../utils/base_collection');

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = 'https://shop.scholastic.com/teachers-ecommerce/teacher/tsohomepage.html';
    this.leftFilter = 'ul.list-unstyled.internal-links a';
    this.promobanner = 'img[alt^="Amplify"] + section';
  };

  open() {
    return super.open(this.url);
  };

  clickLink(linkName) {
    const leftFilter = new Collection(this.leftFilter);
    return leftFilter.clickElementByText(linkName);
  };

  clickOnBanner() {
    const promobanner = new Element(this.promobanner);
    return promobanner.click();
  };
};

module.exports = HomePage;
