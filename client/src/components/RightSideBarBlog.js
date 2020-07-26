import React, { Component } from 'react'
import {Link } from "react-router-dom";
import auth from "./authentication/auth";
import axios from "axios";


export default class RightSideBarBlog extends Component {


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

  if(path.length>0)
  {
    console.log(path);

    if(path.includes("http"))
  
    {
     return path;
    }
   else{
    let path2= path.split("uploads")[1].replace(/\\/g, "/");
  
    let mainpath=`${process.env.REACT_APP_URL}${path2}`
            console.log(mainpath);
    return `${process.env.REACT_APP_URL}${path2}`
   }


  }

 


}


    render() {
        return (
            <div className="col-xl-3 col-lg-4 col-md-12">
            <aside className="sidebar">
              <div className="side_rec_area">
                <div className="side_title">Best recipes of the month</div>

{this.state.recipes.map(ele=>(
    <div className="side_recipes"><Link className="side_item"to={"/blogpost?id="+ele._id}>
    <div className="img"><img className="resize" src={this.imageUrl(ele.image)} alt="" /></div>
<div className="title dot">{ele.title}</div></Link><a className="side_item" to={"/blogpost?id="+ele._id}>
    </a>
    
    </div>


))}

              
              </div>
            
            </aside>
          </div>
        )
    }
}
