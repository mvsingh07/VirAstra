import {useState } from 'react';
import Main from './layouts/Main';
import Profile from './Profile';
import Public from './layouts/Public';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import Contact from './pages/Contact';
import Login from './pages/Login'; 
import Bmi from './pages/Bmi';
import AuthGuard from './AuthGuard';
import Isometric from './pages/Isometric';
import Auth from './layouts/Auth';
import Bmicalc from './pages/Bmicalc';
import Register from './pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    < >
        <Routes>
            <Route path="/" element={<AuthGuard isAuthenticated={isAuthenticated} component={Main}/>}>
              <Route path="/MyProfile" element={<MyProfile/>}/> 
            </Route>

            <Route path="/" element={<Public/>}>
                <Route index = "True"  element={<Home/>}/>
                <Route path='/Isometric' element={<Isometric/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Bmi' element={<Bmi/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Profile' element={<Profile/>}/>
            </Route>

            <Route path="/" element={<Auth setIsAuthenticated={setIsAuthenticated}/>}>
              <Route exact path='/Login' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
              <Route path="/Register" element={<Register/>}/>
            </Route>

            <Route path="/" element={<AuthGuard isAuthenticated={isAuthenticated} component={Auth}/>}>
              <Route path='/Bmicalc' element={<Bmicalc/>}/>
            </Route>
        </Routes>
        <ToastContainer />
    </>
  );
}

export default App;
