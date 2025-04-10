/** @format */

import { test, chromium, expect } from '@playwright/test';
import { Products } from './Products';

test('Product Page/Search price/sort', async () => {
  let soucedemoProducts;

  const browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });

  const context = await browser.newContext();
  const page = await context.newPage();
  soucedemoProducts = new Products(page);

  await soucedemoProducts.gotoWebPage();
  await soucedemoProducts.assertUrlContains(
    'https://www.saucedemo.com/inventory.html'
  );
  await soucedemoProducts.selectProducts()
  await soucedemoProducts.selectPrices()
  expect(await soucedemoProducts.sortByPrices()).toEqual(49.99)
});
