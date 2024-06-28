import React from "react";
import Heading from "../Components/CreditsHeading";
import TeamCss from "./teams.module.css";
import Mentors from "../Components/Mentors";
import Developers from "../Components/Developers";
import Designer from "../Components/Designer";

const creditsData = {
  mentors: [
    {
      name: "Kingshuk Ghosh",
      img: "SoftwareDivisonHead1.png",
      link1: "https://www.linkedin.com/in/kingshuk-ghosh-350b691b8",
      link2: "https://instagram.com/mrkingshuk_?igshid=YmMyMTA2M2Y=",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20ucs098@lnmiit.ac.in",
    },
    {
      name: "Vaibhav Jaiswal",
      img: "SoftwareDivisonHead2.png",
      link1: "https://www.linkedin.com/in/vaibhav-jaiswal01",
      link2: "https://www.instagram.com/the_curious__1/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20ucc126@lnmiit.ac.in",
    },
  ],
  developers: [
    {
      name: "Gaurav Agrawal",
      img: "gaurav.png",
      link1: "https://www.linkedin.com/in/gaurav-agrawal-45119722a/",
      link2: "https://www.instagram.com/gaurav_a.g/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=21ucc041@lnmiit.ac.in",
    },
    {
      name: "Vishal Kumar",
      img: "vishal1.png",
      link1: "https://www.linkedin.com/in/v15h4l/",
      link2: "https://www.instagram.com/vi5halkumar/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=21ucc116@lnmiit.ac.in",
    },
    {
      name: "Ramsha Iqbal",
      img: "ramsha.png",
      link1: "https://www.linkedin.com/in/ramsha-iqbal-332620211/",
      link2: "https://www.instagram.com/_ramsha_iqbal_/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=21ume042@lnmiit.ac.in",
    },
  ],
  designer: [
    {
      name: "Vishal Kumar",
      img: "vishal1.png",
      link1: "https://www.linkedin.com/in/v15h4l/",
      link2: "https://www.instagram.com/vi5halkumar/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=21ucc116@lnmiit.ac.in",
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
      <Designer
        name1={creditsData.designer[0].name}
        img1={creditsData.designer[0].img}
        link1={creditsData.designer[0].link1}
        link2={creditsData.designer[0].link2}
        link3={creditsData.designer[0].link3}
      />
    </div>
  );
}

export default Teams;
