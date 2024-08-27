import React from "react";
import Heading from "../Components/CreditsHeading";
import TeamCss from "./teams.module.css";
import Mentors from "../Components/Mentors";
import Developers from "../Components/Developers";

const creditsData = {
  mentors: [
    {
      name: "Vishal Aggarwal",
      img: "mentor1.jpg",
      link1: "https://www.linkedin.com/in/vishal-aggarwal-414730248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYZ4Iw4C1RduaIbK1I03BJw%3D%3D",
      link2: "https://www.instagram.com/vishalaggarwal270?igsh=YjM0NzlleTl1cjJn",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22ucs228@lnmiit.ac.in",
    },
    {
      name: "Gaurav Sharma",
      img: "mentor2.jpg",
      link1: "https://www.linkedin.com/in/gaurav-sharma-1603b020a/",
      link2: "https://www.instagram.com/the_gaurav_sh?igsh=YjdpM3BzdjN1NDJt",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=22ucs075@lnmiit.ac.in",
    },
  ],
  developers: [
    {
      name: "Utkarsh Bansal",
      img: "utkarshb.jpg",
      link1: "https://www.linkedin.com/in/utkarsh-bansal-3437b3287/",
      link2: "https://www.instagram.com/utkarsh_bansal_?igsh=aXhrZ2hsamE2ejBo",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=23ucs728@lnmiit.ac.in",
    },
    {
      name: "Akshat Mehta",
      img: "akshatm.jpg",
      link1: "https://www.linkedin.com/in/akshat-mehta-8678b1280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "https://www.instagram.com/akshuuu._.m95?igsh=MWEzb2d4eWw2NXY3Zg==",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=23ucs525@lnmiit.ac.in",
    },
    {
      name: "Aryan Gupta",
      img: "aryang.jpg",
      link1: "https://www.linkedin.com/in/arryanngupta/",
      link2: "https://www.instagram.com/arryanngupta/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=23ucc522@lnmiit.ac.in",
    },
  ],
  
};

function Teams(props) {
  return (
    <div className={TeamCss.maindiv}>
      <Heading />
      <div className={TeamCss.hr}></div>
      <Mentors
        name1={creditsData.mentors[0].name}
        name2={creditsData.mentors[1].name}
        link1={creditsData.mentors[0].link1}
        link2={creditsData.mentors[0].link2}
        link3={creditsData.mentors[0].link3}
        img1={creditsData.mentors[0].img}
        img2={creditsData.mentors[1].img}
        link4={creditsData.mentors[1].link1}
        link5={creditsData.mentors[1].link2}
        link6={creditsData.mentors[1].link3}
      />
      <Developers
        name1={creditsData.developers[0].name}
        name2={creditsData.developers[1].name}
        name3={creditsData.developers[2].name}
        img1={creditsData.developers[0].img}
        img2={creditsData.developers[2].img}
        img3={creditsData.developers[1].img}
        link1={creditsData.developers[0].link1}
        link2={creditsData.developers[0].link2}
        link3={creditsData.developers[0].link3}
        link4={creditsData.developers[1].link1}
        link5={creditsData.developers[1].link2}
        link6={creditsData.developers[1].link3}
        link7={creditsData.developers[2].link1}
        link8={creditsData.developers[2].link2}
        link9={creditsData.developers[2].link3}
      />
      
    </div>
  );
}

export default Teams;
