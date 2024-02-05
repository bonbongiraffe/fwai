function NavBar({ showResume, setShowResume }){
    return (
        <div className='p-4'>            
            <p className="hover:underline" onClick={()=>setShowResume(!showResume)}>Resume at a glance</p>
            {showResume ? <ul>
                <li>-Experience</li>
                <li>-Projects</li>
                <li>-Education</li>
            </ul>: null}
        </div>
    )
}

export default NavBar