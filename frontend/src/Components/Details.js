import React from "react";
import { FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import DetailsCss from "./details.module.css";





function Details(props)
{
    return (
       <div className={DetailsCss.detailsdiv}>
        
        <h1 className={DetailsCss.teamname}>{props.name}</h1>
        <div className={DetailsCss.icons}>
            <a href={props.link1} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} className={DetailsCss.iconStyle}/></a>
            <a href={props.link2} target="_blank" rel="noopener noreferrer"><FaInstagram size={20} className={DetailsCss.iconStyle}/></a>
           <a href={props.link3} target="_blank" rel="noopener noreferrer"><FiMail size={20} className={DetailsCss.iconStyle}/></a> 
        </div>
           
      
       </div>
    );
}

export default Details;