import { useContext } from 'react';
import { UserContext } from '../UserProvider';
import { SiTask } from "react-icons/si";
import { Link } from 'react-router-dom'

const NavBar = () => {
    const profileData = useContext(UserContext);

    return (
        <div>
            <div className='flex justify-between items-center px-4 md:px-10 vh10 bg-slate-800 text-white'>

                <Link to='/api/v1/home'>
                    <div className='flex items-center gap-x-2'>
                        <div className='text-3xl'><SiTask /></div>
                        <div className='text-2xl font-bold'> My<span className='text-red-500 text-3xl font-extrabold'>Task</span></div>
                    </div>
                </Link>

                <div className="flex items-center justify-between">

                    <div className="md:hidden text-xl cursor-pointer">
                        <div className="md:hidden flex flex-col gap-y-2 items-center ">
                            <Link to='/api/v1/profile'>
                                <div className="cursor-pointer border-2 border-red-300 p-2 rounded-full"><img className='rounded-full h-8 w-8 object-cover' src={profileData.image} /></div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-4 hidden md:flex">

                        <Link to='/api/v1/profile'>
                            <div className='flex items-center gap-x-4 cursor-pointer border-2 px-4 py-2 rounded-md '>
                                <div className="rounded-full"><img className='rounded-full h-8 w-8 object-cover' src={profileData.image} /></div>
                                <div className="text-lg hover:underline">{profileData.name}</div>
                            </div>
                        </Link>

                        <div className="px-4 py-2 bg-slate-700 rounded-md hover:bg-slate-900 cursor-pointer transition duration-200">Logout</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
