import React,{useState,useEffect} from 'react'
import SinglePost from './SinglePost'
import Pagination from './Pagination'
import RightSideBarBlog from './RightSideBarBlog'
import axios from "axios";

export default function Blog() {


    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const authResult = new URLSearchParams(window.location.search); 
        const id = authResult.get('category');
  
    useEffect(() => {
      const fetchPosts = async () => {
        
        
        setLoading(true);
      let res
        if(id)
        {
          res = await axios.post(`${process.env.REACT_APP_URL}/getCategoryPosts`,{category:id});
        }
        else{
          res = await axios.get(`${process.env.REACT_APP_URL}/getAllPosts`);

        }
       
        console.log(res.data["posts"])
        setPosts(res.data["posts"]);
        setLoading(false);
      };
  
      fetchPosts();
    }, [id]);


 // Get current posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

 // Change page
 const paginate = (event,pageNumber) => 
 
 {
     event.preventDefault();
     setCurrentPage(pageNumber);

 }

    return (
        <div className="content">
      <div className="container cont_area">
        <div className="search_area">
          <div className="search">
            <input type="text" placeholder="Search here..."/>
            <button><i className="fa fa-search"></i></button>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="recipes_list_area blog_2">
                  
                 <SinglePost posts={currentPosts} loading={loading}/>
                 
                </div>
              </div>
            </div>
           <Pagination 
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
           
           />
          </div>
        <RightSideBarBlog/>
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
