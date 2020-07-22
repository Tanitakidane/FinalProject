import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
            <div className="content">
            <div className="container cont_area">
              <div className="search_area">
                <div className="search">
                 
                  <button><i className="fa fa-search"></i></button>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-md-11">
                  <ul className="bread">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                  <article className="page_area">
                    <h2 className="page_title">Contact Us</h2>
                    <div className="page_desc"> 
                    <p style={{marginLeft:"200px"}}><img src="img/contact.png"/></p>
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
