import { ReactComponent as GitHubIcon } from '../icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../icons/linkedin.svg';
import { ReactComponent as ResumeIcon } from '../icons/resume.svg';
import { ReactComponent as LeetCodeIcon } from '../icons/leetcode.svg';

function LinkBar(){
    return (
        <div>
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
        </div>
    )
}

export default LinkBar;