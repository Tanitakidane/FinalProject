import React from 'react'
import {Link} from "react-router-dom";
export default function SinglePost({ posts, loading }) {



let imageUrl=(path)=>{

 let path2= path.split("uploads")[1].replace(/\\/g, "/");


 return `${process.env.REACT_APP_URL}/${path2}`


}

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
          <article className="recipes_list_item" key={post._id}>
          <div className="img"><img className="resize" src={imageUrl(post.image)} alt="" /></div>
          <div className="desc_area">
            <h3 className="title">{post.title}</h3>
            <div className="desc_info">
      <div className="by"><i className="fa fa-user"></i><span>by</span>{post.user}</div>
      <div className="time"><i className="fa fa-clock-o"></i><span>{post.date}</span></div>
            </div>
      <div className="desc">{post.body}</div>
            <div className="button"><Link className="btn btn-primary btn-black" to={"/blogpost?id="+post._id}>Read More</Link></div>
          </div>
        </article>
        
      ))}
    </ul>
  );
  
  
}
