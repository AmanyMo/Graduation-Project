const puppeteer=require('puppeteer');
const product={"Name":'xx',"Price":0,'Currency':'EGP',"ImgSrc":'xx/xx/xx'};

async function fun(link){

    const browser=await puppeteer.launch({headless:true,defaultViewport:null});
    const page=await browser.newPage();
    //to read arabic character
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'eg'});
////////////
    await page.goto(link,{waitUntil:'load'});
    //name
    try{
       await page.waitForSelector('.brkword',{visible:true});
        var str=await page.$eval('.brkword',h=>h.textContent);
        var name = str.replace(/\n|\r|\t/g, "");
    }
    catch(error){
        console.log("error in name");
    }
// price
    try{
        await page.waitForSelector('.xxxx-large',{visible:true});
        const arr=await page.$eval('.xxxx-large',span=>span.textContent.split(' '));  
        var cur=arr[1];  
        var price=arr[0];
    }
    catch(error){
        console.log("..error during getting price.."); 
    }
//img src
    try{
        await page.waitForSelector('.bigImage',{visible:true});
        var imgsrc=await page.$eval(".bigImage",s=>s.src);
    }
    catch(error){
        console.log("error during getting img src");
        
    }
    product.Name=name;
    product.Price=price;
    product.Currency=cur;
    product.ImgSrc=imgsrc;
    await browser.close();
    console.log(product);
    
}
const URL='https://www.olx.com.eg/ad/-IDb6IzB.html';

fun('https://www.olx.com.eg/ad/-IDaseFt.html');
