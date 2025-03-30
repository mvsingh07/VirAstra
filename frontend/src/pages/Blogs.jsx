import React, { Component } from 'react';

class Blogs extends Component {
    render() {
        return (
            <div>
                <>
  <meta charSet="UTF-8" />
  <meta name="description" content="Gym Project" />
  <meta name="keywords" content="Gym, unica, creative, html" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Blogs | IAS</title>
  {/* Breadcrumb Section Begin */}
  <section
    className="breadcrumb-section set-bg"
    style={{background: 'url(./assets/img/light.jpg) center center / cover no-repeat',width: '100%',height: '100vh', }}>
  
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h1>Our Blog</h1>
            <div className="bt-option">
              <a href="/Home">Home</a>
              <a href=" ">Pages</a>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Blog Section Begin */}
  <section className="blog-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 p-0">
          <div className="blog-item">
            <div className="bi-pic">
              <img src="./assets/img/blog/blog-1.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="https://iashealth.medium.com/yoga-meditation-self-realization-adhyatama-and-much-more-18de21518d41">
                  Yoga, Meditation, self-realization, adhyatama and much more
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Apr 14, 2023</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Yoga is a physical, mental, and spiritual practice that
                originated in ancient India. It involves a combination of
                physical postures, breathing techniques, and meditation to
                promote overall health and well-being.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="./assets/img/blog/blog-2.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="https://iashealth.medium.com/artificial-intelligence-is-unrealistic-46fac153fc0b">
                  Artificial Intelligence is unrealistic
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Apr 12, 2023</li>
                <li>25 Comment</li>
              </ul>
              <p>
                Technology refers to the tools, techniques, and processes used
                to create, develop, and improve products, services, and systems,
                and is constantly evolving to meet the demands of modern
                society.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="./assets/img/blog/blog-3.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="https://iashealth.medium.com/flexibility-in-body-is-a-must-in-this-machine-dependent-world-90d140d1d50a">
                  Flexibility in body is a must in this machine dependent world
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Apr 14, 2023</li>
                <li>21 Comment</li>
              </ul>
              <p>
                Flexibility plays a vital role in overall health and well-being.
                It helps to maintain mobility and range of motion in joints,
                which can reduce the risk of injury and improve posture.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="./assets/img/blog/blog-4.jpg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="https://iashealth.medium.com/fitness-and-home-workouts-43ac19e755bc ">
                  Fitness and Home-Workouts
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Apr 17, 2023</li>
                <li>20 Comment</li>
              </ul>
              <p>
                Fitness plays a crucial role in maintaining overall health and
                well-being. Regular exercise and physical activity can help to
                reduce the risk of chronic diseases such as heart disease, and
                can also contribute to improved mental health.
              </p>
            </div>
          </div>
          <div className="blog-item">
            <div className="bi-pic">
              <img src="./assets/img/blog/blog-5.jpeg" alt="" />
            </div>
            <div className="bi-text">
              <h5>
                <a href="https://iashealth.medium.com/nutrition-and-sustenance-b686f252ca96">
                  Nutrition and Sustenance
                </a>
              </h5>
              <ul>
                <li>by Admin</li>
                <li>Apr 18, 2023</li>
                <li>10 Comment</li>
              </ul>
              <p>
                A healthy diet plays a crucial role in overall health and
                well-being. Consuming a balanced diet that includes a variety of
                nutrient-dense foods such as fruits, vegetables, whole grains,
                lean proteins, and healthy fats can help to reduce the risk of
                many chronic diseases.
              </p>
            </div>
          </div>
          <div className="blog-pagination">
            <a href="/Blogs">1</a>
            <a href="/Blogs">2</a>
            <a href="/Blogs">3</a>
            <a href="/Blogs">Next</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-8 p-0">
          <div className="sidebar-option">
            <div className="so-categories">
              <h5 className="title">Categories</h5>
              <ul>
                <li>
                  <a href="/Blogs">
                    Yoga <span>12</span>
                  </a>
                </li>
                <li>
                  <a href="/Blogs">
                    Runing <span>32</span>
                  </a>
                </li>
                <li>
                  <a href="/Blogs">
                    Spirituality <span>86</span>
                  </a>
                </li>
                <li>
                  <a href="/Blogs">
                    Cardio <span>25</span>
                  </a>
                </li>
                <li>
                  <a href="/Blogs">
                    Meditation <span>36</span>
                  </a>
                </li>
                <li>
                  <a href="/Blogs">
                    Nutrition <span>15</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="so-latest">
              <h5 className="title">Feature posts</h5>
              <div
                className="latest-large set-bg"
                data-setbg="img/letest-blog/latest-1.jpg"
              >
                <div className="ll-text">
                  <h5>
                    <a href="/Blogs">
                      This Japanese Way of Making Iced Coffee Is a Game...
                    </a>
                  </h5>
                  <ul>
                    <li>Dec 10, 2022</li>
                    <li>20 Comment</li>
                  </ul>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="img/letest-blog/latest-2.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="/Blogs">
                      Grilled Potato and Green Bean Salad
                    </a>
                  </h6>
                  <span className="li-time">Apr 15, 2022</span>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="img/letest-blog/latest-3.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="/Blogs">
                      The $8 French Rosé I Buy in Bulk Every Summer
                    </a>
                  </h6>
                  <span className="li-time">June 17, 2022</span>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="img/letest-blog/latest-4.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="/Blogs">
                      Ina Garten's Skillet-Roasted Lemon Panner
                    </a>
                  </h6>
                  <span className="li-time">Aug 15, 2022</span>
                </div>
              </div>
              <div className="latest-item">
                <div className="li-pic">
                  <img src="img/letest-blog/latest-5.jpg" alt="" />
                </div>
                <div className="li-text">
                  <h6>
                    <a href="/Blogs">
                      The Best Weeknight Baked Potatoes, 3 Creative Ways
                    </a>
                  </h6>
                  <span className="li-time">Oct 15, 2022</span>
                </div>
              </div>
            </div>
            <div className="so-tags">
              <h5 className="title">Popular tags</h5>
              <a href="/Blogs">Gyming</a>
              <a href="/Blogs">Spirituality</a>
              <a href="/Blogs">Yoga</a>
              <a href="/Blogs">Weightloss</a>
              <a href="/Blogs">Psychology</a>
              <a href="/Blogs">Streching</a>
              <a href="/Blogs">Cardio</a>
              <a href="/Blogs">Meditation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section End */}
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
                <a href="/Blogs">
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
                <a href="/Blogs">
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
              {" "}
              {/* Deleted */}
              Copyright © All rights reserved | This Project is made with{" "}
              <i className="fa fa-heart" aria-hidden="true" /> by IAS Team
              {/* Deleted */}
            </p>
          </div>
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

export default Blogs;