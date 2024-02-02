function NavBar(){
    return (
        <div className='p-4'>
            {/* <p>About</p> */}
            <span>
                Chemical Engineer and Philosopher by diploma, in 2020, turned Software Engineer in 2023. Recent bootcamp graduate, unexpected LeetCode Enthusiast, and looking for my first opportunity in Tech, 
            </span>
            <span className="hover:underline"> etc.</span>
            <p>Resume</p>
            <ul>
                <li>-Experience</li>
                <li>-Projects</li>
                <li>-Education</li>
            </ul>
        </div>
    )
}

export default NavBar