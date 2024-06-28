import React from 'react'
import leftmainpage from './leftmainpage.module.css';
export default function Leftmainpage(){
  function handleScroll1() {
    window.scroll({
      top: 500,
      left: 0, 
      behavior: 'smooth',
    });
  }
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
return (

 
<div className={ leftmainpage.leftcontainer}>
   <div className={ leftmainpage.firsttext}>
    <h2 className={ leftmainpage.firsttext1}><span className={ leftmainpage.firsttext1a}>R</span>OBOTICS </h2>
    <h2  className={ leftmainpage.firsttext2}><span className={ leftmainpage.firsttext1a}>C</span>LUB</h2>
   </div>
     <div className={ leftmainpage.textalign}>
    <h1 className={ leftmainpage.nametext} >Phoenix</h1>
     <p className={ leftmainpage.tagline}>Be a part of the <span className={ leftmainpage.tobold}>evergrowing</span> plethora of  <span className={ leftmainpage.tobold}>events</span> and <span className={ leftmainpage.tobold}>projects</span></p>
     </div>
     <div className={ leftmainpage.homepage_button}>
      <button className={ leftmainpage.homepage_button1}onClick = {handleScroll1}  >Know More</button>
      <button className={ leftmainpage.homepage_button2} onClick = {handleScroll} >Collaborate</button>
     </div>
</div>


);

}