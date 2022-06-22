import LoginPage from '../pageobjects/login.page';
import ProductPage from '../pageobjects/products.page';
import CartPage from '../pageobjects/cart.page';
import CheckoutPage from '../pageobjects/checkout.page';

describe('Standard user path testing', () => {
  beforeAll('Open browser', () => {
    browser.url('https://www.saucedemo.com/');
  });

  it('Bot image should be displayed', async () => {
    await expect(LoginPage.robotImg).toBeDisplayed();
  });

  it('Logo image should be displayed', async () => {
    await expect(LoginPage.logoImg).toBeDisplayed();
  });

  it('Empty username should display error', async () => {
    await LoginPage.login('', 'secret_sauce');
    await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
  });

  it('Page should be refreshed', async () => {
    await browser.refresh();
    await browser.pause(800);
  });

  it('Empty password should display error', async () => {
    await LoginPage.login('standard_user', '');
    await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required');
  });

  it('Invalid username should display error', async () => {
    await LoginPage.login('invalid', 'secret_sauce');
    await expect(LoginPage.errorContainer).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  it('Successful login', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
  });

  it('Load inventory item list', async () => {
    await expect(ProductPage.inventoryList).toBeDisplayed();
  });

  it('burgerMenu is display and clickable', async () => {
    await expect(ProductPage.menuBtn).toBeDisplayed();
    await expect(ProductPage.menuBtn).toBeClickable();
  });

  it('Add a product to cart', async () => {
    await expect(ProductPage.addtocartBtn).toBeClickable();
  });

  it('Product filter', async () => {
    await expect(ProductPage.productFilter).toBeDisplayed();
  });

  it('Page should be refreshed', async () => {
    await browser.refresh();
    await browser.pause(800);
  });

  it('Cart link button is displayed', async () => {
    await expect(ProductPage.cartLink).toBeDisplayed();
  });

  it('Cart link button is clickable', async () => {
    await expect(ProductPage.cartLink).toBeClickable();
  });

  it('Show sidebar', async () => {
    await ProductPage.ShowSidebar();
  });

  it('Page should be refreshed', async () => {
    await browser.refresh();
    await browser.pause(800);
  });

  it('Cart Page is loaded', async () => {
    await ProductPage.GoToCart();
    await expect(CartPage.checkoutBtn).toBeDisplayed();
    await expect(CartPage.continueShoppingBtn).toBeDisplayed();
    await CartPage.continueShoppingBtn.click();
  });

  it('Add and remove test', async () => {
    await ProductPage.AddToCart();
    await ProductPage.removeBtn.click();
  });

  it('Checkout process', async () => {
    await ProductPage.AddToCart();
    await ProductPage.GoToCart();
    await CartPage.checkoutBtn.click();
  });

  it('Complete purchase, empty first name field', async () => {
    await CheckoutPage.completePurchase('', 'landa', '3000');
    await expect(CheckoutPage.errorContainer).toHaveText('Error: First Name is required');
    await CheckoutPage.xBtn.click();
    await CheckoutPage.cancelBtn.click();
  });

  it('Complete purchase, empty last name field', async () => {
    await CartPage.checkoutBtn.click();
    await CheckoutPage.completePurchase('lalo', '', '3000');
    await expect(CheckoutPage.errorContainer).toHaveText('Error: Last Name is required');
    await CheckoutPage.xBtn.click();
    await CheckoutPage.cancelBtn.click();
  });

  it('Complete purchase, empty zip code field', async () => {
    await CartPage.checkoutBtn.click();
    await CheckoutPage.completePurchase('lalo', 'landa', '');
    await expect(CheckoutPage.errorContainer).toHaveText('Error: Postal Code is required');
    await CheckoutPage.xBtn.click();
    await CheckoutPage.cancelBtn.click();
  });

  it('Complete purchase', async () => {
    await CartPage.checkoutBtn.click();
    await CheckoutPage.completePurchase('juan', 'bonelli', '2900');
  });
});
