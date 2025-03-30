import React, { Component } from 'react';

class Timetable extends Component {
    render() {
        return (
            <div>
                <>
  <meta charSet="UTF-8" />
  <meta name="description" content="Gym Project" />
  <meta name="keywords" content="Gym, unica, creative, html" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Class Time-Table | IAS</title>
  {/* Breadcrumb Section Begin */}
  <section
    className="breadcrumb-section set-bg"
    style={{background: 'url(./assets/img/speaker.jpg) center center / cover no-repeat',width: '100%',height: '120vh', }}>
  
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h1>Timetable</h1>
            <div className="bt-option">
              <a href="/Home">Home</a>
              <a href="/Timetable">Pages</a>
              <span>Time-Table</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Class Timetable Section Begin */}
  <section className="class-timetable-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title">
            <span>Find Your Time</span>
            <h2>Find Your Time</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="table-controls">
            <ul>
              <li className="active" data-tsfilter="all">
                All event
              </li>
              <li data-tsfilter="fitness">Fitness tips</li>
              <li data-tsfilter="motivation">Meditation</li>
              <li data-tsfilter="workout">Workout</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="class-timetable">
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="class-time">6.00am - 8.00am</td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>WEIGHT LOOSE</h5>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="fitness">
                    <h5>Cardio</h5>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Yoga</h5>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="fitness">
                    <h5>Fitness</h5>
                  </td>
                  <td className="dark-bg blank-td" />
                  <td className="hover-bg ts-meta" data-tsmeta="motivation">
                    <h5>Adhyatam</h5>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Psychology</h5>
                  </td>
                </tr>
                <tr>
                  <td className="class-time">10.00am - 12.00am</td>
                  <td className="blank-td" />
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Fitness</h5>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="workout">
                    <h5>WEIGHT LOOSE</h5>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="motivation"
                  >
                    <h5>Cardio</h5>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="workout">
                    <h5>Psychology</h5>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="motivation"
                  >
                    <h5>Nutrition</h5>
                  </td>
                  <td className="blank-td" />
                </tr>
                <tr>
                  <td className="class-time">5.00pm - 7.00pm</td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Adhyatam</h5>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="motivation">
                    <h5>Nutrition</h5>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Psychology</h5>
                  </td>
                  <td className="blank-td" />
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Yoga</h5>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="motivation">
                    <h5>Cardio</h5>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Fitness</h5>
                  </td>
                </tr>
                <tr>
                  <td className="class-time">7.00pm - 9.00pm</td>
                  <td className="hover-bg ts-meta" data-tsmeta="motivation">
                    <h5>Cardio</h5>
                  </td>
                  <td className="dark-bg blank-td" />
                  <td className="hover-bg ts-meta" data-tsmeta="fitness">
                    <h5>Adhyatam</h5>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="workout"
                  >
                    <h5>Yoga</h5>
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="motivation">
                    <h5>Nutrition</h5>
                  </td>
                  <td
                    className="dark-bg hover-bg ts-meta"
                    data-tsmeta="fitness"
                  >
                    <h5>Adhyatam</h5>
                    &gt;
                  </td>
                  <td className="hover-bg ts-meta" data-tsmeta="workout">
                    <h5>WEIGHT LOOSE</h5>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Class Timetable Section End */}
  {/* Get In Touch Section Begin */}
  <div className="gettouch-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="gt-text">
            <i className="fa fa-map-marker" />
            <p>
              786 IAS Fitness, Ranjit Avenue
              <br />
              Amritsar 143001
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
                <img src="./assets/img/IASLogo.png" alt="error_in_loading" />
              </a>
            </div>
            <p>
              IAS stands for Isometric which is a category of Physical
              exercises,Adhyatama which is related to inner enlightenment and
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
                <a href="/Login">Login</a>
              </li>
              <li>
                <a href="/Login">My account</a>
              </li>
              <li>
                <a href="/Login">Subscribe</a>
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
                <a href="/Home">Login</a>
              </li>
              <li>
                <a href="/Home">My account</a>
              </li>
              <li>
                <a href="/Home">Subscribe</a>
              </li>
              <li>
                <a href="/Home">Contact</a>
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
    </div>
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="copyright-text">
          <p>
            {" "}
            {/* Deleted */}
            Copyright © All rights reserved | This Project is made with{" "}
            <i className="fa fa-heart" aria-hidden="true" /> by IAS Team
            {/* Deleted */}
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Footer Section End */}
  {/* Deleted */}
  {/* Js Plugins */}
</>

            </div>
        );
    }
}

export default Timetable;