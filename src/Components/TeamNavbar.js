import React from "react";
import { Link } from "react-router-dom";
import NavCss from "./Teamnavbar.module.css";

export default function Navbar(props) {
    return (
        <div className={NavCss.main}>

            <ul className={NavCss.navlist}>
                <div className={NavCss.list} onClick={() => props.setY20true()}>
                    <Link className={props.isY20 ? NavCss.navitem + " " + NavCss.bold : NavCss.navitem} to="/our_team_y20">Y-20</Link>
                </div>
                <div className={NavCss.list} onClick={() => props.setY20false()}>
                    <Link className={!props.isY20 ? NavCss.navitem + " " + NavCss.bold : NavCss.navitem} to="/our_team_y19">Y-21</Link>
                </div>

            </ul>

            <div className={NavCss.hr}></div>
        </div>

    );
}