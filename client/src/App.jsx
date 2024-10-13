import { Toaster, toast } from 'react-hot-toast';
import {Routes, Route} from 'react-router-dom';
import Home from './Component/Home';

function App() {
  const clickHandler = () => {
    toast.success("For Checking Purpose");
  };

  return (
    <div>
      <Toaster position="top-center" />
      <button onClick={clickHandler}>Click me</button>

      <Routes>
          <Route path='/api/v1/' element={<div>Landing</div>}/>
          <Route path='/api/v1/login' element={<div>Login</div>}/>
          <Route path='/api/v1/signup' element={<div>Signup</div>}/>
          <Route path='/api/v1/home' element={<Home/>}/>
          <Route path='/api/v1/note' element={<div>Add Note</div>}/>
          <Route path='/api/v1/drive' element={<div>Drive</div>}/>
          <Route path='/api/v1/profile' element={<div>Profile</div>}/>
          <Route path='/api/v1/edit-profile' element={<div>Edit Profile</div>}/>
          <Route path='/api/v1/bookmarks' element={<div>Bookmarks</div>}/>
      </Routes>
    </div>
  );
}

export default App;
