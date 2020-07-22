import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Signup extends Component {

constructor(props)
{
super(props);


this.state={
   username:"",
   email:"",
   password:"",
   repeatpassword:""

}


this.initialState = { ...this.state } 
this.onChangeValue=this.onChangeValue.bind(this);
this.register=this.register.bind(this);
}



onChangeValue(event)
{

    this.setState({
        ...this.state,
        [event.target.name]:event.target.value
    })

}


// calling the api at backend

register()
{

    if(this.state.email==="" || this.username==="" || this.password==="" || this.repeatpassword===""  )
    {

        toast("All Fields Are Required");
    }
    else{



    if(this.state.password!==this.state.repeatpassword)
    {

        toast("Password And Repeat Password  Should Match");

    }

    else{

        axios.post(`${process.env.REACT_APP_URL}/signup`,this.state).then(data=>{
            toast(data.data["message"]);
            this.setState({...this.initialState});
            this.props.history.push('/login');
        })

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
              <ToastContainer />
                <div className="col-md-11">
                  <ul className="bread">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">Register</Link></li>
                  </ul>
                  <article className="page_area">
                    <h2 className="page_title">Register</h2>
                    <div className="page_desc"> 
                              <div id="formContent">
                      
        <fieldset>
        
          <div className="control-group">
        
            <label className="control-label"  for="username">Username</label>
            <div className="controls">
              <input type="text" id="username" name="username"  value={this.state.username} onChange={this.onChangeValue} placeholder="" className="input-xlarge"/>
             
            </div>
          </div>
       
          <div className="control-group">
          
            <label className="control-label" for="email">E-mail</label>
            <div className="controls">
              <input type="text" id="email" name="email" placeholder=""  value={this.state.email} onChange={this.onChangeValue} className="input-xlarge"/>
              
            </div>
          </div>
       
          <div className="control-group">
         
            <label className="control-label" for="password">Password</label>
            <div className="controls">
              <input type="password" id="password" name="password" placeholder="" value={this.state.password} onChange={this.onChangeValue} className="input-xlarge"/>
             
            </div>
          </div>
       
          <div className="control-group">
          
            <label className="control-label"  for="password_confirm">Password (Confirm)</label>
            <div className="controls">
              <input type="password" id="password_confirm" name="repeatpassword"  value={this.state.repeatpassword} onChange={this.onChangeValue} placeholder="" className="input-xlarge"/>
             
            </div>
          </div>
       
          <div className="control-group">
          
            <div className="controls">
              <button className="btn btn-success" onClick={this.register}>Register</button>
            </div>
          </div>
        </fieldset>
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
