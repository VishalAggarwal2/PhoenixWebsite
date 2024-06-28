import React from "react";
import Appcss from '../App.module.css';
import Rightmainpage from './Rightmainpage';
import Leftmainpage from './Leftmainpage';
export default function mainpage(){
    return (
    <div className={Appcss.main}>
    <Leftmainpage/>
    <Rightmainpage/>

    </div>
    
        
    );
}