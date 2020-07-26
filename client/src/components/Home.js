import React, { Component } from 'react';
import {Link } from "react-router-dom";
import auth from "./authentication/auth";
import axios from "axios";

export default class Home extends Component {

constructor(props)
{

 super(props);

 this.state={
   recipes:[],
   recentpost:[]
 }


}


componentDidMount()
{


  axios.post(`${process.env.REACT_APP_URL}/getRecipes`).then(data=>{
   
   
    this.setState({...data.data});
    console.log(this.state);
 
})
}
 imageUrl=(path)=>{

  if(path.includes("http"))

  {
   return path;
  }
 else{
  let path2= path.split("uploads")[1].replace(/\\/g, "/");


  return `${process.env.REACT_APP_URL}/${path2}`
 }


}
 


    render() {
        return (
            <div  className="content" id="maincontent">
            <div  className="container cont_area">
              <div  className="search_area">
                <div  className="search">
                  <input type="text" placeholder="Search here..."/>
                  <button> <i  className="fa fa-search"></i></button>
                </div>
              </div>
              <section>       
                <div  className="row">
                  <div  className="col-sm">
                    <div  className="line">
                      <h2>Featured recipes</h2>
                    </div>
                  </div>
                </div>
                <div  className="rec_area">
                  <div  className="row">
                    

                    {this.state.recipes.map(ele=>(

<div  className="col-md-6 col-sm-6 col-lg-3" key={ele._id}>
<div  className="rec_item">
  <div  className="cat">
    <div  className="txt">Breakfast</div>
  </div>
  <div  className="img"><img  className="resize" src={this.imageUrl(ele.image)} alt="" /></div>
  <div  className="desc_info">
    <div  className="time"><i  className="fa fa-clock-o"></i>35 <span>Mins  </span></div>
    <div  className="people"><i  className="fa fa-users"></i>4<span>people    </span></div>
  </div>
                    <div  className="desc_area"><Link  className="title" to={"/blogpost?id="+ele._id}>{ele.title}</Link>
                    <div  className="desc dot">{ele.text?ele.text.substr(1,10):""}</div>
  </div>
</div>
</div>




                    ))}
                  
                  
                 
                  </div>
                </div>
              </section>
              <section>         
                <div  className="row">
                  <div  className="col-sm">
                    <div  className="line mt40">
                      <h2>Recent blog posts</h2>
                    </div>
                  </div>
                </div>
                <div  className="blog_posts_area blog_posts_area_3">
                  <div  className="row">
                   
                  {this.state.recentpost.map(ele=>(

<div  className="col-md-4"><Link  className="blog_post_area" to={"/blogpost?id="+ele._id}>
                        <div  className="blog_img"><img  className="resize" src={this.imageUrl(ele.image)} alt="" /></div>
                        <div  className="blog_desc">
                  <div  className="title">{ele.title}</div>
                          <div  className="desc dot">{ele.text?ele.text.substr(1,10):""}</div>
                        </div></Link></div>

                  ))}
                    
                  </div>
                </div>
              </section>
            </div>

            {!auth.isAuthenticated()?<section  className="become_author">
              <div  className="container">
                <div  className="row"> 
                  <div  className="col-md-12">
                    <div  className="become_item">
                      <h3  className="title">Do you want to become an author?</h3>
                      <div  className="desc">Blessed fly from creeping darkness years yielding green winged third man. Male be darkness, can't our one fourth set heaven which creepeth saw years gathered so their lesser you'll.</div><Link  className="btn btn-primary btn-white large" to="/signup">Become an Author Now             </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>:""}
            
           
           
           
            <div  className="social_bar_section">
              <div  className="container">
                <div  className="row">
                  <div  className="col-md-12">
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
