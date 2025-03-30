import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
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

            </div>
        );
    }
}

export default Footer;