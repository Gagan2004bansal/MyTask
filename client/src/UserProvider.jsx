import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import './Component/custom.css';
import { ThreeCircles } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUserId(decodedToken._id);
            } catch (error) {
                console.error('Error decoding JWT:', error);
                navigate('/api/v1/login');
                setLoading(false);
                return;
            }
        }
        else{
            navigate('/api/v1/login');
            setLoading(false);
            return;
        }
    }, []);

    useEffect(() => {
        const fetchProfileData = async () => {
           if(userId){
            try {
                const response = await axios.get(`http://localhost:3001/api/v1/profile/?id=${userId}`);
                setProfileData(response.data.data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            } finally {
                setLoading(false); 
            }
           }
        };

        fetchProfileData();
    }, [navigate, userId]);

    if (loading) {
        return (
            <div className='vh100 flex flex-col items-center justify-center'>
                <ThreeCircles visible={true} height="100" width="100" color="#DD524C" ariaLabel="three-circles-loading" />
                <div className='flex flex-col items-center justify-center mt-4'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-3xl font-extrabold'>WHOOPS!</h1>
                        <h3 className='mt-10 text-xl font-bold text-red-500'>Something Went Wrong</h3>
                        <p className='font-light'>Check your internet settings and login again</p>
                    </div>
                    <div className='mt-10 flex gap-x-10'>
                        <Link to='/api/v1/home'>
                            <div className='px-10 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer'>TRY AGAIN</div>
                        </Link>
                        <Link to='/api/v1/login'>
                            <div className='px-10 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer'>LOGIN</div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <UserContext.Provider value={profileData}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
