import {test} from '@playwright/test';
test ("errormess", async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")
    const firstName = page.locator("#bst_001")
    const getValue = await firstName.getAttribute('placeholder')
    console.log(getValue);
    const genderLast = page.locator("(//input[@name='gender'])[3]")
    
    await genderLast.click()
   
    
    await page.waitForTimeout(5000)

     
})
test.only ("form",async({page})=>{
await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")
const firstName=page.locator('#bst_001')
await firstName.fill("kishore")

const secondName=page.locator('#bst_002')
await secondName.fill("kumar")

const day=page.locator('#day')
await day.selectOption({index:3})
const month=page.locator('#month')
await month.selectOption({value:"10"})
const year=page.locator('#year')
await year.selectOption({label:"1998"})
const gender = page.locator("(//input[@name='gender'])[3]")
await gender.click()
const email = page.locator("#bst_004")
await email.fill("xyz@gmail.com")
const phonenumber  = page.locator("#bst_005")
await phonenumber.fill("1234567890")

const password = page.locator("#bst_006")
await password.fill("K@efrr456")

const button = page.locator("#bst_007")
await button.click()






  
})