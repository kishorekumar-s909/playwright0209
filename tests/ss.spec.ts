import {test} from '@playwright/test';
test("alertlogin",async({page})=>{
    //await page.goto("https://www.google.com/")
    page.once("dialog",async(dialog)=>{
        const firstelement = dialog.message()
         if(firstelement==="User Name is Required"){
            dialog.accept()
         }
         
        

    })
    await page.goto("https://www.tnstc.in/OTRSOnline/")
    const element = page.locator("//button[@id='popup-close']")
    await element.click()
    const element1=page.locator("//a[@class='pl-lg-4 pr-0']")
    await element1.click()
    const element2 =page.locator("//button[@id='ValidateUser']")
    await element2.click()
    await page.waitForTimeout(5000)
    
    

   
})