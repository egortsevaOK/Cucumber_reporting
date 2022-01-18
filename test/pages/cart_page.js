const BasePage = require('./base_pages/base_page');
const Element = require('../utils/base_element');

class CartPage extends BasePage {
  constructor() {
    super();
    this.cartBanner = ('.welcomeBannerText');
  };

  getCartBannerText() {
    const cartBanner = new Element(this.cartBanner);
    return cartBanner.getText();
  };
};

module.exports = CartPage;
