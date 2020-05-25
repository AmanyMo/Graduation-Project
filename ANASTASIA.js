const puppeteer=require('puppeteer');
const product={"Name":'xx',"Price":0,'Currency':'x',"ImgSrc":'xx/xx/xx'};

async function fun(link){

    const browser=await puppeteer.launch({headless:true,defaultViewport:null});
    const page=await browser.newPage();
    await page.goto(link,{waitUntil: 'domcontentloaded'});
    //name
    try{
       await page.waitForSelector('.prod-name-wrap',{visible:true});
        const str=await page.$eval('.prod-name-wrap',sp=>sp.textContent);
        var name = str.replace(/\n|\r|\t/g, "");
      // console.log('name : ',name);

    }
    catch(error){
        console.log("anastasia  error in name");
    }
// price
    try{
        await page.waitForSelector('.price-sales',{visible:true});
        const strprice=await page.$eval('.price-sales',span=>span.textContent.replace(/\n|\t|\r/gm,''));   
        const arr=strprice.split(' ');
        var cur=arr[4];
        //in text content of price-sales there is a space so price may be not second element in array 
        var price=parseFloat(arr[5]);
       //console.log('  ***  ',price);

    }
    catch(error){
        console.log("anastasia..error during getting price.."); 
    }
//img src
    try{
        await page.waitForSelector('.primary-image',{visible:true});
        var imgsrc=await page.$eval(".primary-image",img=>img.getAttribute('srcset'));
        //console.log(imgsrc);
    }
    catch(error){
        console.log(" anastasia error during getting img src");
        
    }
    product.Name=name;
    product.Price=price;
    product.Currency=cur;
    product.ImgSrc=imgsrc;
    //console.log('dsdsf0');
 await browser.close();

    console.log(product);


}
const URL='https://www.anastasiabeverlyhills.com/lash-brag-volumizing-mascara/ABH01-14081.html';

fun('https://www.anastasiabeverlyhills.com/brush-18/ABH01-28015.html?cgid=brushes-face');