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


}
