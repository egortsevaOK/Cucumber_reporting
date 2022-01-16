const BasePage = require('./base_pages/base_page');
const Element = require('../utils/base_element');

class CartPage extends BasePage {
  constructor() {
    super();
  };

  getCartBannerText() {
    const cartBanner = new Element('.welcomeBannerText');
    return cartBanner.getText();
  };
};

module.exports = CartPage;
