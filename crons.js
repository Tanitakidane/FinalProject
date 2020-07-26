const cron = require('node-cron');
const puppeteer = require('puppeteer');
const cheerio=require("cheerio");
const Post=require("./models/post");
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://logan:logan123@cluster0-xtevk.mongodb.net/googlebooks?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  })
  .then(() => {
  console.log("Mongodb Connected");
  }).catch(err => console.log("Mongoose Connection Error",err));


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

            /// console.log(title);

             //console.log("----------------------------------------------");

            let image=$(".c-picture>source").attr("srcset");
     
        let _image=image.split(",")[0];

        var urlRegex = /(https?:\/\/[^ ]*)/;
var mainimage =_image.match(urlRegex)[1];
console.log(mainimage);
            //console.log("---------------------------------------");

            let text=$(".c-entry-content").text();
     console.log(text.replace(/\s+/g, " "));

const newpost=new  Post({

    title:title,
    body:text.replace(/\s+/g, " "),
    image:mainimage,
    category:"travel",
    user:"Tanita"





})

await newpost.save();


        }

        catch (e)
        {
console.log(e);
        }
           
           



       }




       //console.log(links);

  
 
  })();
  