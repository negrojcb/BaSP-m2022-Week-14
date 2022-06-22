class OverviewPage {
  get paymentinfo() {
    return $('#checkout_summary_container > div > div.summary_info > div:nth-child(2)');
  }
  get shipInfo() {
    return $('#checkout_summary_container > div > div.summary_info > div:nth-child(4)');
  }
  get() {
    return $('');
  }
  get() {
    return $('');
  }
  get FinishBtn() {
    return $('#finish');
  }
  get cancelBtn() {
    return $('#cancel');
  }
}

export default new OverviewPage();
