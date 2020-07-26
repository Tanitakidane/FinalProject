import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class Blogpost extends Component {

constructor(props)
{

    super(props);

  this.state={
    _id:"",
    image:"",
    body:"",
    user:"",
    title:"",
  }
}


componentDidMount()
{
  const authResult = new URLSearchParams(window.location.search); 
const id = authResult.get('id');

console.log("called");

 axios.post(`${process.env.REACT_APP_URL}/getPost`,{id:id}).then(data=>{
   console.log(data.data);

  this.setState({...data.data["post"]});

})

}
 


imageUrl=(path)=>{

  if(path.length>0)
  {
    console.log(path);

    if(path.includes("http"))
  
    {
     return path;
    }
   else{
    let path2= path.split("uploads")[1].replace(/\\/g, "/");
  
            console.log(process.env.REACT_APP_URL,path2);
    return `${process.env.REACT_APP_URL}/${path2}`
   }


  }

 


}

    render() {
        return (
            <div className="content">
            <div className="container cont_area">
              <div className="search_area">
                <div className="search">
                  <input type="text" placeholder="Search here..."/>
                  <button><i className="fa fa-search"></i></button>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-md-11">
                  <ul className="bread">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    
                  </ul>
                  <article className="recipe_area">
        <h2 className="recipe_title">{this.state.title}</h2>
                    <div className="blog_post_desc"><img src={this.imageUrl(this.state.image)} alt=""/>
        <p>{this.state.body}</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="social_bar_section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
