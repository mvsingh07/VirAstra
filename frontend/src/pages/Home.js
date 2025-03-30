import React, { Component } from 'react';

class Home extends Component {
    render() {
        
        return (
            
<div>
{/* 
     <div id="preloder">
        <div className="loader"></div>
      </div>  */}
    

  {/* //hero section begin */}
  <section className="hero-section">
          {/* <div className="hs-slider owl-carousel"> */}
      <div className='dash-hero'>
      <div className="hs-item set-bg"  style={{background: 'url(./assets/img/unsplash.jpg) center center / cover no-repeat',width: '100%',height: '100vh', }}>
  
        <div className="container">
            <div className="row">
               <div className="col-lg-7">
               <div className="hero-text">
               <span>Enlighten your life with</span>
               
               <h1>Isometric Adhyatama Sustenance</h1>
                <a href="/Login" className="primary-btn my-profile"> My Profile</a>
                </div>
                </div>
              </div>
            </div>
      </div>
            
    
           {/* </div> */}
           </div>
      </section>

        {/* // hero section end */}
       
  
 
        <div className="box-container">
        <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center" style={{background: ' url(./images/iso_1.jpg)center center / cover no-repeat' }}>
            <div className="inner color-white">
              <h3 className="flip-box-header dark-gradient">ISOMETRIC</h3>
              <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>
            </div>
          </div>
          <div className="flip-box-back text-center" style={{background: 'linear-gradient(to left, #303030bd 50%, #6464649c 77%, #303030bd 100%), url(./images/iso_2.jpg)center center / cover no-repeat'}}>
            <div className="inner color-white">
              <h3 className="flip-box-header">ISOMETRIC</h3>
              <p>Take care of your body, its the only place your soul has to live In.</p>
              <button className="flip-box-button"><a href="/Isometric">Learn More</a> </button>
            </div>
          </div>
        </div>
        </div>
        <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center" style={{background: 'url(./images/adh_1.jpg)center center / cover no-repeat'}}>
            <div className="inner color-white">
              <h3 className="flip-box-header dark-gradient">ADHYATAMA</h3>
              <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>
            </div>
          </div>
          <div className="flip-box-back text-center" style={{background: 'linear-gradient(to left, #303030bd 50%, #6464649c 77%, #303030bd 100%), url(./images/adh_2.jpg)center center / cover no-repeat'}}>
            <div className="inner color-white">
              <h3 className="flip-box-header">ADHYATAMA</h3>
              <p>Connect to your inner self to explore whats out there.</p>
              <button className="flip-box-button"><a href="/Adhyatma">Learn More</a></button>
            </div>
          </div>
        </div>
        </div>
        <div className="box-item">
        <div className="flip-box">
          <div className="flip-box-front text-center" style={{background: 'url(./images/diet_1.jpg)center center / cover no-repeat'}}>
            <div className="inner color-white">
              <h3 className="flip-box-header dark-gradient">SUSTENANCE</h3>
              <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>
            </div>
          </div>
          <div className="flip-box-back text-center" style={{background: 'linear-gradient(to left, #303030bd 50%, #6464649c 77%, #303030bd 100%), url(./images/diet_2.jpg)center center / cover no-repeat'}}>
            <div className="inner color-white">
              <h3 className="flip-box-header">SUSTENANCE</h3>
              <p>Our behaviour and our body is influent by what we eat, choose wisely.</p>
              <button className="flip-box-button"> <a href="/Sustenance">Learn More</a></button>
            </div>
          </div>
        </div>
        </div>
        </div>


          {/* choose us section begin*/}
        <section class="choseus-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Why chose us?</span>
                        <h2>PUSH YOUR LIMITS FORWARD</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                    <i class="fas fa-brain"></i>
                        <h4>Mind</h4>
                        <p>Learn to control the power of your subconcious mind with us.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                    <i class="fas fa-apple-whole"></i>
                        <h4>Meals</h4>
                        <p>We are what we eat, choose green, don't be mean.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                    <i class="fa-solid fa-dumbbell"></i>
                        <h4>Body</h4>
                        <p>Take care of your body, its the only place your soul have to live in.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                        <i class="fa-solid fa-fire-flame-curved"></i>
                        <h4>Soul</h4>
                        <p>Learn to connect with your inner self and discover the real purpose of your life with us.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* choose us section end*/}


{/*  classes section begin*/}
    <section class="classes-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Classes</span>
                        <h2>WHAT WE CAN OFFER</h2>
                    </div>
                </div>
            </div>
            <div class="row">
  <div class="col-lg-4 col-md-6">
    <div class="class-item">
      <div class="ci-pic">
        <img src="./imgOne1.jpg" alt="error_in_loading"/>
      </div>
      <div class="ci-text">
        <span>Calisthenics</span>
        <h5>Fitness</h5>
        <a href="https://www.healthline.com/health/fitness-exercise/calisthenics"><i class="fa fa-angle-right"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6">
    <div class="class-item">
      <div class="ci-pic">
        <img src="./sustenance_2.jpg" alt="error_in_loading"/>
      </div>
      <div class="ci-text">
        <span>Improves way of life</span>
        <h5>Yoga</h5>
        <a href="https://www.health.harvard.edu/staying-healthy/yoga-benefits-beyond-the-mat"><i class="fa fa-angle-right"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-6">
    <div class="class-item">
      <div class="ci-pic">
        <img src="./img5.jpg" alt="error_in_loading"/>
      </div>
      <div class="ci-text">
        <span>Nutrition</span>
        <h5>Go Green</h5>
        <a href="https://www.medicalnewstoday.com/articles/324433"><i class="fa fa-angle-right"></i></a>
      </div>
    </div>
  </div>
</div>

<div class="row">
    <div class="col-lg-4 col-md-6">
        <div class="class-item">
            <div class="ci-pic">
                <img src="./psychology.webp" alt="error_in_loading"/>
            </div>
            <div class="ci-text">
                <span>Psychology</span>
                <h5>Therapy classes</h5>
                <a href="https://www.psychologytoday.com/us/therapists"><i class="fa fa-angle-right"></i></a>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="class-item">
            <div class="ci-pic">
                <img src="./spirituality.jpg" alt="error_in_loading"/>
            </div>
            <div class="ci-text">
                <span>Bhagwat Gita</span>
                <h5>Learn about the purpose of life</h5>
                <a href="https://www.hinduwebsite.com/gita.asp"><i class="fa fa-angle-right"></i></a>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="class-item">
            <div class="ci-pic">
                <img src="./comm.jpeg" alt="error_in_loading"/>
            </div>
            <div class="ci-text">
                <span>Communication</span>
                <h5>Learn to express yourself</h5>
                <a href="https://www.lifehack.org/articles/communication/10-simple-tips-improve-your-communication-skills-today.html"><i class="fa fa-angle-right"></i></a>
            </div>
        </div>
    </div>              
</div>

        </div>
    </section>
{/* classes section end*/}


{/* team section section begin*/}
<section class="team-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="team-title">
                        <div class="section-title">
                            <span>Our Team</span>
                            <h2>TRAIN WITH EXPERTS</h2>
                        </div>
                        <a href="/Contact" class="primary-btn btn-normal appoinment-btn">Contact</a>
                    </div>
                </div>
            </div>
            <div class="row">
                {/* <div class="ts-slider owl-carousel"> */}
                    <div class="col-lg-4">
                        <div class="ts-item set-bg" style={{background:'url(./images/team-1.jpg)'}}>
                            <div class="ts_text">
                                <h4>Emma </h4>
                                <span>Yoga Instructor</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="ts-item set-bg" style={{background:'url(./images/team-2.jpg)'}}>
                            <div class="ts_text">
                                <h4>Bruce</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="ts-item set-bg" style={{background:'url(./images/team-3.jpg)'}}>
                            <div class="ts_text">
                                <h4>Scarlett</h4>
                                <span>Nutritionist</span>
                            </div>
                        </div>
                    </div>
                   
                    
                   
                {/* </div> */}
            </div>
        </div>
    </section>


{/* team section end*/}

{/* Get in touch section end*/}
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


{/* Get in touch section end*/}

{/* Footer touch section begin*/}

<section class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="fs-about">
                        <div class="fa-logo">
                            <a href="/Home"><img src="/assets/img/IASLogo-white.png" alt="error_in_loading"/></a>
                        </div>
                        <p>IAS stands for Isometric which is a category of Physical exercises,Adhyatama which 
                            is related to inner enlightenment and sustenance which means Nutrition</p>
                        <div class="fa-social">
                            <a href="/Home"><i class="fab fa-facebook-f"></i></a>
                            <a href="/Home"><i class="fab fa-twitter"></i></a>
                            <a href="/Home"><i class="fab fa-youtube"></i></a>
                            <a href="/Home"><i class="fab fa-instagram"></i></a>
                            <a href="/Home"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="fs-widget">
                        <h4>Useful links</h4>
                        <ul>
                            <li><a href="/Home">About</a></li>
                            <li><a href="/Home">Blog</a></li>
                            <li><a href="/Home">Classes</a></li>
                            <li><a href="/Home">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="fs-widget">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/Home">Login</a></li>
                            <li><a href="/Home">My account</a></li>
                            <li><a href="/Home">Subscribe</a></li>
                            <li><a href="/Home">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="fs-widget">
                        <h4>Tips & Guides</h4>
                        <div class="fw-recent">
                            <h6><a href="/Home">Physical fitness may help prevent depression, anxiety</a></h6>
                            <ul>
                                <li>3 min read</li>
                                <li>20 Comment</li>
                            </ul>
                        </div>
                        <div class="fw-recent">
                            <h6><a href="/Home">Fitness: The best exercise to lose belly fat and tone up...</a></h6>
                            <ul>
                                <li>3 min read</li>
                                <li>20 Comment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="copyright-text">
                        <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This Project is made with <i class="fa fa-heart" aria-hidden="true"></i> by IAS Team.
</p>
                    </div>
                </div>
            </div>
        </div>
    </section>



{/* footer touch section end*/}

</div>
    



 
     );
}}
export default Home;