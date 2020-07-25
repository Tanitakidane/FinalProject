const cron = require('node-cron');
const puppeteer = require('puppeteer');
const cheerio=require("cheerio");
console.log("loaded");


    console.log('running a task every minute');
     
(async () => {

        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();
        await page.goto('https://philly.curbed.com/',{waitUntil: 'load', timeout: 0});
     

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

        try{

            await page.goto(links[i],{waitUntil: 'load', timeout: 0});

            let html=await page.evaluate(()=>document.body.innerHTML);
          
            const $=cheerio.load(html);
             let title=$(".c-page-title").text();

             console.log(title);

             console.log("----------------------------------------------");

            let image=$(".c-picture>source").attr("srcset");
            console.log(image.split(",")[0]);

            console.log("---------------------------------------");

            let text=$(".c-entry-content").text();
            console.log(text.replace(/\s+/g, " "));
        }

        catch (e)
        {
console.log(e);
        }
           
           



       }




       //console.log(links);

  
 
  })();
  