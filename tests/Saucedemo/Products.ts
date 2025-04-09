/** @format */

import { Page, Locator, expect } from '@playwright/test';

export class Products {
  private readonly baseUrlProduct = 'https://www.saucedemo.com/inventory.html';

  constructor(private page: Page) {}

  async gotoWebPage(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.locator('#user-name').fill('standard_user');
    await this.page.locator('#password').fill('secret_sauce');
    await this.page.locator('#login-button').click();
    await this.page.goto(this.baseUrlProduct);
  }

  async assertUrlContains(path: string) {
    await expect(this.page).toHaveURL(path);
  }
}
