import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import calculateBMI from './bmiCal';
class Bmi extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        weight: '',
        height: '',
        result: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleWeightChange = this.handleWeightChange.bind(this);
      this.handleHeightChange = this.handleHeightChange.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const bmi = calculateBMI(parseFloat(this.state.weight), parseFloat(this.state.height));
      this.setState({ result: `Your BMI is ${bmi}` });
    }
  
    handleWeightChange(e) {
      this.setState({ weight: e.target.value });
    }
  
    handleHeightChange(e) {
      this.setState({ height: e.target.value });
    }
    
  render() {
    return (
      <div>
 <div id="preloder">
        <div className="loader"></div>
      </div> 

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
                <li><Link className="nav-link" to="/Register"> <div className="menu-register">Register</div> </Link></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>

    </div>

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
                         <li ><a href="/Home">Home</a></li>
                         <li><a href="/AboutUs">About Us</a></li>
                         <li><a href="/Classes">Classes</a></li>      
                         <li><a href="/Gallery">Gallery</a></li>
                         <li><a href="/Services">Services</a></li>
                         <li className="active"><a href="/Home">Pages</a>
                         <ul className="dropdown">
                                    <li><a href="/Timetable">Class Timetable</a></li>
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


     <section className="breadcrumb-section set-bg"style={{background: 'url(./assets/img/bmi-cal.jpg) center center / cover no-repeat' }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb-text">
                        <h1>BMI Calculator</h1>
                        <div className="bt-option">
                            <a href="/Home">Home</a>
                            <a href="/Home">Pages</a>
                            <span>BMI Calculator</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    {/* bmi cal begin */}
    <section className="bmi-calculator-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title chart-title">
                        <span>check your body</span>
                        <h2>BMI CALCULATOR CHART</h2>
                    </div>
                    <div className="chart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Bmi</th>
                                    <th>WEIGHT STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="point">Below 18.5</td>
                                    <td>Underweight</td>
                                </tr>
                                <tr>
                                    <td className="point">18.5 - 24.9</td>
                                    <td>Healthy</td>
                                </tr>
                                <tr>
                                    <td className="point">25.0 - 29.9</td>
                                    <td>Overweight</td>
                                </tr>
                                <tr>
                                    <td className="point">30.0 - and Above</td>
                                    <td>Obese</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section-title chart-calculate-title">
                        <span>check your body</span>
                        <h2>CALCULATE YOUR BMI</h2>
                    </div>
                    <div className="chart-calculate-form">
                        <p>BMI stands for Body Mass Index, which is a numerical value calculated based on a person's weight and height. 
                            It is a simple and commonly used measure of body fatness, which helps to determine whether a person is underweight, 
                            normal weight, overweight, or obese.</p>
                        <form onSubmit={this.handleSubmit} className="form-container">
                            <div  className="table-row">  
                                <div className="col-sm-6">
                                    <input type="number" placeholder="Height(metres)" value={this.state.height} onChange={this.handleHeightChange}/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="number" placeholder="Weight(kg)" value={this.state.weight} onChange={this.handleWeightChange}/>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit"  className="calculate-button"  >Calculate</button>
                                </div>
                               
                            <p className="result">{this.state.result}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>



   {/* bmi cal end */}


{/* get in touch section begin */}
<div class="gettouch-section">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="gt-text">
                    <i class="fas fa-location-dot"></i>
                        <p>IAS,Ranjit Avenue,Amritsar,Panjab<br/> 143001</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="gt-text">
                    <i class="fas fa-mobile"></i>
                        <ul>
                            <li>+91 628389317</li>
                            <li>+91 869979446</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="gt-text email">
                    <i class="fas fa-envelope"></i>
                        <p>Support.ias@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



{/* get in touch section end */}

{/* footer begin */}
<section className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                   <div className="fs-about">
                        <div className="fa-logo">
                            <a href="/Home"><img src="./assets/img/IASLogo.png" alt="error_in_loading"/></a>
                        </div>
                        <p>IAS stands for Isometric which is a category of Physical exercises,Adhyatama which is related to inner enlightenment and sustenance which means Nutrition</p>
                        <div className="fa-social">
                            <a href="/Home"><i class="fab fa-facebook-f"></i></a>
                            <a href="/Home"><i class="fab fa-twitter"></i></a>
                            <a href="/Home"><i class="fab fa-youtube"></i></a>
                            <a href="/Home"><i class="fab fa-instagram"></i></a>
                            <a href="/Home"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="fs-widget">
                        <h4>Useful links</h4>
                        <ul>
                             <li><a href="/Login">Login</a></li>
                            <li><a href="/Login">My account</a></li>
                            <li><a href="/Login">Subscribe</a></li>
                            <li><a href="/Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="fs-widget">
                        <h4>Support</h4>
                        <ul>
                             <li><a href="/Home">Login</a></li>
                            <li><a href="/Home">My account</a></li>
                            <li><a href="/Home">Subscribe</a></li>
                            <li><a href="/Home">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="fs-widget">
                        <h4>Tips & Guides</h4>
                        <div className="fw-recent">
                            <h6><a href="/Home">Physical fitness may help prevent depression, anxiety</a></h6>
                            <ul>
                                <li>3 min read</li>
                                <li>20 Comment</li>
                            </ul>
                        </div>
                        <div className="fw-recent">
                            <h6><a href="/Home">Fitness: The best exercise to lose belly fat and tone up...</a></h6>
                            <ul>
                                <li>3 min read</li>
                                <li>20 Comment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="copyright-text">
                        <p>  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This Project is made with <i className="fa fa-heart" aria-hidden="true"></i> by IAS Team </p>
                    </div>
                </div>
            </div>
        </div>
    </section>


{/* footer end */}


        
      </div>
    );
  }
}

export default Bmi;