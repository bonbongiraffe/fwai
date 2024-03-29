import NavBar from './NavBar';
import Resume from './Resume';
import { ReactComponent as GitHubIcon } from '../icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../icons/linkedin.svg';
import { ReactComponent as ResumeIcon } from '../icons/resume.svg';
import { ReactComponent as LeetCodeIcon } from '../icons/leetcode.svg';
import MessageForm from './MessageForm';

function Home(){
    return (
        <div className='h-screen flex p-4'>
            <div className='flex-1/2'>
                <img src={process.env.PUBLIC_URL + '/assets/img-01.JPG'} alt='photo 1' className='w-1/3 outline'/>
                <div className='p-2 w-2/3'>
                    {/* <h1 className="flex absolute left-6 text-3xl font-bold">
                        Francesco Wai
                    </h1> */}
                    <ul>
                        {/* <li>Information Technology Professional</li> */}
                        {/* <li>Software Engineer at Large</li> */}
                        <li>Francesco Wai</li>
                        {/* <li>Etc.</li> */}
                    </ul>
                    <NavBar/>
                    <ul className='flex'>
                        <li className='p-1'>
                            <a href='https://www.linkedin.com/in/francescowai/'>
                                <span className='sr-only'>LinkedIn</span>
                                <LinkedInIcon className='h-6 w-6'/>
                            </a>
                        </li>
                        <li className='p-1'>
                            <a href='https://github.com/bonbongiraffe'>
                                <span className='sr-only'>GitHub</span>
                                <GitHubIcon className='h-6 w-6'/>
                            </a>
                        </li>
                        <li className='p-1'>
                            <a href='https://leetcode.com/bonbongiraffe/'>
                                <span className='sr-only'>LeetCode</span>
                                <LeetCodeIcon className='h-6 w-6'/>
                            </a>
                        </li>
                        <li className='p-1'>
                            <a href='https://drive.google.com/file/d/149yaqkFjO2P507j_SrAKw38QQGMt2Fh7/view?usp=sharing'>
                                <span className='sr-only'>Resume</span>
                                <ResumeIcon className='h-6 w-6'/>
                            </a>
                        </li>
                    </ul>
                    <MessageForm/>
                </div>
            </div>
            <div className="flex-1/2 p-4 overflow-y-auto">
                <Resume/>
            </div>
        </div>
    )
}

export default Home