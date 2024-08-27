import fcmen from './FacultyMentor.module.css';
import profileImage from '../images/atul mishra sir .jpg';
import { FaLinkedinIn} from 'react-icons/fa';

import {FiMail} from 'react-icons/fi';
import DetailsCss from "./details.module.css";

function FacultyMentor() {
    return (
        <div className={fcmen.container}>
            <div className={fcmen.header}>Our Faculty Mentor</div>
            <div className={fcmen.subsection}>
                <div className={fcmen.image}>
                    <img src={profileImage} alt="Dr. Atul Mishra" />
                </div>
                <div className={fcmen.name}>Dr. Atul Mishra</div>
                <div className={fcmen.desc}>
                    Assistant Professorknk<br />
                    Mechanical And Mechatronics  Department</div>
                    <div className={fcmen.links}>
                    <a href="http://linkedin.com/in/atul-mishra-phd-aaa89264" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={26} className={DetailsCss.iconStyle}/></a>
                    {/* <a href="https://mail.google.com/mail/?view=cm&fs=atul.mishra@lnmiit.ac.in" target="_blank" rel="noopener noreferrer"><FiMail size={26} className={DetailsCss.iconStyle}/></a>  */}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=atul.mishra@lnmiit.ac.in" target="_blank" rel="noopener noreferrer"><FiMail size={26} className={DetailsCss.iconStyle}/></a>  

                    
                    </div>
            </div>
        </div>
    );
}

export default FacultyMentor;