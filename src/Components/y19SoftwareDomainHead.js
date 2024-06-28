import React from "react";
import Details from "./Details";
import CoordiCss from "./coordinator.module.css";


function SoftwareDivisonHead(props)
{
    return(
        <div>
           <h1 className={CoordiCss.coordinatorsHeading}>Software Division Head</h1>
            <div className={CoordiCss.coordinators}>
            <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img className={CoordiCss.mainimage} src={`/images/${props.img1}`} alt="softwareHead1"/>
                </div>
                
                <Details
             name={props.name1}
            />
                </div>
                
            </div>
        </div>
       
    )
}

export default SoftwareDivisonHead;