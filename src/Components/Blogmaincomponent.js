import React from 'react'
import blogcss from "./Blogmaincomponent.module.css"
export default function Blogmaincomponent(props){
    return (
        <>
       
        <div className={blogcss.maincontainer}>
            <img className={blogcss.containerimage} src = {props.details.url}    alt="BLOG-IMG" />
            <p  className={blogcss.blogdate} >
            {props.details.date}  
            </p>
            <h2 className={blogcss.blogheading} >
        {props.details.heading}
            </h2>
            <p className={blogcss.blogsubheading}>
            {props.details.subheading}
            </p>
        </div>
     
        </>
    );
}