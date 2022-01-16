const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const PageFactory = require('./../pages/pageFactory');
setDefaultTimeout(60000);

When('I go to shop.scholastic.com', function() {
  return PageFactory.getPage('Home').open();
});

When('I click on {string} link from the side menu', function(link) {
  return PageFactory.getPage('Home').clickLink(link);
});

When('I add to cart the first item in the list', function() {
  return PageFactory.getPage('Items').clickOnItem();
});

When('I click on checkout button', function() {
  return PageFactory.getPage('Items').checkoutButton();
});

When('I login as an unauthorized user', function() {
  return PageFactory.getPage('Signin').checkEmail('new_email@gmail.com');
});

When('I close sign in form', function() {
  return PageFactory.getPage('Signin').close();
});

When('I view cart', function() {
  return PageFactory.getPage('Home').Header.viewCart();
});

Then(/^cart banner should be '([^"]*)'$/, async function(banner) {
  const cartBanner = await PageFactory.getPage('Cart').getCartBannerText();
  expect(cartBanner).to.be.equal(banner);
});

