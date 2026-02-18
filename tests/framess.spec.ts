import {test} from'@playwright/test';
test ("frames",async({page})=>{
    await page.goto("https://playground.bsparksoftwaretechnologies.com/frames")
    const frame = page.frameLocator("#bst_frame2")
    const frame2 =frame.frameLocator("#bst_frame3")
    
    const getelement =frame2.getByPlaceholder("Your name here")
    await getelement.fill("xyz")
    const submitbutton = frame2.getByRole('button',{name:'submit'})
    await submitbutton.click()
    


})