import React from "react";
import CoordiCss from "./coordinator.module.css";
import Details from "./Details";


function coreTeamMembers(props) {
    return (
        <div>

            <h1 className={CoordiCss.coordinatorsHeading}>Core Team Members</h1>
                <div className={CoordiCss.coordinators}>
                    <div className={CoordiCss.imageDiv}>
                        <div className={CoordiCss.images}>
                            <img className={CoordiCss.mainimage} src={`/images/${props.img1}`} alt="Head1" />
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
                            <img className={CoordiCss.mainimage} src={`/images/${props.img2}`} alt="Head2" />
                        </div>

                        <Details
                            name={props.name2}
                            link1={props.link4}
                            link2={props.link5}
                            link3={props.link6}
                        />
                    </div>
                    <div className={CoordiCss.imageDiv}>
                        <div className={CoordiCss.images}>
                            <img className={CoordiCss.mainimage} src={`/images/${props.img3}`} alt="Head2" />
                        </div>

                        <Details
                            name={props.name3}
                            link1={props.link7}
                            link2={props.link8}
                            link3={props.link9}
                        />
                    </div>
                    <div className={CoordiCss.imageDiv}>
                        <div className={CoordiCss.images}>
                            <img className={CoordiCss.mainimage} src={`/images/${props.img4}`} alt="Head2" />
                        </div>

                        <Details
                            name={props.name4}
                            link1={props.link10}
                            link2={props.link11}
                            link3={props.link12}
                        />
                    </div>
                    <div className={CoordiCss.imageDiv}>
                        <div className={CoordiCss.images}>
                            <img className={CoordiCss.mainimage} src={`/images/${props.img5}`} alt="Head2" />
                        </div>

                        <Details
                            name={props.name5}
                            link1={props.link13}
                            link2={props.link14}
                            link3={props.link15}
                        />
                    </div>
                    <div className={CoordiCss.imageDiv}>
                        <div className={CoordiCss.images}>
                            <img className={CoordiCss.mainimage} src={`/images/${props.img6}`} alt="Head2" />
                        </div>

                        <Details
                            name={props.name6}
                            link1={props.link16}
                            link2={props.link17}
                            link3={props.link18}
                        />
                    </div>
                </div>
               
            
        
        </div >
    )
}

export default coreTeamMembers;