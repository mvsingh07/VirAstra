import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
 
     onclickHandler=()=>{
         this.props.clickRef();         
     }
             
    render() {
        return (

            <div>           
{/* offcanvas section begin */}
{/* <div className='fixed_position'>   */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
          <div className="canvas-close">
              <i className="fa fa-close"></i>
          </div>
  <nav className="canvas-menu mobile-menu">
              <ul>
                  <li><a href="/Home">Home</a></li>
                  <li><a href="/AboutUs">About Us</a></li>
                  <li><a href="/Classes">Classes</a></li>
                  <li><a href="/Gallery">Gallery</a></li>
                  <li><a href="/Services">Services</a></li>
                  <li><a href="/Home">Pages</a>
                      <ul className="dropdown">
                          <li><a href="/Timetable">Classes Time-table</a></li>
                          <li><a href="/Bmi">Bmi calculate</a></li>
                          <li><a href="/Blogs">Our blog</a></li>
                      </ul>
                  </li>
                  <li><a href="/Contact">Contact</a></li>
                  <li><Link className="menu-login" to="/Login">Log In</Link></li>
                  <li><Link className="menu-register" to="/Register"> <div className="menu-register">Register</div> </Link></li>
              </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
  
      </div>
      {/* </div> */}
        {/* header section begin */}
       <header className="header-section">
       <div className="container-fluid">
           <div className="row">
               <div className="col-lg-2">
                   <div className="logo">
                       <a href="/Home">
                           <img src="./assets/img/IASLogoDark.png" alt="huihui"/>
                           
                       </a>
                   </div>
               </div>
              
               <div className="col-lg-7">
                   <nav className="nav-menu">
                       <ul>
                           <li className="active"><a href="/Home">Home</a></li>
                           <li><a href="/AboutUs">About Us</a></li>
                           <li><a href="/Classes">Classes</a></li>      
                           <li><a href="/Gallery">Gallery</a></li>
                           <li><a href="/Services">Services</a></li>
                           <li><a href="/Home">Pages</a>
                           <ul className="dropdown">
                                      <li><a href="/Timetable">Classes timetable</a></li>
                                      <li><a href="/Bmi">Bmi calculate</a></li>
                                      <li><a href="/Blogs">Our blog</a></li>
                                  </ul>
                           </li>
                           <li><a href="/Contact">Contact</a></li>
                       </ul>
                   </nav>
               </div>
               <div className="col-lg-3">
                   <div className="top-option">
                       <div className="to-social">
                           <Link className="menu-login" to="/Login"> Log In </Link>
                           
                          <span>   |</span>
  
  
                    <Link  to="/Register"> <div className="menu-register">  Register</div> </Link>
  
  
                       </div>
                   </div>
               </div>
           </div>
           <div className="canvas-open">
               <i className="fa fa-bars"></i>
            </div>
         </div>
         
       </header>
     {/* <!-- Header End --> */}
     </div>

        );
    }
}

export default Navbar;