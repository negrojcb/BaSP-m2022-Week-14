class CheckoutPage {
  get inputFirstName() {
    return $('#first-name');
  }
  get inputLastName() {
    return $('#last-name');
  }
  get inputZipCode() {
    return $('#postal-code');
  }
  get continueBtn() {
    return $('#continue');
  }
  get cancelBtn() {
    return $('#cancel');
  }
  get errorContainer() {
    return $('.error-message-container.error');
  }
  get xBtn() {
    return $('.error-button');
  }
  async setFirstName(firstname) {
    await this.inputFirstName.setValue(firstname);
  }
  async setLastName(lastname) {
    await this.inputLastName.setValue(lastname);
  }
  async setZipCode(zipcode) {
    await this.inputZipCode.setValue(zipcode);
  }

  async completePurchase(firstname, lastname, zipcode) {
    await this.setFirstName(firstname);
    await this.setLastName(lastname);
    await this.setZipCode(zipcode);
    await this.continueBtn.click();
  }
}

export default new CheckoutPage();
