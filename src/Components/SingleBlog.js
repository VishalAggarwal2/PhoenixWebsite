import React from 'react'
import SBlogCSS from "./SingleBlog.module.css"
import { useParams } from 'react-router-dom'
import Blogdata from "./Blogdata";
import TopBlogdata from "./TopBlogdata"
import {IoMdArrowRoundBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom';

const SingleBlog = () => {
    let navigate = useNavigate();
    let {blogID} = useParams();
    let isTopBlog = false;
    if(blogID==="0"){
        isTopBlog = true;
    }
  return (
    <div className={SBlogCSS.main}>
        <div className={SBlogCSS.imageDiv}>
            <div onClick={()=>{navigate("/blogs")}}><IoMdArrowRoundBack size={18} className={SBlogCSS.iconStyle}/></div>
            <img className={SBlogCSS.mainImage} src={isTopBlog?TopBlogdata[0].url:Blogdata[blogID-1].url} alt=""></img>
        </div>
        
        <p className={SBlogCSS.date}>{isTopBlog?TopBlogdata[0].date:Blogdata[blogID-1].date}</p>
        <p className={SBlogCSS.heading}>{isTopBlog?TopBlogdata[0].heading:Blogdata[blogID-1].heading}</p>
        <p className={SBlogCSS.subheading}>{isTopBlog?TopBlogdata[0].subheading:Blogdata[blogID-1].subheading}</p>
    </div>
  )
}

// <p>{isTopBlog?TopBlogdata[0].heading:Blogdata[blogID-1].heading}</p>
// <p>{isTopBlog?TopBlogdata[0].subheading:Blogdata[blogID-1].subheading}</p> 

export default SingleBlog