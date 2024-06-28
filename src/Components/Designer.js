import React from "react";
import Details from "./Details";
import CoordiCss from "./coordinator.module.css";


function SoftwareDivisonHead(props)
{
    return(
        <div>
           <h1 className={CoordiCss.coordinatorsHeading}>Designer</h1>
            <div className={CoordiCss.coordinators}>
            <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img className={CoordiCss.mainimage} src={`/images/${props.img1}`} alt="softwareHead1"/>
                </div>
                
                <Details
             name={props.name1}
             link1={props.link1}
             link2={props.link2}
             link3={props.link3}
             link4={props.link4}
            />
                </div>
                
            </div>
        </div>
       
    )
}

export default SoftwareDivisonHead;