function EducationCard({ education }){
    return(
        <div>
            <img src={'./assets/' + education.image} alt={education.name}/>
            <p>{education.name}</p>
            <p>{education.time}</p>
            <p>{education.program}</p>
        </div>
    )
}

export default EducationCard