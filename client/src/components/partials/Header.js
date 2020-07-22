import React, { Component } from 'react'
import { Link } from "react-router-dom";
import auth from "../authentication/auth";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Header extends Component {

constructor(props)
{
    super(props);
}

logout(event)
{

event.preventDefault();

localStorage.removeItem("token");
window.location.reload()

}


getAJoke(event)
{
event.preventDefault();

axios.post(`${process.env.REACT_APP_URL}/getaJoke`).then(data=>{
  toast(data.data["message"]);
 
})

}

    render() {
        return (
            <header>
            <div className="blur"></div>
            <div className="header_bar"><a className="logo" href="index.html"><img src="img/logo.png" width="220" alt="logo"/></a>
              <nav className="menu_area">
                <ul className="menu flex">
                  <li className="current"><span><Link to="/">Home</Link></span>
                   
                  </li>
                  <li><span> <Link to="/create">Categories</Link></span>

                  <div class="submenu">
                <ul>
                  <li><Link to="/blog?category=recipe">Recipes</Link></li>
                  <li><Link to="/blog?category=travel">Travel</Link></li>
                  <li><Link to="/blog?Category=technology">Technology</Link></li>
                 
                </ul>
              </div>
                  
                  </li>

                  { auth.isAuthenticated() ? <><li><span> <Link to="/create">Create</Link></span></li> <li><span> <Link onClick={this.logout} to="/logout">Logout</Link></span></li></> :<li><span> <Link to="/login">Login</Link></span></li>}
                
                   
                  
                  <li><span><span className="no_l"><Link to="/blog">Blog</Link></span></span>
                    
                  </li>
                  <li><span> <Link to="/about">About Us</Link></span></li>
                  <li><span> <Link to="/contact">Contact</Link></span></li>

                  <li><span> <Link to="/contact" onClick={this.getAJoke}>Joke OF The Day</Link></span></li>
                </ul>
              </nav>
            </div>

            <ToastContainer />
          </header>
        )
    }
}
