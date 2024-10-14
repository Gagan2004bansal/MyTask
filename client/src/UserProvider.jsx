import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import './Component/custom.css';
import { ThreeCircles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export const UserContext = createContext();

const UserProvider = ({ children }) => {


    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = '670aac1f58e614121f6d7ca5';

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/v1/profile/?id=${userId}`);
                setProfileData(response.data.data);
            } catch (error) {
                setError('Error fetching profile data');
                console.error('Error fetching profile data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [userId]);

    if (loading) return <div className='vh100 flex items-center justify-center'><ThreeCircles visible={true} height="100" width="100" color="#DD524C" ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass="" /></div>;
    if (error) return (
        <div className='flex flex-col items-center justify-center vh100 bg-gray-100'>
            <div>
                <img className='h-40 w-40 object-cover rounded-xl' src='https://www.kindpng.com/picc/m/462-4627432_wi-fi-sadface-wifi-icon-png-face-transparent.png' alt='image'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-extrabold'>WHOOPS!</h1>
                <h3 className='mt-10 text-xl font-bold text-red-500'>Something Went Wrong</h3>
                <p className='font-light'>Check your internet setting and login again</p>
            </div>
            <div className='mt-10 flex gap-x-10'>
                <Link to='/api/v1/home'>
                    <div className='px-10 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer'>TRY AGAIN</div>
                </Link>
                <div className='px-10 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer'>LOGIN</div>
            </div>
        </div>
    );

    return (
        <UserContext.Provider value={profileData}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
