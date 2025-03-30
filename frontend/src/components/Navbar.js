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
<nav className="navbar navbar-dark bg-dark fixed-top mobile-menu">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Home">
    <img src="./assets/img/IASLogo-white.png" alt="" width="80px"/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex={-1}
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
          IAS MENU
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/Home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AboutUs">
              About US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Classes">
              Classes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Gallery">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Services">
              Services
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/Home"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="./class-timetabel.html">
                 Classes Timetable
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/Bmi">
                  Bmi Calculator
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/Blogs">
                  Our Blogs
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
</nav>
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