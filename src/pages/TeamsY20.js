import React from "react";
import Heading from "../Components/Heading";
import TeamCss from "./teams.module.css";
import TeamNavbar from "../Components/TeamNavbar";
import Coordinator from "../Components/coordinators";
import HardwareDivisonHead from "../Components/HardwareDivisonHead";
import SoftwareDivisonHead from "../Components/SoftwareDomainHead";
import QuarksDivisonHead from "../Components/QuarksDivisonHead";

const y20Data = {
  coordinators: [
    {
      name: "Prajwal Chittora",
      img: "coordinator1.png",
      link1: "https://www.linkedin.com/in/prajwal-chittora-7798441b9",
      link2: "https://instagram.com/__prajwal___10?igshid=YmMyMTA2M2Y=",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20uec093@lnmiit.ac.in",
    },
    {
      name: "Lakshay Setia",
      img: "coordinator2.png",
      link1: "https://www.linkedin.com/in/lakshay-setia",
      link2: "https://instagram.com/lakshay.setia?igshid=YmMyMTA2M2Y=",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20ucs105@lnmiit.ac.in",
    },
  ],
  hardware: [
    {
      name: "Lakshya Choudhary",
      img: "HardwareDivisonHead1.png",
      link1: "https://www.linkedin.com/in/lakshya-choudhary/",
      link2: "https://instagram.com/lakshyachoudhary6?igshid=YmMyMTA2M2Y=",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20uec074@lnmiit.ac.in",
    },
    {
      name: "Prabhav Sharma",
      img: "HardwareDivisonHead2.png",
      link1: "https://www.linkedin.com/in/prabhav-sharma-889836222/",
      link2: "https://www.instagram.com/_backstory__/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20ume037@lnmiit.ac.in",
    },
  ],
  software: [
    {
      name: "Kingshuk Ghosh",
      img: "SoftwareDivisonHead1.png",
      link1: "https://www.linkedin.com/in/kingshuk-ghosh-350b691b8",
      link2: "https://instagram.com/mrkingshuk_?igshid=YmMyMTA2M2Y=",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20ucs098@lnmiit.ac.in",
    },
    {
      name: "Swatantra Jain",
      img: "SoftwareDivisonHead2.png",
      link1: "https://www.linkedin.com/in/swatantra-jain-1887b0141/",
      link2: "https://instagram.com/swatantrajain_02?igshid=YmMyMTA2M2Y=",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20uec136@lnmiit.ac.in",
    },
    {
      name: "Vaibhav Jaiswal",
      img: "SoftwareDivisonHead3.png",
      link1: "https://www.linkedin.com/in/vaibhav-jaiswal01",
      link2: "https://www.instagram.com/the_curious__1/",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20ucc126@lnmiit.ac.in",
    },
  ],
  quarks: [
    {
      name: "Yash Pachauri",
      img: "QuarksDivisonHead1.png",
      link1: "https://www.linkedin.com/in/yash-pachauri-209332161",
      link2: "https://instagram.com/yashpachauri_?igshid=YmMyMTA2M2Y=",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20uec151@lnmiit.ac.in",
    },
    {
      name: "Bhavika Agarwal",
      img: "QuarksDivisonHead2.png",
      link1: "https://www.linkedin.com/in/bhavika-agarwal-288775216/",
      link2: "https://instagram.com/bhavikaagarwal_?igshid=YmMyMTA2M2Y=",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20dec003@lnmiit.ac.in",
    },
    {
      name: "Rajat Bothra",
      img: "QuarksDivisonHead3.png",
      link1: "https://www.linkedin.com/in/bothrajat/",
      link2: "https://instagram.com/babubisleryy?igshid=YmMyMTA2M2Y=",
      link3: "https://mail.google.com/mail/?view=cm&fs=1&to=20ucs157@lnmiit.ac.in",
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
          src={"images/y20_new.jpg"}
          alt="main"
        />
      </div>

      <Coordinator
        name1={y20Data.coordinators[0].name}
        name2={y20Data.coordinators[1].name}
        img1={y20Data.coordinators[0].img}
        img2={y20Data.coordinators[1].img}
        link1={y20Data.coordinators[0].link1}
        link2={y20Data.coordinators[0].link2}
        link3={y20Data.coordinators[0].link3}
        link4={y20Data.coordinators[1].link1}
        link5={y20Data.coordinators[1].link2}
        link6={y20Data.coordinators[1].link3}
      />
      <HardwareDivisonHead
        name1={y20Data.hardware[0].name}
        name2={y20Data.hardware[1].name}
        img1={y20Data.hardware[0].img}
        img2={y20Data.hardware[1].img}
        link1={y20Data.hardware[0].link1}
        link2={y20Data.hardware[0].link2}
        link3={y20Data.hardware[0].link3}
        link4={y20Data.hardware[1].link1}
        link5={y20Data.hardware[1].link2}
        link6={y20Data.hardware[1].link3}
      />
      <SoftwareDivisonHead
        name1={y20Data.software[0].name}
        name2={y20Data.software[1].name}
        name3={y20Data.software[2].name}
        img1={y20Data.software[0].img}
        img2={y20Data.software[1].img}
        img3={y20Data.software[2].img}
        link1={y20Data.software[0].link1}
        link2={y20Data.software[0].link2}
        link3={y20Data.software[0].link3}
        link4={y20Data.software[1].link1}
        link5={y20Data.software[1].link2}
        link6={y20Data.software[1].link3}
        link7={y20Data.software[2].link1}
        link8={y20Data.software[2].link2}
        link9={y20Data.software[2].link3}
      />
      <QuarksDivisonHead
        name1={y20Data.quarks[0].name}
        name2={y20Data.quarks[1].name}
        name3={y20Data.quarks[2].name}
        img1={y20Data.quarks[0].img}
        img2={y20Data.quarks[1].img}
        img3={y20Data.quarks[2].img}
        link1={y20Data.quarks[0].link1}
        link2={y20Data.quarks[0].link2}
        link3={y20Data.quarks[0].link3}
        link4={y20Data.quarks[1].link1}
        link5={y20Data.quarks[1].link2}
        link6={y20Data.quarks[1].link3}
        link7={y20Data.quarks[2].link1}
        link8={y20Data.quarks[2].link2}
        link9={y20Data.quarks[2].link3}
      />
    </div>
  );
}

export default Teams;
