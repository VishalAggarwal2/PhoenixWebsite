import Aboutcss from "./About.module.css";
import Aboutmainpage from "./Aboutmainpage";
import Aboutmainpagebelow from "./Aboutmainpagebelow";
export default function About() {
  return (
    <>
      <div className={Aboutcss.container}>
        <h1 className={Aboutcss.heading}>About Us..</h1>
        <div className={Aboutcss.context}>
          <p> Heyy!!  fellow LNMIITian's are you a problem-solver, a creator, or simply curious about the world of robotics? Look no further! <b>Phoenix </b>   is your platform to explore the endless possibilities of this exciting field. We offer opportunities to work on cutting-edge projects, learn from industry experts, and compete at the highest level. Join us and be part of something extraordinary!</p>
        </div>
        <Aboutmainpage />
        <Aboutmainpagebelow />
      </div>
    </>
  );
}
