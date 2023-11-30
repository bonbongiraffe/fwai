function EducationCard({ education }){
    return(
        <div>
            <img className='h-20 w-20' src={process.env.PUBLIC_URL + `/assets/${education.image}`} alt={education.name}/>
            <p>{education.name}</p>
            <p>{education.time}</p>
            <p>{education.program}</p>
        </div>
    )
}

export default EducationCard