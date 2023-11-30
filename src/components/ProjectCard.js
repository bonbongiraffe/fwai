function ProjectCard({ project }){
    return(
        <div>
            <img className='h-20 w-20' src={process.env.PUBLIC_URL+`/assets/${project.image}`} alt={project.name}/>
            <p>{project.name}</p>
            <p>{project.description}</p>
            <p>{project.github}</p>
            <p>{project.youtube}</p>
            <p>{project.technologies}</p>
        </div>
    )
}

export default ProjectCard