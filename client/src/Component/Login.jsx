import { SiTask } from "react-icons/si";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'; 
import axios from 'axios';

const Login = () => {

   const [info, setInfo] = useState({
        email: '',
        password: ''
   });

   const navigate = useNavigate();

   const changeHandler = (event) => {
        setInfo({...info, [event.target.name]: event.target.value});
   }

    async function submitHandler(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/api/v1/login", info);

            if (response.data.success === false) {
                toast.error("Not registered email");
            } else {
                toast.success("Login Successfully");

                const { jwtToken } = response.data;
                localStorage.setItem('jwtToken', jwtToken);

                setInfo({
                    email: '',
                    password: '',
                });

                navigate('/api/v1/home');
            }

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.error('No response from the server');
            } else {
                toast.error('Error during login');
            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-800 p-4 ">
            <section className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <Link to='/api/v1/'>
                    <div className='flex items-center gap-x-2 text-slate-800'>
                        <div className='text-3xl'><SiTask /></div>
                        <div className='text-2xl font-bold'> My<span className='text-red-500 text-3xl font-extrabold'>Task</span></div>
                    </div>
                </Link>
                <h1 className="mt-10 text-xl font-bold leading-tight text-slate-800 md:text-2xl">
                    Sign in to your account
                </h1>
                <form className="mt-6 space-y-4" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-800">Your email</label>
                        <input
                            onChange={changeHandler}
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-slate-800 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="name@company.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-800 ">Password</label>
                        <input
                            onChange={changeHandler}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-slate-800 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            required
                        />
                    </div>
                    {/* <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</div>
                    </div> */}
                    <button type="submit" className="w-full text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " > Sign in </button>
                    <div className="text-sm font-light text-gray-500 ">
                        Don’t have an account yet? <Link to='/api/v1/signup'> <span className="font-medium text-primary-600 hover:underline">Sign up</span> </Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login;
