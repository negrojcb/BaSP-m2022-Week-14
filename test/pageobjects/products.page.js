class ProductPage {
  get menuBtn() {
    return $('#react-burger-menu-btn');
  }
  get cartLink() {
    return $('#shopping_cart_container');
  }
  get inventoryList() {
    return $('.inventory_list');
  }
  get productFilter() {
    return $('.product_sort_container');
  }
  get inventorySidebar() {
    return $('.bm-menu');
  }
  get closeSidebarBtn() {
    return $('#react-burger-cross-btn');
  }
  get productImg() {
    return $('.inventory_item_img');
  }
  get addtocartBtn() {
    return $('.btn');
  }
  get removeBtn() {
    return $('.btn_inventory');
  }
  get cartBage() {
    return $('.shopping_cart_badge');
  }
  get backToProductsBtn() {
    return $('#back-to-products');
  }
  async AddToCart() {
    await this.addtocartBtn.click();
    await expect(this.cartBage).toExist();
  }

  async ShowSidebar() {
    await this.menuBtn.click();
    await this.closeSidebarBtn.click();
  }

  async GoToCart() {
    await this.cartLink.click();
  }
}

export default new ProductPage();
