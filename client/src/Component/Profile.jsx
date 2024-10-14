import NavBar from "./NavBar";
import { UserContext } from "../UserProvider";
import { useContext } from "react";
import Heatmap from "../UI/Heatmap";

// icons 
import { RiUser2Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


const Profile = () => {

  const profileData = useContext(UserContext);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='vh90 p-4 md:p-10 overflow-y-scroll '>
          <div className="flex flex-col md:flex-row gap-x-4 md:gap-x-10 gap-y-10 md:gap-y-0 ">
            <div className="md:w-96 flex flex-col bg-gray-200 h-full px-10 py-4 rounded-xl gap-y-4 items-center drop-shadow-xl">
              <div><img src={profileData.image} alt="error" className="rounded-full w-36 h-36 object-cover"/></div>
              <div className="font-medium text-lg">{profileData.username}</div>
              <div>
                <div className="flex gap-x-1 items-center">
                  <div className="text-sky-600 font-bold text-xl"><RiUser2Fill /></div>
                  <h1 className="font-bold text-xl">{profileData.name}</h1>
                </div>
                <p className="font-light">{profileData.email}</p>
                <p className="mt-4">{profileData.bio}</p>
              </div>
              <div className="flex flex-col gap-y-4 items-center w-full">
                    <div className="flex items-center justify-center gap-x-2 w-full bg-red-500 hover:bg-red-600 text-white px-10 py-2 rounded-md shadow-lg cursor-pointer">
                      <div><CiEdit/></div>
                      <button>Edit Profile</button>
                    </div>
                  <div className="flex items-center justify-center gap-x-2 w-full bg-red-500 hover:bg-red-600 text-white px-10 py-2 rounded-md shadow-lg cursor-pointer">
                    <div><MdDelete/></div>
                    <button>Delete Account</button>
                  </div>
                  <div className="flex items-center justify-center gap-x-2 w-full bg-red-500 hover:bg-red-600 text-white px-10 py-2 rounded-md shadow-lg cursor-pointer">
                    <div><FiLogOut/></div>
                    <button>Logout</button>
                  </div>
                  <div className="flex items-center justify-center gap-x-2 w-full bg-sky-500 hover:bg-sky-600 text-white px-10 py-2 rounded-md shadow-lg cursor-pointer">
                    <div><FaLinkedinIn/></div>
                    <button>Post Linkedin</button>
                  </div>
              </div>
            </div>
            <div className="w-full">
                <div className="border-4 border-slate-800 p-2 rounded-xl shadow-xl">
                  <Heatmap/>
                </div>  
                <div className="my-4 bg-slate-800 w-full h-1"></div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Profile