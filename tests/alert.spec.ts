import {test} from '@playwright/test';
test ("alerts",async({page})=>{
    page.once("dialog",async(dialog)=>{
        const text =dialog.message()
        if(text==="PRESS A BUTTON!"){

            dialog.dismiss()
        } else if (text==="PLEASE ENTER YOUR NAME")
            {
            dialog.accept("kishore")
            }

            
       
    })
    await page.goto("https://playground.bsparksoftwaretechnologies.com/alert");
    const elementselect = page.locator("//button[text()='HIT ME']").nth(2)
    await elementselect.click()




})