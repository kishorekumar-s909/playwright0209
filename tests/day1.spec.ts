import { test } from '@playwright/test';
test ("starting" , async({page})=>{
    await page.goto("/t");
    await page.waitForTimeout(4000);
    await page.goBack();
    await page.reload();
    await page.goForward();
    const webElement =page.locator(".Sidebar_link__GW-fE ").nth(1)
    await webElement.click()
    await page.waitForTimeout(5000)



})