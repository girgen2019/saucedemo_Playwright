/** @format */

import { Page, Locator, expect } from '@playwright/test';

export class Products {
  private readonly baseUrlProduct = 'https://www.saucedemo.com/inventory.html';

  constructor(private page: Page) {}

  async gotoWebPage(): Promise<void> {
    await this.page.goto(this.baseUrlProduct);
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.locator('#user-name').fill('standard_user');
    await this.page.locator('#password').fill('secret_sauce');
    await this.page.locator('#login-button').click();
  }

  async assertUrlContains(path: string) {
    await expect(this.page).toHaveURL(path);
  }


  get selectProduct(): Locator{
    return this.page.locator('.product_sort_container')
  }

  async selectProducts() {
    await this.selectProduct.click();
  } 

  get selectPrice(): Locator{
    return this.page.locator('.product_sort_container')
  }
  async selectPrices(){
    await this.selectPrice.selectOption('hilo')
  }

  get sortByPrice(): Locator{
    return this.page.locator('[data-test="inventory-item-price"]')

  }

  async sortByPrices(){
   const products = await this.sortByPrice.allTextContents()
   const numericPrices = products.map(price => parseFloat(price.replace('$', '')));
   return numericPrices[0]
  }

}
