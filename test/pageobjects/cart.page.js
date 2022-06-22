class CartPage {
  get continueShoppingBtn() {
    return $('#continue-shopping');
  }
  get checkoutBtn() {
    return $('#checkout');
  }
  get cartListquantity() {
    return $('#cart_quantity');
  }
  get cartBage() {
    return $('.shopping_cart_badge');
  }

  // async checkoutSuccess() {
  //   await expect(this.cartBage).toExist();
  //   await this.checkoutBtn.click();
  // }
}

export default new CartPage();
