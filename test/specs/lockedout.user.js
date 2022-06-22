import LoginPage from '../pageobjects/login.page';

describe('Locked-out user test', () => {
  beforeAll('Open browser', () => {
    browser.url('https://www.saucedemo.com/');
  });

  it('Bot image should be displayed', async () => {
    await expect(LoginPage.robotImg).toBeDisplayed();
  });

  it('Logo image should be displayed', async () => {
    await expect(LoginPage.logoImg).toBeDisplayed();
  });

  it('Page should be refreshed', async () => {
    await browser.refresh();
    await browser.pause(800);
  });

  it('Locked-out user should display error', async () => {
    await LoginPage.login('locked_out_user', 'secret_sauce');
    await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  });
});
