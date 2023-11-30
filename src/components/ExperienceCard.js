function ExperienceCard({ experience }){
    return (
        <div className='flex p-2'>
            <img className='h-20 w-20' src={process.env.PUBLIC_URL+`/assets/${experience.image}`} alt={experience.company}/>
            <div className='p-2'>
                <p className='font-bold'>{experience.company}</p>
                <p>{experience.time}</p>
                <p>{experience.location}</p>
                <p className='font-bold'>{experience.title}</p>
                <p>{experience.description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard