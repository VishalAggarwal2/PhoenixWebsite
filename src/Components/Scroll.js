import React from 'react'
import { useScrollBy } from 'react-use-window-scroll';
import Appcss from '../App.module.css';
export default function Scroll(){
    const scrollBy = useScrollBy();
    
return (
<>
<div className={Appcss.box} onClick={() => scrollBy(800, 0)  } >
		<span></span>
		<span></span>
		<span></span>
	  </div>
  
</>
);

}
