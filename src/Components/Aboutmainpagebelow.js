import Aboutmainpagebelowcss from "./Aboutmainpagebelow.module.css";
import Aboutcard from "./Aboutcard";
import Abouttext from "./Abouttext";
import { Fragment } from 'react';
export default function Aboutmainpagebelow() {
  return (
    <>
   
        <div className= {Aboutmainpagebelowcss.container}>
           
            <div className={Aboutmainpagebelowcss.first}><div>
            <Aboutcard imgNo={4} /></div>
            <div className={Aboutmainpagebelowcss.middle}>
            <Aboutcard imgNo={5} /></div>
            <div >
            <Aboutcard imgNo={6} /></div></div>
            
            <div className={Aboutmainpagebelowcss.text}>
            <Abouttext upper={<Fragment>We also <b>organize events</b> throughout the year with varying levels of target crowd.</Fragment>} lower={<Fragment>Be a part of the evergrowing plethora of <b>events</b> and <b>projects</b>. You can <b>participate</b> in our events and <b>submit</b> your projects on the portal.</Fragment>}/></div>
            
        </div>
        </>
  );
}
