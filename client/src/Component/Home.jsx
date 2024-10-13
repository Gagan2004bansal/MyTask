import { useContext } from 'react';
import { UserContext } from '../UserProvider'; 

const Home = () => {

    const user = useContext(UserContext);

  return (
    <div> Home, {user}</div>
  )
}

export default Home