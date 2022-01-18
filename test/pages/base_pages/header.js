const Collection = require('../../utils/base_collection');
const Element = require('../../utils/base_element');
class Header {
  constructor() {
    this.navigationSections = 'ul.horizontal-nav-list a.horizontal-nav-item';
    this.sectionsDropDown = '.horizontal-dd';
    this.subSections = '.horizontal-dd ul.links a.link-item';
    this.cartButton = '.sch-container .sch-cart-container';
    this.viewCartButton = '.viewCartButton';
  };
  
  async selectCategory(category) {
    const navigationSections = new Collection(this.navigationSections);
    const sectionsDropDown = new Element(this.sectionsDropDown);
    await navigationSections.mouseMoveByText(category);
    return sectionsDropDown.waitVisibilityOf(1000);
  };

  selectSubcategory(subcategory) {
    const subSections = new Collection(this.subSections);
    return subSections.clickElementByText(subcategory);
  };

  async viewCart() {
    const cartButton = new Element(this.cartButton );
    const viewCartButton = new Element(this.viewCartButton);
    await cartButton.mouseMove();
    return viewCartButton.click();
  };
};

module.exports = Header;
