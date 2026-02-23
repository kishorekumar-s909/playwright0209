import {test , chromium} from '@playwright/test';
test("window",async()=>{
    const browser = await  chromium.launch()
    const context =await browser.newContext()
    const page =await context.newPage()
    const page1 =await context.newPage()
    await page.goto("https://www.facebook.com/")
    await page1.goto("https://www.google.com/")
    await page.waitForTimeout(3000)

})
test.only("childwindow",async()=>{
     const browser = await  chromium.launch()
    const context =await browser.newContext()
    const page =await context.newPage()
    await page.goto("https://playground.bsparksoftwaretechnologies.com/windowhandle")
    const ele=page.locator("#bst_btn4")
    const childwindow=context.waitForEvent("page")
    await ele.click()
   // const page1 =await childwindow
    

})