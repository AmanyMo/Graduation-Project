const puppeteer=require('puppeteer');

const product={"Name":'xx',"Price":0,'Currency':'$',"ImgSrc":'xx/xx/xx'};
async function fun(link){
    const browser=await puppeteer.launch({headless:true,defaultViewport:null});
    const page=await browser.newPage();

    await page.goto(link,{waitUntil:'domcontentloaded'});
    //name
    try{
        await page.waitForSelector('.product-name',{visible:true})
        var name=await page.$eval('.product-name',h=>h.textContent);
    }
    catch(error){
       console.log(' huda error during getting ..name..');
    }
    //price
    try{
        await page.waitForSelector('.value',{visible:true});
        var strprice=await page.$eval('.value',span=>span.getAttribute('content'));
        var arr=await page.$eval('.value',span=>span.textContent.split(' '));
        // var cur=arr[0];
        // console.log('aray ',arr);
        var price=parseFloat(strprice);
    }
    catch(error){
       console.log(' huda error during getting ..price..');
    }
    //img src
    try{
        await page.waitForSelector('.mz-figure',{visible:true});
        var imgsrc=await page.$eval('.mz-figure',fig=>fig.firstChild.src);
        // console.log(imgsrc);
    }
    catch(error){
       console.log(' huda error during getting ..img..');
    }
    product.Name=name;
    product.Price=price;
    //product.Currency=cur;
    product.ImgSrc=imgsrc;
  await browser.close();
  console.log(product);
}
const URL='https://hudabeauty.com/us/en_US/shop/mercury-retrograde-eyeshadow-palette-HB00314.html';
fun('https://hudabeauty.com/en_BJ/shop/mercury-retrograde-eyeshadow-palette-HB00314.html?changeCountry=true');
