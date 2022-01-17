const HomePage = require('./home_page');
const SigninPage = require('./signin_page');
const CartPage = require('./cart_page');
const BasePage = require('./base_pages/base_page');
const ItemsPage = require('./items_page');

class PageFactory {
  static getPage(pageName) {
    switch (pageName) {
      case 'Home':
        return new HomePage();
      case 'Items':
        return new ItemsPage();
      case 'Signin':
        return new SigninPage();
      case 'Cart':
        return new CartPage();
      default:
        return new BasePage();
    };
  };
};

module.exports = PageFactory;