const puppeteer=require('puppeteer');
const product={"Name":'xx',"Price":0,'Currenct':'x',"ImgSrc":'xx/xx/xx',};

async function fun(link){

    const browser=await puppeteer.launch({headless:true,defaultViewport:null});
    const page=await browser.newPage();
    await page.goto(link,{waitUntil:'load'});
    //name
    try{
       await page.waitForSelector('.base',{visible:true});
        var name=await page.$eval('.base',sp=>sp.textContent);
    }
    catch(error){
        console.log("error in name");
    }
// price
    try{
        await page.waitForSelector('.price',{visible:true});
        const arr=await page.$eval('.price',span=>span.textContent.split(' ')); 
        var cur=arr[0];   
        var price=parseFloat(arr[1]);
    }
    catch(error){
        console.log("..error during getting price.."); 
    }
//img src
    try{
        await page.waitForSelector('.fotorama__img',{visible:true});
        var imgsrc=await page.$eval(".fotorama__img",s=>s.src);
    }
    catch(error){
        console.log("error during getting img src");
        
    }
    product.Name=name;
    product.Price=price;
    product.Currenct=cur;
    product.ImgSrc=imgsrc;

  browser.close();
  console.log(product);
}
const URL='https://www.mazayastores.com/misslyn-eyebrow-lift-powder-brown-sugar.html';

fun(URL);