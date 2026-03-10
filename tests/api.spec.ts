import {test,request} from '@playwright/test';

test ("apigetdata",async({request})=>{
    const getvalue = await request.get ("https://api.bsparksoftwaretechnologies.com/api/users")
    console.log(getvalue.status());
     console.log(getvalue.statusText());
     let valuebody=await getvalue.json()
      //console.log(valuebody[2])
       console.log(valuebody.length)
       for(let i=0;i<valuebody.length;i++){
        console.log(valuebody[i].name)

       }
    

})