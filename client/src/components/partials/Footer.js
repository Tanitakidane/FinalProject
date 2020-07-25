import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

export default class Footer extends Component {


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
   let path2= path.split("uploads")[1].replace(/\\/g, "/");
  
  
   return `${process.env.REACT_APP_URL}/${path2}`
  }
 
   
  
  
  }



    render() {
        return (
            <footer>
      <div  className="container">
        <div  className="row">
          <div  className="col-sm-12">
            <div  className="footer_item">
              <div  className="row">
                <div  className="col-lg-5 col-md-12"><Link  className="logo_footer" to="/"><img src="img/logo.png" width="220" alt="logo"/></Link>
                  <div  className="footer_about">
                    <p>“When we strive to become better than we are, everything around us becomes better too.”-Paulo Coelho
</p>
                    <p>"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you." - Ralph Waldo Emerson</p>
                  </div>
                </div>
               
                
              </div>
              <div  className="row">
                <div  className="col-sm-12">
                  <div  className="footer_cop">
                    <div  className="cop_left">
                      &copy; 2020
                      CurbsidePhilly. Created by&nbsp; <a to="#">Tanita Kidane</a>
                    </div>
                    <div  className="cop_right">
                      <nav>
                        <ul>
                          <li><Link to="/">Home  </Link></li>
                          <li><Link to="/recipe">Recipes </Link></li>
                         
                          <li><Link to="/blog">Blog</Link></li>
                          <li><Link to="/about">About us  </Link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        )
    }
}
