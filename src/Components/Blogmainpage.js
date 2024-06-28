import blogmaincss from "./Blogmainpage.module.css";
import Blogcomponent from "./Blogmaincomponent.js";
import Blogcomponentup from "./Blogmaincomponentup.js";
import Blogdata from "./Blogdata";
import { Link } from "react-router-dom";
export default function Blogmainpage() {
  const gotoTop = ()=>{
    window.scrollTo({top:0,left:0,behavior:"smooth"});
  }
  return (
    <>
      <h1 className={blogmaincss.heading} >Daily Blogs</h1>

      <Link onClick={gotoTop} to={`0`}>
      <div className={blogmaincss.item1}>
        <Blogcomponentup />
      </div>
      </Link>

      <div className={blogmaincss.blogcontainer}>
      {
        Blogdata.map((value)=>(
        <Link onClick={gotoTop} to={`${value.id}`}>
        <div key= {value.id} className={blogmaincss.item}>
          <Blogcomponent details={value} />
        </div>   </Link>
          )
        )
      }    
      </div>
    
    </>
  );
}
