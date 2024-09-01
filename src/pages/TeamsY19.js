import React from "react";
import Heading from "../Components/Heading";
import TeamCss from "./teams.module.css";
import TeamNavbar from "../Components/TeamNavbar";
import Coordinator from "../Components/y19coordinators";
import HardwareDivisonHead from "../Components/y19HardwareDivisonHead";
import SoftwareDivisonHead from "../Components/y19SoftwareDomainHead";
import QuarksDivisonHead from "../Components/y19QuarksDivisonHead";
import y22 from '../images/y22 team.jpg'



const y19Data={
  coordinators: [
   
    {
      name: "Hardik Agrawal",
      img: "coordi1y22.jpg",
      link1: "https://www.linkedin.com/in/hardik-agrawal-807873248/",
      link2: "https://www.instagram.com/astralhardik_19/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22uec045@lnmiit.ac.in",
    },
    {
      name: "Anmol Jain",
      img: "coordi2y22.jpg",
      link1: "https://www.linkedin.com/in/anmol-jain-3066431a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "https://www.instagram.com/jain_anmol_0815?igsh=MWxoM201dmJvNmU2ag==",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22uec017@lnmiit.ac.in",
    },
    {
      name: "Arunil Jain",
      img: "coordi3y22.jpg",
      link1: "https://www.linkedin.com/in/aruniljain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "https://www.instagram.com/arunil_jain?igsh=MTIydnBueTdqYXoxcQ==",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22ume005@lnmiit.ac.in",
    },
  ],
  creative:[
    {
      name: "Harsh Parmar",
      img: "creative1.png",
      link1: "https://www.linkedin.com/in/harsh-parmar-13523a262/",
      link2: "https://www.instagram.com/harsh_rajput2003/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22uec049@lnmiit.ac.in",
    },
    {
      name: "Vedic Goyal",
      img: "creative2.jpg",
      link1: "https://www.linkedin.com/in/vedic-goyal-187661248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "https://www.instagram.com/vedicgoyal?igsh=MXQxcjd2ZG1jZ2J3",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22uec145@lnmiit.ac.in",
    },
  ],
  marketing:[ {
    name: "Aryan Pal",
    img: "pr2.jpg",
    link1: "",
    link2: "https://www.instagram.com/_aryan_pal11?igsh=Nmc1ZDNoZHR4cjN2",
    link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22ucc025@lnmiit.ac.in",
  },
  {
    name: "Dev Khubani",
    img: "pr1.jpg",
    link1: "https://www.linkedin.com/in/dev-khubani-bb03721b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    link2: "https://www.instagram.com/devkh2k3?igsh=Zjk5b2ZxcXFtNzY0",
    link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22uec039@lnmiit.ac.in",
  },
  {
    name: "Prakhar Kesharwani",
    img: "pr3.jpg",
    link1: "http://www.linkedin.com/in/prakhar-kesharwani",
    link2: "https://www.instagram.com/14_prakhar?igsh=MWZrcm8xa2o3bmVwOA==",
    link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22uec097@lnmiit.ac.in",
  },],
  quarks:[
    {
      name: "Harshil Vijay",
      img: "quarks1.jpg",
      link1: "https://www.linkedin.com/in/harshil-vijay-4168802a0/",
      link2: "https://www.instagram.com/hvj1197?igsh=OTFxazA0a3U5Mjc5",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22uec052@lnmiit.ac.in",
    },
    {
      name: "Shivam Khunger ",
      img: "quarks2.jpg",
      link1: "https://www.linkedin.com/in/shivam-khunger-aa2a09249/",
      link2: "https://www.instagram.com/shivam_khunger_7643/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22ucc095@lnmiit.ac.in",
    },
    {
      name: "Nemil Kamdar ",
      img: "quarks3.png",
      link1: "https://www.linkedin.com/in/nemil-kamdar-7638b0319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "https://www.instagram.com/nemil.kamdar.24?igsh=bG9hd3VjNHZ1ajFu",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22ucs138@lnmiit.ac.in",
    },

  ]
}

  
function Teams(props)
{
    return (<div className={TeamCss.maindiv}>
        <Heading />
        <TeamNavbar isY20={props.isY20} setY20false={()=>props.setY20false()} setY20true={()=>props.setY20true()} />
        <div className={TeamCss.mainImage}><img className={TeamCss.mainImage1} src={y22} alt="main"/></div>
           
        <Coordinator
             name1={y19Data.coordinators[0].name}
             name2={y19Data.coordinators[1].name}
             name3={y19Data.coordinators[2].name}
             img1={y19Data.coordinators[0].img}
            img2={y19Data.coordinators[1].img}
            img3={y19Data.coordinators[2].img}
            link1={y19Data.coordinators[0].link1}
            link2={y19Data.coordinators[0].link2}
            link3={y19Data.coordinators[0].link3}
            link4={y19Data.coordinators[1].link1}
            link5={y19Data.coordinators[1].link2}
            link6={y19Data.coordinators[1].link3}
            link7={y19Data.coordinators[2].link1}
            link8={y19Data.coordinators[2].link2}
            link9={y19Data.coordinators[2].link3}
            
             />
            <HardwareDivisonHead 
            name1={y19Data.creative[0].name}
            img1={y19Data.creative[0].img}
            link1={y19Data.creative[0].link1}
            link2={y19Data.creative[0].link2}
            link3={y19Data.creative[0].link3}
            name2={y19Data.creative[1].name}
            img2={y19Data.creative[1].img}
            link4={y19Data.creative[1].link1}
            link5={y19Data.creative[1].link2}
            link6={y19Data.creative[1].link3}
            />
            <SoftwareDivisonHead 
            name1={y19Data.marketing[0].name}
            img1={y19Data.marketing[0].img}
            link1={y19Data.marketing[0].link1}
            link2={y19Data.marketing[0].link2}
            link3={y19Data.marketing[0].link3}
            name2={y19Data.marketing[1].name}
            img2={y19Data.marketing[1].img}
            link4={y19Data.marketing[1].link1}
            link5={y19Data.marketing[1].link2}
            link6={y19Data.marketing[1].link3}
            name3={y19Data.marketing[2].name}
            img3={y19Data.marketing[2].img}
            link7={y19Data.marketing[2].link1}
            link8={y19Data.marketing[2].link2}
            link9={y19Data.marketing[2].link3}
            />
            <QuarksDivisonHead 
            name1={y19Data.quarks[0].name}
            name2={y19Data.quarks[1].name}
            name3={y19Data.quarks[2].name}
            img1={y19Data.quarks[0].img}
            img2={y19Data.quarks[1].img}
            img3={y19Data.quarks[2].img}
            link1={y19Data.quarks[0].link1}
            link2={y19Data.quarks[0].link2}
            link3={y19Data.quarks[0].link3}
            link4={y19Data.quarks[1].link1}
            link5={y19Data.quarks[1].link2}
            link6={y19Data.quarks[1].link3}
            link7={y19Data.quarks[2].link1}
            link8={y19Data.quarks[2].link2}
            link9={y19Data.quarks[2].link3}
            />

    </div>
    );
}

export default Teams;

