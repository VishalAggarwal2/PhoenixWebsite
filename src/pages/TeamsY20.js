import React from "react";
import Heading from "../Components/Heading";
import TeamCss from "./teams.module.css";
import TeamNavbar from "../Components/TeamNavbar";
import Coordinator from "../Components/coordinators";
import y21 from '../images/y21 team.jpg'

const y20Data = {
  coordinators: [
    {
      name: "Garvit Goyal",
      img: "coordinator1.jpg",
      link1: "https://www.linkedin.com/in/ergarvitgoyal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "https://www.instagram.com/garvit8409?igsh=d2NsMjkybTNxbGhz",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=21dec004@lnmiit.ac.in",
    },
    {
      name: "Yash Khandelwal",
      img: "coordinator2.jpg",
      link1: "https://www.linkedin.com/in/yashkh26?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "https://www.instagram.com/yash_kh_?igsh=MXR2cG1zMDRrZW1ubQ==",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=yashkhandelwal2030@gmail.com",
    },
    {
      name: "Manaas Gupta",
      img: "coordinator3.jpg",
      link1: "https://www.linkedin.com/in/guptamaanas",
      link2: "",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=21ucs120@lnmiit.ac.in",
    },
    {
      name: "Ramsha Iqbal",
      img: "coordinator4.jpg",
      link1: "https://www.linkedin.com/in/ramsha-iqbal-332620211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "https://www.instagram.com/ramsha_iqbal?igsh=MWR6OXM0bnMyNTgzNg==",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=21ume042@lnmiit.ac.in",
    },
  ],
  
  
};

function Teams(props) {
  return (
    <div className={TeamCss.maindiv}>
      <Heading />
      <TeamNavbar
        isY20={props.isY20}
        setY20false={() => props.setY20false()}
        setY20true={() => props.setY20true()}
      />
      <div className={TeamCss.mainImage}>
        <img
          className={TeamCss.mainImage1}
          src={y21}
          alt="main"
        />
      </div>

      <Coordinator
        name1={y20Data.coordinators[0].name}
        name2={y20Data.coordinators[1].name}
        name3={y20Data.coordinators[2].name}
        name4={y20Data.coordinators[3].name}
        img1={y20Data.coordinators[0].img}
        img2={y20Data.coordinators[1].img}
        img3={y20Data.coordinators[2].img}
        img4={y20Data.coordinators[3].img}
        link1={y20Data.coordinators[0].link1}
        link2={y20Data.coordinators[0].link2}
        link3={y20Data.coordinators[0].link3}
        link4={y20Data.coordinators[1].link1}
        link5={y20Data.coordinators[1].link2}
        link6={y20Data.coordinators[1].link3}
        link7={y20Data.coordinators[2].link1}
        link8={y20Data.coordinators[2].link2}
        link9={y20Data.coordinators[2].link3}
        link10={y20Data.coordinators[3].link1}
        link11={y20Data.coordinators[3].link2}
        link12={y20Data.coordinators[3].link3}
        
      />
      
      
      
    </div>
  );
}

export default Teams;
