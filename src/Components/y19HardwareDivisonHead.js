import React from "react";
import CoordiCss from "./coordinator.module.css";
import Details from "./Details";


function HardwareDivisonHead(props) {
    return (
        <div>

            <h1 className={CoordiCss.coordinatorsHeading}>Coordinators</h1>
            <div className={CoordiCss.Y21coordinatorscenter}>
            <div className={CoordiCss.Y21coordinators}>
                <div className={CoordiCss.coordinators}>
                    <div className={CoordiCss.imageDiv}>
                        <div className={CoordiCss.images}>
                            <img className={CoordiCss.mainimage} src={`/images/${props.img1}`} alt="Head1" />
                        </div>

                        <Details
                            name={props.name1}
                            link1={props.linkA}
                            link2={props.linkB}
                            link3={props.linkC}
                        />
                    </div>
                </div>
                <div className={CoordiCss.coordinators}>
                    <div className={CoordiCss.imageDiv}>
                        <div className={CoordiCss.images}>
                            <img className={CoordiCss.mainimage} src={`/images/${props.img2}`} alt="Head2" />
                        </div>

                        <Details
                            name={props.name2}
                            link1={props.linkD}
                            link2={props.linkE}
                            link3={props.linkF}
                        />
                    </div>
                </div>
                <div className={CoordiCss.coordinators}>
                    <div className={CoordiCss.imageDiv}>
                        <div className={CoordiCss.images}>
                            <img className={CoordiCss.mainimage} src={`/images/${props.img3}`} alt="Head3" />
                        </div>

                        <Details
                            name={props.name3}
                            link1={props.linkG}
                            link2={props.linkH}
                            link3={props.linkI}
                        />
                    </div>
                </div>
                <div className={CoordiCss.coordinators}>
                    <div className={CoordiCss.imageDiv}>
                        <div className={CoordiCss.images}>
                            <img className={CoordiCss.mainimage} src={`/images/${props.img4}`} alt="Head4" />
                        </div>

                        <Details
                            name={props.name4}
                            link1={props.linkJ}
                            link2={props.linkK}
                            link3={props.linkL}
                        />
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default HardwareDivisonHead;