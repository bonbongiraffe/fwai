import { ReactComponent as GitHubIcon } from '../icons/github.svg'
import { ReactComponent as YouTubeIcon } from '../icons/youtube.svg'

function ProjectCard({ project }){
    return(
        <div className='flex'>
            <img className='h-20 w-20' src={process.env.PUBLIC_URL+`/assets/${project.image}`} alt={project.name}/>
            <div>
                <p className='font-bold'>{project.name}</p>
                <p>{project.description}</p>
                <div className='flex'>
                    <a href={project.github}>
                        <span className='sr-only'>github link</span>
                        <GitHubIcon className='h-6 w-6'/>
                    </a>
                    <a href={project.youtube}>
                        <span className='sr-only'>youtube link</span>
                        <YouTubeIcon className='h-6 w-6'/>
                    </a>
                </div>
                <p>{project.technologies}</p>
            </div>
        </div>
    )
}

export default ProjectCard