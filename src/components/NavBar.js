import photo1 from '../assets/img-01.JPG'

function NavBar(){
    return (
        <div>
            <h1 className="text-3xl font-bold">
                 Francesco Wai
            </h1>
            <img src={photo1} alt='photo 1' className='h-1/3 w-1/3'/>
        </div>
    )
}

export default NavBar