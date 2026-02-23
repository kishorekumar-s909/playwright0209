import {test} from '@playwright/test';
test("tables",async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
    const dropdown=page.locator("select")
    await  dropdown.selectOption({value:"HR"})
    const element =page.locator("//input[@placeholder='Search Name or Email']")
    await element.fill("jack")
    await page.waitForTimeout(3000)
    
    
})
test.only("userdata",async({page})=>{
      await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
      const data =await page.locator("table tbody tr td:nth-child(1)").allTextContents()
      data.sort()
      
      console.log(data)
      const sortbyid=page.locator("//button[@class='Webtable_buttonSort__MQ+dO']")
      await sortbyid.click()
      const data1 =await page.locator("table tbody tr td:nth-child(1)").allTextContents()
      console.log(data1);
      

      
      


})