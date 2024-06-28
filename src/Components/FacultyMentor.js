import fcmen from './FacultyMentor.module.css';
import profileImage from '../images/dr-abhishek-sharma.jpeg';

function FacultyMentor() {
    return (
        <div className={fcmen.container}>
            <div className={fcmen.header}>Our Faculty Mentor</div>
            <div className={fcmen.subsection}>
                <div className={fcmen.image}>
                    <img src={profileImage} alt="Dr. Abhishek Sharma" />
                </div>
                <div className={fcmen.name}>Dr. Abhishek Sharma</div>
                <div className={fcmen.desc}>
                    Assistant Professor <br />
                    Electronics & Communication Department</div>
            </div>
        </div>
    );
}

export default FacultyMentor;