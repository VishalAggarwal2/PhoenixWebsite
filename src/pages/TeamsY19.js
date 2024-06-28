import React from "react";
import Heading from "../Components/Heading";
import TeamCss from "./teams.module.css";
import TeamNavbar from "../Components/TeamNavbar";
import Coordinator from "../Components/coordinators";
import HardwareDivisonHead from "../Components/y19HardwareDivisonHead";
import SoftwareDivisonHead from "../Components/y19SoftwareDomainHead";
import QuarksDivisonHead from "../Components/y19QuarksDivisonHead";


// const y19Data={
//   coordinators: [{name:".."},{name:".."}],
//   hardware:[{name:".."},{name:".."}],
//   software:[{name:".."},{name:".."},{name:".."}],
//   quarks:[{name:".."},{name:".."},{name:".."}]
// }

const y19Data={
  coordinators: [{name:"Shreyash Yadav",img:"y19coordinator1.png",link1:"https://www.linkedin.com/feed/"},{name:"Eashana Bharakatia",img:"y19coordinator2.png"}],
  hardware:[{name:"Manthan Jain",img:"y19HardwareDivisonHead1.png"}],
  software:[{name:"Sagar Sheoran",img:"y19SoftwareDivisonHead1.png"}],
  quarks:[{name:"Alokik Soni",img:"y19QuarksDivisonHead1.png"},{name:"Sai Shruti Reddy",img:"y19QuarksDivisonHead2.png"}]
}

  
function Teams(props)
{
    return (<div className={TeamCss.maindiv}>
        <Heading />
        <TeamNavbar isY20={props.isY20} setY20false={()=>props.setY20false()} setY20true={()=>props.setY20true()} />
        <div className={TeamCss.mainImage}><img className={TeamCss.mainImage1} src={"images/y19_new.jpg"} alt="main"/></div>
           
        <Coordinator
             name1={y19Data.coordinators[0].name}
             name2={y19Data.coordinators[1].name}
             img1={y19Data.coordinators[0].img}
            img2={y19Data.coordinators[1].img}
             />
            <HardwareDivisonHead 
            name1={y19Data.hardware[0].name}
            img1={y19Data.hardware[0].img}
            />
            <SoftwareDivisonHead 
            name1={y19Data.software[0].name}
            img1={y19Data.software[0].img}
            />
            <QuarksDivisonHead 
            name1={y19Data.quarks[0].name}
            name2={y19Data.quarks[1].name}
            img1={y19Data.quarks[0].img}
            img2={y19Data.quarks[1].img}
            />

    </div>
    );
}

export default Teams;

