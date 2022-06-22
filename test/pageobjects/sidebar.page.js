class SideBarPage {
  get sideBar() {
    return $('.bm-menu');
  }
  get asideXbtn() {
    return $('#react-burger-cross-btn');
  }
  get allItems() {
    return $('#inventory_sidebar_link');
  }
  get about() {
    return $('#about_sidebar_link');
  }
  get logOut() {
    return $('#logout_sidebar_link');
  }
  get resetApp() {
    return $('#reset_sidebar_link');
  }
}

export default new SideBarPage();
