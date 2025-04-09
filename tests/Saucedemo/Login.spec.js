/** @format */

import { test, chromium } from '@playwright/test';
import { LoginPage } from './LoginPage';

test('Login submit', async () => {
  
    let soucedemo;

    const browser = await chromium.launch({
      headless: false,
      slowMo: 1000,
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    soucedemo = new LoginPage(page);

    await soucedemo.gotoWebPage()
    await soucedemo.assertUrlContains('https://www.saucedemo.com/')
    await soucedemo.fillFirstName('standard_user')

  
});
