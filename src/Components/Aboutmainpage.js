import Aboutmainpagecss from './Aboutmainpage.module.css';
import Aboutcard from './Aboutcard';
import Abouttext from './Abouttext';
import { Fragment } from 'react';
export default function Aboutmainpage() {
    return(
        <>
        <div className= {Aboutmainpagecss.container}>
           
            <div className={Aboutmainpagecss.first}><div>
            <Aboutcard imgNo={1} /></div>
            <div className={Aboutmainpagecss.middle}>
            <Aboutcard imgNo={2} /></div>
            <div >
            <Aboutcard imgNo={3} /></div></div>
            
            <div className={Aboutmainpagecss.text}>
            <Abouttext upper={<Fragment>The <b>Phoenix</b> as a club brings together like minded people to convert <b>ideas into reality</b>.</Fragment>} lower={<Fragment>Our Main Motive is to bring out the feeling of <b>togetherness</b> among the students of LNMIIT and to spread the culture of <b>Robotics, DIP, Embedded System</b>.</Fragment>}/></div>
            
        </div>
        </>
    );
}