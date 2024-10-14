import './custom.css'
import NavBar from './NavBar';
import { ThreeCircles } from 'react-loader-spinner';

const Home = () => {

  return (
    <div>
        <div>
            <NavBar/>
        </div>
        <div className='vh90 p-4 md:p-10 overflow-y-scroll'>
            <h1>Home</h1>
            <div className='flex items-center justify-center h-full'>
              <ThreeCircles visible={true} height="100" width="100" color="#DD524C" ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass="" />
            </div>
        </div>
    </div>
  )
}

export default Home