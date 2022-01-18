const BasePage = require('./base_pages/base_page');
const Collection = require('../utils/base_collection');
const Element = require('../utils/base_element');

class ItemsPage extends BasePage {
  constructor() {
    super();
    this.leftFilters = '.cio-search-filters';
    this.leftFilterItems = '.cio-search-filters .cio-search-facet-closed div.facet-header';
    this.sortingFilter = 'span.sorting-label';
    this.dropdown = 'ul.cio-search-sorting-options-list-inner';
    this.optionList = 'ul.cio-search-sorting-options-list-inner a';
    this.firstItem = 'a.cio-search-result:nth-child(1) button';
    this.firstItemDetails = 'a.cio-search-result:nth-child(1) span.cio-result-title';
    this.itemAddedToCart = '.notification-wrapper.shadow';
    this.checkCartButton = '[id="add-cart-msg"] .checkoutCartButton';
    this.sectionBanner = '.welcomeBannerText';
  };

  open() {
    return super.open(this.url);
  };

  async filterBy(parameter) {
    const leftFilters = new Element(this.leftFilters);
    const leftFilterItems = new Collection(this.leftFilterItems);
    await leftFilters.waitVisibilityOf(2000);
    return leftFilterItems.clickElementByText(parameter);
  };

  async sortBy(parameter){
    const sortingFilter = new Element(this.sortingFilter);
    await sortingFilter.check();
    const dropdown = new Element(this.dropdown);
    const optionList = new Collection(this.optionList);
    await dropdown.waitVisibilityOf(1000);
    return optionList.clickElementByText(parameter);
  };
  
  async clickOnItem(){
    const item = new Element(this.firstItem);
    await item.waitToBeClickable(1000);
    return item.click();
  };

  async checkoutButton() {
    const itemAddedToCart = new Element(this.itemAddedToCart);
    const checkoutButton = new Element(this.checkCartButton);
    await itemAddedToCart.waitVisibilityOf(2000);
    return checkoutButton.click();
  };

  getCartBannerText() {
    const sectionBanner = new Element(this.sectionBanner); 
    return sectionBanner.getText();
  };

  getItemAddedToCartName() {
    const firstItemDetails = new Element(this.firstItemDetails); 
    return firstItemDetails.getText();
  }

  sortedOptionIs() {
    const sortLabel = new Element(this.sortingFilter);
    return sortLabel.getText();
  };
};

module.exports = ItemsPage;
