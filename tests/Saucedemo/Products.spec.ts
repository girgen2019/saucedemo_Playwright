/** @format */

import { test, chromium } from '@playwright/test';
import { Products } from './Products';
import { LoginPage } from './LoginPage';


test('Product Page/Search price/sort', async () => {
  
    let soucedemoProducts;

    const browser = await chromium.launch({
      headless: false,
      slowMo: 1000,
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    soucedemoProducts = new Products(page);

    await soucedemoProducts.gotoWebPage()
    await soucedemoProducts.assertUrlContains('https://www.saucedemo.com/inventory.html')
    
});
