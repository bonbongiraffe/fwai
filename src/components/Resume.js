import EducationCard from "./EducationCard";
import resumeData from '../data/resume.json';
const educationData = resumeData.education;

function Resume(){
    const educationCards = educationData.map((e) => <EducationCard education={e} key={e.id}/>)

    return(
        <div>
            {educationCards}
        </div>
    )
}

export default Resume