const express=require("express");
//const crons=require("./crons"); // Just loading the cron task file
const mongoose=require("mongoose");
const axios=require("axios");
const User=require("./models/user");
const Post =require("./models/post");
var path = require('path');
const FormData = require('form-data');
const fetch = require('node-fetch');
const jwt =require('jsonwebtoken');

var giveMeAJoke = require('give-me-a-joke');

const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });

const app=express();


app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));

const cors = require('cors');
app.use(cors());
mongoose.connect("mongodb+srv://logan:logan123@cluster0-xtevk.mongodb.net/googlebooks?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  })
  .then(() => {
  console.log("Mongodb Connected");
  }).catch(err => console.log("Mongoose Connection Error",err));

console.log("node env",process.env.NODE_ENV);
  if(process.env.NODE_ENV==="production")
  {
      
   
    app.use("/api",express.static('client/build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

  }


// login routes


app.post("/api/login",async(req,res)=>{
  
   

   let _user=await User.findOne({username:req.body.username});

   if(_user)
   {
       if(_user.password!==req.body.password)
       {
        res.status(401).json({message:"Please Enter Correct Password"})
       }

       else{
           let token=jwt.sign({user:req.body.username},"logan",{expiresIn:"15m"});
           res.status(200).json({message:"Success",token:token})
       }

   }

   else{
       res.status(401).json({message:"Username Not Found"})
   }



})


app.post("/api/signup",async(req,res)=>{
 
let _user=await User.findOne({username:req.body.username});

if(_user)
{
    res.json({message:"Username Already Taken"});
}

else{

    let user=new User({...req.body});

await user.save();

res.json({message:"SuccesFully Registered Please Login To Post Content"});


}




})


app.post("/api/createpost",multipartMiddleware,async(req,res)=>{

    // invalid token - synchronous
try {
    var decoded = jwt.verify(req.headers["authorization"],"logan");

const post =new Post({
    title:req.body.title,
    body:req.body.text,
    image:req.files.file.path,
    category:req.body.category,
    user:decoded.user,

})




await post.save();
res.json({message:"Post Saved SuccessFully"})
    
  } catch(err) {
      console.log(err);
   res.json({message:"Internal Server Error"})
  }
  



})







//get All posts


app.post("/api/getAllPosts",async(req,res)=>{


try {
    
let posts=await Post.find({});

res.json({posts:posts});


} catch (error) {

    res.json({error:error});
    
}
    




})





app.post("/api/getCategoryPosts",async(req,res)=>{
    console.log(req.body);


    try {
        
    let posts=await Post.find({category:req.body.category});
    
    res.json({posts:posts});
    
    
    } catch (error) {
        console.log(error);
        
    }
        
    
    
    
    
    })
    
    


app.post("/api/getPost",async(req,res)=>{
  


    try {
        
    let post=await Post.findOne({_id:req.body.id});
    
    res.json({post:post});
    
    
    } catch (error) {
        
    }
        
    
    
    
    
    })
    
    
//get recipes



app.post("/api/getRecipes",async(req,res)=>{


    let recipepost=await Post.find({category:"recipe"}).limit(5);;

    let recent=await Post.find({}).sort({'date': -1})
    .limit(3);

    res.json({recipes:recipepost,recentpost:recent});

})




app.post("/api/getaJoke",(req,res)=>{


const categories=["blonde", "knock-knock", "animal", "jod"];
const randomElement = categories[Math.floor(Math.random() * categories.length)];

giveMeAJoke.getRandomJokeOfTheDay (randomElement, function(joke) {
    
    res.json({message:joke});
});

})


let port=process.env.PORT || 4000;

app.listen(port,()=>{

    console.log("App listening at port",port);
})