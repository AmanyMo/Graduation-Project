//console.log('hello');
const puppeteer = require('puppeteer');
// const $=require('cheerio')
// const cronJob=require('cron').CronJob;
// const nodemailer=require('nodemailer');
const product={
    'Name':'xxx',
    'Price':0,
    'Currency':'x',
    'ImgSrc':'x/xx/xx'
}

async function configurebrowser(link){
  
   const browser=await puppeteer.launch({headless:true,defaultViewport:null});
   const page=await browser.newPage();
   page.setDefaultNavigationTimeout(0);
   const url=link;
   await page.goto(url,{waitUntil: 'load'});
   //name
   try{
       await page.waitForSelector('#productTitle',{visible:true});
       var str=await page.$eval('#productTitle',span=>span.textContent);
       var name = str.replace(/\n|\r|\t/g,'');
      // console.log('name : ',name);
    }
    
    catch(error){
        console.log("  error    during    getting    name ..");
    }
    //price
    try{
        await page.waitForSelector('#priceblock_ourprice',{visible:true});
        var egp=await (await page.$eval('#priceblock_ourprice',span=>span.textContent))
        var arr=await (await page.$eval('#priceblock_ourprice',span=>span.textContent)).split('$');
        var cur='$';
        var price=parseFloat(arr[1]);
      
     //  console.log(`egp ${ egp } `,'*',arr+' price ',price);

     }
     
     catch(error){
         console.log("  error   during   getting   price ..");
     }
     //img
    try{
        
        await page.waitForSelector('#landingImage',{visible:true});
        var imgSrc=await page.$eval('#landingImage',img=>img.getAttribute('src'));
       
     }
     
     catch(error){
         console.log("  error   during   getting   image   source   ..");
     }
     product.Name=name;
     product.Price=price;
     product.Currency=cur;
     product.ImgSrc=imgSrc;
 await browser.close();
console.log(product);


}

const URL='https://www.amazon.com/Sony-Noise-Cancelling-Headphones-WH1000XM3/dp/B07G4MNFS1/';

configurebrowser('https://www.amazon.com/dp/B07PHY8JLL/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B07PHY8JLL&pd_rd_w=BPmN2&pf_rd_p=48d372c1-f7e1-4b8b-9d02-4bd86f5158c5&pd_rd_wg=JCeXR&pf_rd_r=Y4GDKHYWWHFYBCMV6ET8&pd_rd_r=4d06199b-75ca-4059-ad04-7d7bf2fd44f3&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExS1JNQTgyQThERVFSJmVuY3J5cHRlZElkPUEwMDYwODQwMzhGQlVONllYMkpUUCZlbmNyeXB0ZWRBZElkPUExMDQzNzQyT1IzSzBCN0tPS1JHJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==');
