import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div>
            
 

  {/* Breadcrumb Section Begin */}
  <div className="set_bg image-container">
    <div className="image-caption"> </div>
    <img src="./assets/img/gallery/gallery-51.jpg" alt="image_link_broken" />
  </div>
  {/* Breadcrumb Section End */}
  {/* ChoseUs Section Begin */}
  <section className="choseus-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Why chose us?</span>
            <h2>PUSH YOUR LIMITS FORWARD</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            {/* <span class="flaticon-034-stationary-bike"></span> */}
            <h4>Techniques</h4>
            <p>
              Our Techniques whether for exercises or meditation or for
              preparing nutrition plans, everything is done using well proven
              methods{" "}
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            {/* <span class="flaticon-033-juice"></span> */}
            <h4>Healthy nutrition plan</h4>
            <p>
              The nutrition plans provided will be made using your data that you
              will provide while registering with, which means it will be a
              unique diet plan only for you
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            {/* <span class="flaticon-002-dumbell"></span> */}
            <h4>Professional training plan</h4>
            <p>
              The Isometric movement are very effective when it comes to
              strength and muscle buidling, but it need to be taken care of very
              intensively while training.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="cs-item">
            {/* <span class="flaticon-014-heart-beat"></span> */}
            <h4>Unique to your needs</h4>
            <p>
              This program is very unique as it does not train you using
              bodybuilder's method but a normal person living a normal healthy
              life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ChoseUs Section End*/}
  {/* About US Section Begin */}
  <section className="aboutus-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div
            className="about-video set-bg"
            data-setbg="./assets/img/img5.webp"
          >
            <a
              href="https://youtu.be/UItWltVZZmE"
              className="play-btn video-popup"
            >
              <i className="fa fa-caret-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="about-text">
            <div className="section-title">
              <span>About Us</span>
              <h2>What we want to do</h2>
            </div>
            <div className="at-desc">
              <p>
                The purpose of IAS is to change the unhealthy lifestyle of the
                youth and help them build good habits. The Isometric part will
                help them stay fit Physically , the adhayatama part will help
                them connect to their inner self and find their purpose in life,
                and the sustenance part will help[ them understand the
                importance of what we eat and how to eat for theuir body goals]
              </p>
            </div>
            <div className="about-bar">
              <div className="ab-item">
                <p>Physique</p>
                <div id="bar1" className="barfiller">
                  <span className="fill" data-percentage={80} />
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                </div>
              </div>
              <div className="ab-item">
                <p>Meditation</p>
                <div id="bar2" className="barfiller">
                  <span className="fill" data-percentage={85} />
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                </div>
              </div>
              <div className="ab-item">
                <p>Nutrition</p>
                <div id="bar3" className="barfiller">
                  <span className="fill" data-percentage={75} />
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About US Section End */}
  <section className="developers">
    <div className="container">
      <div className="row">
        <div className="container">
          <h3 className="text-center">About Developers</h3>
          <div className="row my-5 justify-content-center">
            <div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
              <div className="email-signature1">
                <div className="signature-content">
                  <div className="signature-details">
                    <h2 className="title">Manvir Singh</h2>
                    <span className="post"> Web-Developer / Founder  </span>
                  </div>
                  <ul className="inner-content">
                    <li>
                      <span className="fa fa-map-marker fa-lg text-white" />{" "}
                      143001, Amritsar
                    </li>
                    <li>
                      <span className="fa fa-mobile fa-lg text-white" />{" "}
                      6283849317
                    </li>
                    <li>
                      <span className="fa fa-envelope text-white" />{" "}
                      mvsingh@gmail.com
                    </li>
                    <li>
                      <span className="fa fa-globe text-white" />{" "}
                      linktr.ee/Mv_singh
                    </li>
                  </ul>
                </div>
                <div className="signature-img">
                  <img src="./Manvir.jpg" alt="not found" />
                </div>
                <ul className="icon">
                  <li>
                    <a href="/Home">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/Home">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/Home">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5 justify-content-center">
            <div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
              <div className="email-signature1">
                <div className="signature-content">
                  <div className="signature-details">
                    <h2 className="title">Yuvraj Singh</h2>
                    <span className="post">Web Developer / Co-Founder</span>
                  </div>
                  <ul className="inner-content">
                    <li>
                      <span className="fa fa-map-marker fa-lg text-white" />{" "}
                      143102, Ajnala
                    </li>
                    <li>
                      <span className="fa fa-mobile fa-lg text-white" />{" "}
                      8699779446
                    </li>
                    <li>
                      <span className="fa fa-envelope text-white" />{" "}
                      yuvi1707@hotmail.com
                    </li>
                    <li>
                      <span className="fa fa-globe text-white" />{" "}
                      beacons.ai/yuvraj08
                    </li>
                  </ul>
                </div>
                <div className="signature-img">
                  <img src="./assets/img/yuvraj.jpg" alt="" />
                </div>
                <ul className="icon">
                  <li>
                    <a href="/Home">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="/Home">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/Home">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Team Section Begin */}
  <section className="team-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="team-title">
            <div className="section-title">
              <span>Our Team</span>
              <h2>TRAIN WITH EXPERTS</h2>
            </div>
            <a href="/Register" className="primary-btn btn-normal appoinment-btn">
              Register
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="ts-slider owl-carousel">
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="./images/team-1.jpg">
              <div className="ts_text">
                <h4>Emma</h4>
                <span>Yoga Instructor</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="./images/team-2.jpg">
              <div className="ts_text">
                <h4>Bruce</h4>
                <span>Gym Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ts-item set-bg" data-setbg="./images/team-3.jpg">
              <div className="ts_text">
                <h4>Scarlett</h4>
                <span>Nutritionist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Team Section End */}
  {/* Banner Section Begin */}
  <section
    className="banner-section set-bg"
    data-setbg="./assets/img/dark-hero.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="bs-text">
            <h2>registration now to get more deals</h2>
            <div className="bt-tips">
              Where health, beauty and fitness meet.
            </div>
            <a href="/Register" className="primary-btn  btn-normal">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Banner Section End */}
  {/* Testimonial Section Begin
    <section class="testimonial-section spad">
  <div class="container">
      <div class="row">
          <div class="col-lg-12">
              <div class="section-title">
                  <span>Testimonial</span>
                  <h2>Our cilent say</h2>
              </div>
          </div>
      </div>
      <div class="ts_slider owl-carousel">
          <div class="ts_item">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <div class="ti_pic">
                          <img src="img/testimonial/testimonial-1.jpg" alt="">
                      </div>
                      <div class="ti_text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                              gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                          <h5>Marshmello Gomez</h5>
                          <div class="tt-rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="ts_item">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <div class="ti_pic">
                          <img src="img/testimonial/testimonial-2.jpg" alt="">
                      </div>
                      <div class="ti_text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                              gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                          <h5>Marshmello Gomez</h5>
                          <div class="tt-rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </section>
   Testimonial Section End */}
  {/* Get In Touch Section Begin */}
  <div className="gettouch-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa fa-map-marker" />
            <p>
              786 IAS Fitness, Ranjit Avenue
              <br /> Amritsar 143001
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa fa-mobile" />
            <ul>
              <li>628-384-9317</li>
              <li>869-977-9446</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gt-text email">
            <i className="fa fa-envelope" />
            <p>contact.ias@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Get In Touch Section End */}
  {/* Footer Section Begin */}
  <section className="footer-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="fs-about">
            <div className="fa-logo">
              <a href="/Home">
                <img src="./assets/img/IASLogo.png" alt="not" />
              </a>
            </div>
            <p>
              IAS stands for Isometric which is a category of Physical
              exercises, Adhyatama which is related to inner enlightenment and
              sustenance which means Nutrition
            </p>
            <div className="fa-social">
              <a href="/Home">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="/Home">
                <i className="fab fa-twitter" />
              </a>
              <a href="/Home">
                <i className="fab fa-youtube" />
              </a>
              <a href="/Home">
                <i className="fab fa-instagram" />
              </a>
              <a href="/Home">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="fs-widget">
            <h4>Useful links</h4>
            <ul>
              <li>
                <a href="/AboutUs">About</a>
              </li>
              <li>
                <a href="/Blogs">Blog</a>
              </li>
              <li>
                <a href="/Classes">Classes</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="fs-widget">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="/Login">Login</a>
              </li>
              <li>
                <a href="/Login">My account</a>
              </li>
              <li>
                <a href="/Home">Subscribe</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="fs-widget">
            <h4>Tips &amp; Guides</h4>
            <div className="fw-recent">
              <h6>
                <a href="https://iashealth.medium.com/physical-fitness-may-help-prevent-depression-anxiety-34798974baf7">
                  Physical fitness may help prevent depression, anxiety
                </a>
              </h6>
              <ul>
                <li>3 min read</li>
                <li>20 Comment</li>
              </ul>
            </div>
            <div className="fw-recent">
              <h6>
                <a href="https://iashealth.medium.com/fitness-the-best-exercise-to-lose-belly-fat-and-tone-up-49b18c4f793e">
                  Fitness: The best exercise to lose belly fat and tone up...
                </a>
              </h6>
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
            <p>
              Copyright © All rights reserved | This Project is made with{" "}
              <i className="fa fa-heart" aria-hidden="true" /> by Team IAS
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer Section End */}
  {/* Js Plugins */}


            </div>
        );
    }
}

export default AboutUs;