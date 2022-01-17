const BasePage = require('./base_pages/base_page');
const Collection = require('../utils/base_collection');
const Element = require('../utils/base_element');

class ItemsPage extends BasePage {
  constructor() {
    super();
  };

  open() {
    return super.open(this.url);
  };

  async filterBy(parameter) {
    const leftFilters = new Element('.cio-search-filters');
    const leftFilterItems = new Collection('.cio-search-filters .cio-search-facet-closed div.facet-header');
    await leftFilters.waitVisibilityOf(2000);
    return leftFilterItems.clickElementByText(parameter);
  };

  async checkOption() {
    await this.gradeTwelve.check();
    return this.gradeTwelve.waitToBeSelected();
  };

  async sortBy(parameter){
    const sortingFilter = new Element('span.sorting-label');
    await sortingFilter.check();
    const dropdown = new Element('ul.cio-search-sorting-options-list-inner');
    const optionList = new Collection('ul.cio-search-sorting-options-list-inner a');
    await dropdown.waitVisibilityOf(1000);
    return optionList.clickElementByText(parameter);
  };
  
  async clickOnItem(){
    const item = new Element('a.cio-search-result:nth-child(1) button');
    await item.waitToBeClickable(1000);
    return item.click();
  };

  async checkoutButton() {
    const itemAddedToCart = new Element('.notification-wrapper.shadow');
    const checkoutButton = new Element('[id="add-cart-msg"] .checkoutCartButton');
    await itemAddedToCart.waitVisibilityOf(2000);
    return checkoutButton.click();
  };

  getCartBannerText() {
    const sectionBanner = new Element('.welcomeBannerText'); 
    return sectionBanner.getText();
  };

  sortedOptionIs() {
    const sortLabel = new Element('span.sorting-label');
    return sortLabel.getText();
  };
};

module.exports = ItemsPage;
