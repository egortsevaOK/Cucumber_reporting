const Collection = require('../../utils/base_collection');
const Element = require('../../utils/base_element');
class Header {
  constructor() {
    this.navigationSections = new Collection('ul.horizontal-nav-list a.horizontal-nav-item');
    this.sectionsDropDown = new Element('.horizontal-dd');
    this.subSections = new Collection('.horizontal-dd ul.links a.link-item');
    this.cartButton = new Element('.sch-container .sch-cart-container');
    this.viewCartButton = new Element('.viewCartButton');
  };
  
  async selectCategory(category) {
    await this.navigationSections.mouseMoveByText(category);
    return this.sectionsDropDown.waitVisibilityOf(1000);
  };

  selectSubcategory(subcategory) {
    return this.subSections.clickElementByText(subcategory);
  };

  async viewCart() {
    await this.cartButton.mouseMove();
    return this.viewCartButton.click();
  };
};

module.exports = Header;
