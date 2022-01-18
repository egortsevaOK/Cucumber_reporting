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

When('I add to cart the first item from the product list', function() {
  return PageFactory.getPage('Items').clickOnItem();
});

When('I save item name in world', async function() {
  this.itemAddedToCartName = await PageFactory.getPage('Items').getItemAddedToCartName();
});

When('I click on checkout button in the pop up window notified about item added to cart', function() {
  return PageFactory.getPage('Items').checkoutButton();
});

When('I sign in with wrong credentials', function() {
  return PageFactory.getPage('Signin').checkEmail('new_email@gmail.com');
});

When('I close sign in form', function() {
  return PageFactory.getPage('Signin').close();
});

When('I navigate to shopping cart', function() {
  return PageFactory.getPage('Home').Header.viewCart();
});

Then(/^cart banner should be '([^"]*)'$/, async function(banner) {
  const cartBanner = await PageFactory.getPage('Cart').getCartBannerText();
  expect(cartBanner).to.be.equal(banner);
});

Then('item added to the cart should be {string}', async function(item) {
   return expect(this.itemAddedToCartName).to.be.equal(item);
});

