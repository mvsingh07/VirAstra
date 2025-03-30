import React, { Component } from 'react';

class Isometric extends Component {
    render() {
        return (
            <div>
                <>
  <title>Isometric | IAS</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    rel="shortcut icon"
    href="./assets/img/IASLogo-white.png"
    type="image/x-icon"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Muli:300,400,700,900"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="./assets/flaticon/font/flaticon.css" />
  <link rel="stylesheet" href="css/aos_isometric.css" />
  <link rel="stylesheet" href="./css/Adhayatma_style.css" />
  <link rel="stylesheet" href="css/style_isometric.css" />
  <div className="site-wrap">
    {/* Navigation Menu  */}
    <nav className="top-nav-bar" data-setbg="./image_3.jpg">
      <img src="./assets/img/IASLogoDark.png" className="nav-heading" alt="" />
      <div className="link-container">
        <ul className="nav-bar">
          <li>
            <a href="/Isometric" className="active">
              Isometric
            </a>
          </li>
          <li>
            <a href="/Adhyatma">Adhyatama</a>
          </li>
          <li>
            <a href="/Sustenance">Sustenance</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="hero-img-iso">
      <div className="hero-text">
        <h2>Take Care Of Your Body</h2>
        <p>It is the only place your soul has to live in.</p>
      </div>
    </div>
    <div
      className="bgimg"
      style={{
        backgroundImage: 'url("./assets/img/Isometric/bg_3.jpg")',
        backgroundAttachment: "fixed"
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-7">
            <h2 className="">Every Step Counts</h2>
            <p className="lead mx-auto desc mb-5">
              Sometimes, Slowly is the fastest way to get somewhere you want to
              be
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Slider */}
    <div className="owl-carousel nonloop-block-14 block-14" data-aos="fade">
      <div className="slide">
        <div className="ftco-feature-1">
          <span className="icon flaticon-fit" />
          <div className="ftco-feature-1-text">
            <h2>Calishthenics</h2>
            <p>
              Calishthenics means exercising using bodyweight, these exercises
              are very effective for strength training
            </p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="ftco-feature-1">
          <span className="icon flaticon-gym-1" />
          <div className="ftco-feature-1-text">
            <h2>Weight Lifting</h2>
            <p>
              Most famous these days, these exercises are very effective for
              gaining muscles
            </p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="ftco-feature-1">
          <span className="icon flaticon-gym" />
          <div className="ftco-feature-1-text">
            <h2>Desi workout</h2>
            <p>
              Conventional methods never fails to amaze us with their results,
              they are still the best.
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="ftco-feature-1">
          <span className="icon flaticon-vegetables" />
          <div className="ftco-feature-1-text">
            <h2>Kid Mode</h2>
            <p>
              Include basic flexibilty exercises to help children grow,
              presented in the form of games
            </p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="ftco-feature-1">
          <span className="icon flaticon-stationary-bike" />
          <div className="ftco-feature-1-text">
            <h2>Athletics</h2>
            <p>
              These include exercises that are mainly cardio bases, also
              includes gymnastics as well
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="bgimg"
      style={{
        backgroundImage: 'url("./assets/img/Isometric/bg_2.jpg")',
        backgroundAttachment: "fixed"
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-7">
            <h2 className="">Get The Result You Want</h2>
            <p className="lead mx-auto desc mb-5">
              With any of the above program you can achieve your goal like never
              before
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section" id="schedule-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8  section-heading">
            <span className="subheading">Fitness Schedule</span>
            <h2 className="heading mb-3">Schedule</h2>
            <p>
              Choose Displicine over Motivation, You can not be motivated enough
              evryday, but if you are disciplined enough you will do your work
              no matter what.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="nav days d-flex" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="sunday-tab"
                  data-toggle="tab"
                  href="#nav-sunday"
                  role="tab"
                  aria-controls="sunday"
                  aria-selected="true"
                >
                  Calisthenics
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="monday-tab"
                  data-toggle="tab"
                  href="#nav-monday"
                  role="tab"
                  aria-controls="monday"
                  aria-selected="false"
                >
                  Weight Lifting
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tuesday-tab"
                  data-toggle="tab"
                  href="#nav-tuesday"
                  role="tab"
                  aria-controls="tuesday"
                  aria-selected="false"
                >
                  Desi Workout
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="wednesday-tab"
                  data-toggle="tab"
                  href="#nav-wednesday"
                  role="tab"
                  aria-controls="wednesday"
                  aria-selected="false"
                >
                  Kid Mode
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="thursday-tab"
                  data-toggle="tab"
                  href="#nav-thursday"
                  role="tab"
                  aria-controls="thursday"
                  aria-selected="false"
                >
                  Athletics
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="nav-sunday"
            role="tabpanel"
            aria-labelledby="nav-sunday-tab"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Chest Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_2.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Back Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_3.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Arms Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_4.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Shoulders Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Legs Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Chest Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_2.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Back Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_3.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Arms Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_4.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Shoulders Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Legs Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-monday"
            role="tabpanel"
            aria-labelledby="nav-monday-tab"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_2.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Chest Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Back Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_3.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Arms Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_4.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html"> Shoulder Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html"> Legs Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_3.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Chest Workout 2</a>
                    </h2>
                    <span>40 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html"> Back Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_2.jpg" alt="not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html"> Arms Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_4.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Shoulder Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html"> Legs Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-tuesday"
            role="tabpanel"
            aria-labelledby="nav-tuesday-tab"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Chest Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_2.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Back Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_3.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Arms Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_4.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Shoulders Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Legs Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Chest Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_2.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Back Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_3.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Arms Workout 2</a>
                    </h2>
                    <span>By Justin Daniel</span>,<span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_4.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Shoulders Workout 2</a>
                    </h2>
                    <span>By Justin Daniel</span>,<span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Legs Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-wednesday"
            role="tabpanel"
            aria-labelledby="nav-wednesday-tab"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_2.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Chest Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Back Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_3.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Arms Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_4.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html"> Shoulder Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html"> Legs Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_3.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Chest Workout 2</a>
                    </h2>
                    <span>40 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html"> Back Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_2.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html"> Arms Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_4.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Shoulder Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html"> Legs Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-thursday"
            role="tabpanel"
            aria-labelledby="nav-thursday-tab"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Chest Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_2.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Back Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_3.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Arms Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_4.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Shoulders Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Legs Workout 1</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Chest Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_2.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Back Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_3.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Arms Workout 2</a>
                    </h2>
                    <span>By Justin Daniel</span>,<span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_4.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Shoulders Workout 2</a>
                    </h2>
                    <span>By Justin Daniel</span>,<span>30 minutes</span>
                  </div>
                </div>
                <div className="class-item d-flex align-items-center">
                  <a href="single.html" className="class-item-thumbnail">
                    <img src="./assets/img/Isometric/img_1.jpg" alt="Not found" />
                  </a>
                  <div className="class-item-text">
                    <h2>
                      <a href="single.html">Legs Workout 2</a>
                    </h2>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="bgimg"
      style={{
        backgroundImage: 'url("./assets/img/Isometric/bg_1.jpg")',
        backgroundAttachment: "fixed"
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-7">
            <h2 className="">Your Fitness Partner Where Ever You Are</h2>
            <p className="lead mx-auto desc mb-5">
              Take Care of your body, its the only place your soul have to live
              in
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p>
        Copyright © 2023, All Rights Reserved -{" "}
        <a href="./index_Home.html">IAS</a>
      </p>
    </footer>
  </div>
  {/* .site-wrap */}
</>

            </div>
        );
    }
}

export default Isometric;