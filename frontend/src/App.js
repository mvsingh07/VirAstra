import { Fragment } from 'react';
// import Main from './layouts/Main';
import Profile from './Profile';
import Public from './layouts/Public';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Classes from './pages/Classes';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import MyProfile from './pages/MyProfile';
import Contact from './pages/Contact';
import Login from './pages/Login'; 
import Bmi from './pages/Bmi';
import Blogs from './pages/Blogs';
//import AuthGuard from './AuthGuard';
import Isometric from './pages/Isometric';
import Adhyatma from './pages/Adhyatma';
import Sustenance from './pages/Sustenance';
import Auth from './layouts/Auth';
import Bmicalc from './pages/Bmicalc';
import Register from './pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Timetable from './pages/Timetable';
import ForgotPassword from './pages/ForgotPassword';
import Private from './layouts/Private';

function App() {
  return (
    <>
        <Routes>

            {/* <Route path="/" element={<AuthGuard component={Main}/>}>
                 <Route path="/MyProfile" element={localStorage.getItem("authToken") ? <MyProfile/> : <Navigate to="/Login" />} />            */}
            {/* </Route> */}
            <Route path="/" element ={<Private/>}>
            <Route path="/MyProfile" element={<MyProfile/>} />
            
              </Route>
            

            <Route path="/" element={<Auth/>}>              
                
                <Route path='/Bmicalc' element={<Bmicalc/>}/>        
                <Route path="/Register" element={<Register/>}/>      
                <Route path='/Profile' element={<Profile/>}/>  
                <Route path='/Isometric' element={<Isometric/>}/>                      
                <Route path='/Adhyatma' element={<Adhyatma/>}/>  
                <Route path='/Sustenance' element={<Sustenance/>}/>  
                <Route exact path='/Login' element={<Login />} />
            </Route>

            <Route path="/" element={<Public/>}>
                <Route index = "True"  element={<Home/>}/>
               
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Bmi' element={<Bmi/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/ForgotPassword' element={<ForgotPassword/>}/>   
                <Route path="/Classes" element={<Classes/>} />    
                <Route path="/AboutUs" element={<AboutUs/>} />    
                <Route path="/Gallery" element={<Gallery/>} />    
                <Route path="/Services" element={<Services/>} />  
                <Route path="/Timetable" element={<Timetable/>} />  
                <Route path="/Blogs" element={<Blogs/>}/>
            </Route>

        </Routes>
        <ToastContainer />
    </>
    
  );
}

export default App;
