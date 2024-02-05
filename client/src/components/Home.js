import NavBar from './NavBar';
import Resume from './Resume';
import LinkBar from './LinkBar';
import MessageForm from './MessageForm';
import { useState } from 'react';

function Home(){
    const [ showResume, setShowResume ] = useState(false)
    const [ showContactForm, setShowContactForm ] = useState(false)
    
    return (
        <div className='h-screen flex p-8 mx-32'>
            <div className='w-1/2'>
                <img src={process.env.PUBLIC_URL + '/assets/img-01.JPG'} alt='' className='w-1/3 outline flex'/>
                <div className='p-2 w-2/3'>
                    {/* <h1 className="flex absolute left-6 text-3xl font-bold">Francesco Wai</h1> */}
                    <h1 className="flex text-2xl">Francesco Wai</h1>
                    <span>
                        Chemical Engineer and Philosopher by diploma, in 2020, turned Software Engineer in 2023. Recent bootcamp graduate, unexpected LeetCode Enthusiast, and looking for my first opportunity in Tech, 
                    </span>
                    <span className="hover:underline"> etc.</span>
                    <NavBar showResume={showResume} setShowResume={setShowResume}/>
                    <LinkBar/>
                    <h1 onClick={()=>setShowContactForm(!showContactForm)} className="hover:underline">Drop me a line!</h1>
                </div>
            </div>
            <div className="w-1/2 p-4 overflow-y-auto">
                {/* <div className='flex p-4'>
                    <img src={process.env.PUBLIC_URL + '/assets/img-01.JPG'} alt='' className='w-1/3 outline flex'/>
                    <span className='p-4 w-2/3'>
                        Chemical Engineer and Philosopher by diploma, in 2020, turned Software Engineer in 2023. Recent bootcamp graduate, unexpected LeetCode Enthusiast, and looking for my first opportunity in Tech, 
                    </span>
                </div> */}
                {showResume ? <Resume/> : null}
                {showContactForm ? <MessageForm/> : null}
            </div>
        </div>
    )
}

export default Home