import Aboutcss from "./About.module.css";
import Aboutmainpage from "./Aboutmainpage";
import Aboutmainpagebelow from "./Aboutmainpagebelow";
export default function About() {
  return (
    <>
      <div className={Aboutcss.container}>
        <h1 className={Aboutcss.heading}>About</h1>
        <Aboutmainpage />
        <Aboutmainpagebelow />
      </div>
    </>
  );
}
