import React from "react";
import CoordiCss from "./coordinator.module.css";
import Details from "./Details";


function HardwareDivisonHead(props)
{
    return(
        <div>
        <h1 className={CoordiCss.coordinatorsHeading}>Hardware Division Heads</h1>
            <div className={CoordiCss.coordinators}>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img className={CoordiCss.mainimage} src={`/images/${props.img1}`} alt="hardwareHead1"/>
                </div>
                
                <Details
             name={props.name1}
             link1={props.link1}
            link2={props.link2}
            link3={props.link3}
            />
                </div>

                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img className={CoordiCss.mainimage} src={`/images/${props.img2}`} alt="hardwareHead2"/>
                </div>
                
                <Details
             name={props.name2}
             link1={props.link4}
            link2={props.link5}
            link3={props.link6}
            />
                </div>
        </div>
        </div>
    )
}

export default HardwareDivisonHead;