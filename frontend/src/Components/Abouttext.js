import Textcss from './Text.module.css';
export default function Abouttext(props) {
    return(
        <>
        <div className={Textcss.textmaindiv} >
       <p  >{props.upper}</p> 
        <br />
       <p  >{props.lower}</p>
       </div  >
        </>);
    }