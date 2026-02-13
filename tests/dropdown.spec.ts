import {test} from '@playwright/test';
test ('getmonth',async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")
    const alloptionelement =page.locator('#month option')
    const count =await alloptionelement.count()
    for(let i=0; i < count; i++){
        const actualtext = await alloptionelement.nth(i).textContent()
        console.log(actualtext);
        

    }

})