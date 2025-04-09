/** @format */

import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private readonly baseUrl = 'https://www.saucedemo.com/';

  constructor(private page: Page) {}

  async gotoWebPage(): Promise<void> {
    await this.page.goto(this.baseUrl);
  }

  async assertUrlContains(path: string) {
    await expect(this.page).toHaveURL(path);
  }

  get firstNameInput(): Locator {
    return this.page.locator('#user-name');
  }

  async fillFirstName(name: string) {
    await this.firstNameInput.fill(name);
  }

  get passwordInput(): Locator {
    return this.page.locator('#password');
  }

  async fillPasswordInput(name: string) {
    await this.passwordInput.fill(name);
  }

  get clickButton() {
    return this.page.locator('#login-button');
  }

  async completedLoginization() {
    await this.clickButton.click();
  }


}
