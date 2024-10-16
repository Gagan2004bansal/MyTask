import { Toaster } from 'react-hot-toast';
import {Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import Profile from './Component/Profile';
import Landing from './Component/Landing';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Edit from './Component/Edit';

function App() {

  return (
    <div>
      <Toaster position="top-center" />
      <Routes>
          <Route path='/api/v1/' element={<Landing/>}/>
          <Route path='/api/v1/login' element={<Login/>}/>
          <Route path='/api/v1/signup' element={<Signup/>}/>
          <Route path='/api/v1/home' element={<Home/>}/>
          <Route path='/api/v1/note' element={<div>Add Note</div>}/>
          <Route path='/api/v1/drive' element={<div>Drive</div>}/>
          <Route path='/api/v1/profile' element={<Profile/>}/>
          <Route path='/api/v1/edit-profile' element={<Edit/>}/>
          <Route path='/api/v1/bookmarks' element={<div>Bookmarks</div>}/>
      </Routes>
    </div>
  );
}

export default App;
