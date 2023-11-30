function EducationCard({ education }){
    return(
        <div className='flex'>
            <img className='h-20 w-20' src={process.env.PUBLIC_URL + `/assets/${education.image}`} alt={education.name}/>
            <div>
                <p className='font-bold'>{education.name}</p>
                <p>{education.time}</p>
                <p>{education.program}</p>
            </div>
        </div>
    )
}

export default EducationCard