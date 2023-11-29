function ExperienceCard({ experience }){
    return (
        <div>
            <img className='h-20 w-20' src={process.env.PUBLIC_URL+`/assets/${experience.image}`} alt={experience.company}/>
            <p>{experience.company}</p>
            <p>{experience.time}</p>
            <p>{experience.location}</p>
            <p>{experience.title}</p>
            <p>{experience.description}</p>
        </div>
    )
}

export default ExperienceCard