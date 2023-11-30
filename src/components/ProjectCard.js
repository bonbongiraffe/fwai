import { ReactComponent as GitHubIcon } from '../icons/github.svg'
import { ReactComponent as YouTubeIcon } from '../icons/youtube.svg'

function ProjectCard({ project }){
    return(
        <div>
            <img className='h-20 w-20' src={process.env.PUBLIC_URL+`/assets/${project.image}`} alt={project.name}/>
            <p>{project.name}</p>
            <p>{project.description}</p>
            <a href={project.github}>
                <span className='sr-only'>github link</span>
                <GitHubIcon className='h-6 w-6'/>
            </a>
            <a href={project.youtube}>
                <span className='sr-only'>youtube link</span>
                <YouTubeIcon className='h-6 w-6'/>
            </a>
            <p>{project.technologies}</p>
        </div>
    )
}

export default ProjectCard