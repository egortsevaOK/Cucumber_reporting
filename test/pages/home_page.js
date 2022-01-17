const BasePage = require('./base_pages/base_page');
const Collection = require('../utils/base_collection');

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = 'https://shop.scholastic.com/teachers-ecommerce/teacher/tsohomepage.html';
  };

  open() {
    return super.open(this.url);
  };

  clickLink(linkName) {
    const leftFilter = new Collection('ul.list-unstyled.internal-links a');
    return leftFilter.clickElementByText(linkName);
  };

  clickOnBanner() {
    const promobanner = new Element('img[alt^="Amplify"] + section');
    return promobanner.click();
  };
};

module.exports = HomePage;
