import React from "react";
import Details from "./Details";
import CoordiCss from "./coordinator.module.css";

function Coordinator(props)
{
   
    return (
        <div className={CoordiCss.coordinatorsdiv}>
        <h1 className={CoordiCss.coordinatorsHeading}>Mentors</h1>
            <div className={CoordiCss.coordinators}>
                <div className={CoordiCss.container}>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img className={CoordiCss.mainimage}  src={`/images/${props.img1}`} alt="coordinator1"/>

                </div>                
                <Details
            //  name={coordinators.coordinator[0].name
            name={props.name1}
            link1={props.link1}
            link2={props.link2}
            link3={props.link3}
            />
                </div>
                </div>
               
                <div className={CoordiCss.container}>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img2}`} className={CoordiCss.mainimage}  alt="coordinator2" />
                </div>
                
                <Details
                name={props.name2}
                link1={props.link4}
            link2={props.link5}
            link3={props.link6}
            //  name={coordinators.coordinator[1].name}
            />
            
                </div>
                </div>
                
        </div>
        </div>

    )
}

export default Coordinator;