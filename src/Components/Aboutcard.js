import Aboutcss from './Aboutcard.module.css';
export default function Aboutcard(props) {
    return(
        <>
         <div className={Aboutcss.container}>
            <img className={Aboutcss.aboutimage} src={`/images/about${props.imgNo}.jpg`} alt="About-pic" />
         </div>
        </>
    );
}

// src={`/images/about${props.imgNo}.jpg`}
// src={`/images/BLOG-IMG.png`}