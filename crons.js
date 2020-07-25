const cron = require('node-cron');
const puppeteer = require('puppeteer');
console.log("loaded");


    console.log('running a task every minute');
     
(async () => {

        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();
        await page.goto('https://philly.curbed.com/');
     

        // getting the html of the whole page then with help of cheerio getting the links to evaluate

       let html=await page.evaluate(()=>document.body.innerHTML);

       const $=cheerio.load(html);
       let links=[];

       $(".c-compact-river__entry").each(function (i,ele){
        

            const onearticle=$(this).html();
           
            const $$=cheerio.load(onearticle);
            let link=$$(".c-entry-box--compact>a").attr("href");
             links.push(link);



       })
      

       for(let i=0;i<links.length;i++)
       {
            await page.goto(links[i]);

            let html=await page.evaluate(()=>document.body.innerHTML);
       



       }




       console.log(links);

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://philly.curbed.com/');
        await page.screenshot({path: 'example.png'});


        
    } catch (error) {
        console.log(error);
    }
 
  })();
  