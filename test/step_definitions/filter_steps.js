const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const PageFactory = require('../pages/pageFactory');
setDefaultTimeout(60000);

When('I open shop.scholastic.com', function() {
  return PageFactory.getPage('Home').open();
});

When('I hover over {string}', function(category) {
  return PageFactory.getPage('Home').Header.selectCategory(category.toUpperCase());
});

When('I click on {string}', function(subcategory) {
  return PageFactory.getPage('Home').Header.selectSubcategory(subcategory);
});

Then(/^page banner should be '([^"]*)'$/, async function(subcategory) {
  const cartBanner = await PageFactory.getPage('Items').getCartBannerText();
  expect(cartBanner).to.be.equal(subcategory);
});

When('I sort items by {string}', function(sortOption) {
    return PageFactory.getPage('Items').sortBy(sortOption);
});

Then(/^items should be sorted by '([^"]*)'$/, async function(sortOption) {
  const selectedOption = await PageFactory.getPage('Items').sortedOptionIs();
  expect(selectedOption).to.be.equal(sortOption.toUpperCase());
});

