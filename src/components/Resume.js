import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

import resumeData from '../data/resume.json';
const educationData = resumeData.education;
const experienceData = resumeData.experience;
const projectData = resumeData.projects;

function Resume(){
    const experienceCards = experienceData.map((ex) => <ExperienceCard experience={ex} key={ex.id}/>)
    const educationCards = educationData.map((ed) => <EducationCard education={ed} key={ed.id}/>)
    const projectCards = projectData.map((p) => <ProjectCard project={p} key={p.id}/>)

    return(
        <div>
            <h1 className="text-3xl font-bold">Experience</h1>
            {experienceCards}
            <h1 className="text-3xl font-bold">Projects</h1>
            {projectCards}
            <h1 className="text-3xl font-bold">Education</h1>
            {educationCards}
        </div>
    )
}

export default Resume