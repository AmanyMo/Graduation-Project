const puppeteer=require('puppeteer');

const product={"Name":'xx',"Price":0,"Currency":'$',"ImgSrc":'xx/xx/xx'};
async function fun(link){
    const browser=await puppeteer.launch({headless:true,defaultViewport:null});
    const page=await browser.newPage();

    await page.goto(link,{waitUntil:'load'});
    //name
    try{
        await page.waitForSelector('.css-euydo4',{visible:true})
        var name=await page.$eval('.css-euydo4',h=>h.textContent);
    }
    catch(error){
       console.log('error during getting ..name..');
    }
    //price
    try{
        await page.waitForSelector('.css-slwsq8',{visible:true});
        const arr=await page.$eval('.css-slwsq8',span=>span.firstChild.textContent.split('$'));
        var cur=arr[0];
        var price=arr[1];
    }
    catch(error){
       console.log('error during getting ..price..');
    }
    //img src
    try{
        await page.waitForSelector('.css-j3e40p',{visible:true});
        var imgsrc=await page.$eval('.css-j3e40p',img=>img.src);
    }
    catch(error){
       console.log('error during getting ..img..');
    }
    product.Name=name;
    product.Price=price;
    product.ImgSrc=imgsrc;

    console.log(product);
    await browser.close();
}
const URL='https://www.sephora.com/product/gloss-bomb-universal-lip-luminizer-P67988453';
fun('https://www.sephora.com/product/fable-and-mane-holiroots-trade-hair-treatment-oil-P456953?icid2=justarrivedhair_skugrid_ufe:p456953:product');
