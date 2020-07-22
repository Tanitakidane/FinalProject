import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component {

constructor(props)
{
  super(props);

  this.state={
    username:"",
    password:""
  }

  this.initialstate={...this.state};
  this.login=this.login.bind(this);
  this.onvalueChange=this.onvalueChange.bind(this);

}



login()
{

  if(this.state.username!=="" && this.password!=="")
{
  axios.post(`${process.env.REACT_APP_URL}/login`,this.state).then(data=>{
 

    if(data.data["token"])
    {
localStorage.setItem("token",data.data["token"]);
this.props.history.push('/');
window.location.reload();
    }
 toast(data.data["message"]);

  })
}

else{

  toast("All Fields Are Required");

}

 
}

onvalueChange(event)
{
  this.setState({...this.state ,[event.target.name]:event.target.value});
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
              <ToastContainer />
                <ul className="bread">
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <article className="page_area">
                  <h2 className="page_title">Login</h2>
                  <div className="page_desc"> 
                
      <div id="formContent">
      
      
          <input type="text" id="login" className="fadeIn second" name="username" onChange={this.onvalueChange} value={this.state.username} placeholder="login"/>
          <input type="password" id="password" className="fadeIn third" name="password" onChange={this.onvalueChange} value={this.state.password} placeholder="password"/>
         
                <button className="btn btn-success" onClick={this.login}>Login</button>
        <Link className="underlineHover" to="/signup">SignUp</Link>
    
    
       
    
      </div>
    
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
