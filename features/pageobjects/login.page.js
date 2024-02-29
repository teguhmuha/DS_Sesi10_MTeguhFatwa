const { $ } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  get fieldUsername() {
    return $("#user-name");
  }

  get fieldPassword() {
    return $("#password");
  }

  get buttonLogin() {
    return $("#login-button");
  }

  errorLockedOutUser = (message) => $(`//h3[text()="${dynamicMessage}"]`);

  async login(username, password) {
    await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
    await this.fieldUsername.setValue(username);
    await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
    await this.buttonLogin.click();
  }

  async validateLockedOutUserError(message) {
    await this.errorLockedOutUser.waitForDisplayed({ timeout: 2500 });
    await expect(this.errorLockedOutUser(message)).toBeDisplayed();
  }

  open() {
    return super.open("/");
  }
}

module.exports = new LoginPage();
