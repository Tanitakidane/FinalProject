import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {Link} from "react-router-dom";
import axios, { post } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class CreateComponent extends Component {

constructor(props)
{
    super(props)
    this.state={

        title:"",
        text:"",
        image:"",
        category:"",


    }

    this.initialstate={...this.state};

    this.onFileChange=this.onFileChange.bind(this);
    this.onValueChange=this.onValueChange.bind(this);
    this.fileUpload=this.fileUpload.bind(this);
}


onValueChange(e)
{

    this.setState({...this.state,[e.target.name]:e.target.value})
    
}

onFileChange(e) {
    this.setState({image:e.target.files[0]})
  }

  fileUpload(file){
   

    if(this.state.title!=="" && this.state.image!="" && this.state.text!=="" && this.state.category!=="" )
    {
        const url=`${process.env.REACT_APP_URL}/createpost`
        const formData = new FormData();
        formData.append('file',this.state.image);
        formData.append('title',this.state.title);
        formData.append('category',this.state.category);
        formData.append('text',this.state.text);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization':localStorage.getItem("token")
            }
        }

        post(url, formData,config).then(data=>{
            toast(data.data["message"]);
            this.setState({...this.initialstate})
            
        })
    }

    else{
        toast("All Fields Are Required");
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
                    <li><Link to="/create">Create</Link></li>
                  </ul>
                  <article className="page_area">
                    <h2 className="page_title">Create Post</h2>
                    <div className="page_desc"> 
                              <div id="formContent">
                      
        <fieldset>
        
          <div className="control-group">
        
            <label className="control-label"  for="username">Title</label>
            <div className="controls">
              <input type="text" id="username" name="title" value={this.state.title} onChange={this.onValueChange}  placeholder="" className="input-xlarge"/>
             
            </div>
          </div>
       
          <div className="control-group">
          
            <label className="control-label" for="email">Category</label>
            <div className="controls">
            <select name="category" onChange={this.onValueChange} className="input-xlarge" id="cars">
  <option value="recipe">Recipe</option>
  <option value="technology">Technology</option>
  <option value="travel">Travel</option>
 
</select>
             
              
            </div>
          </div>
       
          <div className="control-group">
         
            <label className="control-label" for="password">Image</label>
            <div className="controls">
              <input type="file" placeholder=""  onChange={this.onFileChange} className="input-xlarge"/>
             
            </div>
          </div>
       
          <div className="control-group">
          
            <label className="control-label"  for="password_confirm">Text</label>
            <div className="controls">
            <textarea  cols="100" className="input-xlarge" onChange={this.onValueChange} name="text">
                {this.state.text}
</textarea>
             
            </div>
          </div>
       
          <div className="control-group">
          
            <div className="controls">
              <button className="btn btn-success" onClick={this.fileUpload} >Create Post</button>
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
