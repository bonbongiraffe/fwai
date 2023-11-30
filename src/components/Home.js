import NavBar from './NavBar';

function Home(){
    return (
        <div className='flex'>
            <img src={process.env.PUBLIC_URL + '/assets/img-01.JPG'} alt='photo 1' className='h-1/4 w-1/4'/>
            <div>
                <h1 className="text-3xl font-bold">
                    Francesco Wai
                </h1>
                <ul>
                    <li>Information Technology Professional</li>
                    <li>Software Engineer at Large</li>
                    <li>Etc.</li>
                </ul>
                <NavBar/>
                <ul className='container mx-auto flex flex-row'>
                    <li className='basis-1/3'>
                        <a href='https://www.linkedin.com/in/francescowai/'>
                            <span className='sr-only'>LinkedIn</span>
                            <svg className='h-6 w-6' xmlns='https://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                                <path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'></path>
                            </svg>
                        </a>
                    </li>
                    <li className='basis-1/3'>
                        <a href='https://github.com/bonbongiraffe'>
                            <span className='sr-only'>GitHub</span>
                            <svg className='h-6 w-6' xmlns='https://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' aria-hidden='true'>
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                    </li>
                    <li className='basis-1/3'>
                        <a href='https://drive.google.com/file/d/149yaqkFjO2P507j_SrAKw38QQGMt2Fh7/view?usp=sharing'>
                            <span className='sr-only'>Resume</span>
                            {/* <svg className='h-6 w-6' xmlns='https://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' aria-hidden='true'> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home