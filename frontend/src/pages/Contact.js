import React, { Component } from 'react';
import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(){
        super();
        this.state = {
            Name: '',                 
            Email: '',
            Mobile: '',
            Message: '',
            errorMessage:'',
            errorMessage1:'',
            errorMessage2:'',
            errorMessage3:'',            
            successMessage: '',
            users:[]
        }
    }

    validateEmail = (Email) => {
        // Regular expression for validating email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(Email);
    }

    validatePhone=(Mobile)=>{

        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(Mobile);
    
       }


       validateName=(Name)=>{
       const nameRegex = /^[A-Za-z ]{3,}$/;

        return nameRegex.test(Name);
       }
       validateMessage=(Message)=>{
        const MessageRegex = /^[A-Za-z ]{3,}$/;
        return MessageRegex.test(Message);
       }


       handleChange=(event)=>{

        let fieldsObject={};
        fieldsObject[event.target.getAttribute('name')]=event.target.value;
        if (event.target.getAttribute('name') === "Email") {
            if (!this.validateEmail(event.target.value)) {
                this.setState({
                    errorMessage1: "Invalid email-address"
                })
            } 
            
            else{
                this.setState({
                    errorMessage1:""
                })

        }}
    
    
        if (event.target.getAttribute('name') === "Mobile") {
            if (!this.validatePhone(event.target.value)) {
                this.setState({
                    errorMessage2: "Enter a 10 digit phone number"
                })

            } 
            else{
                this.setState({
                    errorMessage2:""
                })
            }
        }
            
                if(event.target.getAttribute('name') === "Name"){
                    if(!this.validateName(event.target.value))
                         
                    {
                        
                this.setState({
                    
                    errorMessage: "This is a required field"
                })
                }
            else{
                this.setState({
                    errorMessage: ""
                })
            }            
            
            }
            if(event.target.getAttribute('name') === "Message"){
                if(!this.validateMessage(event.target.value))
                     
                {
                    
            this.setState({
                
                errorMessage3: "This is a required field"
            })
            }
        else{
            this.setState({
                errorMessage3: ""
            })
        }            
        
        }
    
     this.setState(fieldsObject); 
    
    }
    saveUser = () => {

        let options ={
         method:'post',
         headers:{
            'Content-Type':'application/json'
         },
          body: JSON.stringify(this.state)
        }
    
        fetch('http://localhost:4000/contacts', options).then((response) => {
            
          response.json().then((result) => {
            if(response.status=== 555)
                   
                   {
                    toast.info(result.message, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })

                   }
                   else if(response.status=== 301)
                   
                   {
                    toast.info(result.message, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })

                   }
                   else if(response.status=== 302)
                   
                   {
                    toast.info(result.message, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })

                   }
                  
                   else if(response.status=== 305)
                   
                   {
                    toast.info(result.message, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        })

                   }
                   
                else{

                    toast.success('Form Submitted', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });

              this.setState({
                Name:'',
                Email:'',
                Mobile:'',
                Message:'',
                successMessage:result.message
              });
              this.getUsers();
            } 
          })
          
    })
}
    
    render() {
        return (
            <div>

{/*breadcrumb section begin  */}
<section className="breadcrumb-section set-bg"style={{background: 'url(./assets/img/contact2.jpg) center center / cover no-repeat' }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb-text">
                        <h1>Contact Us</h1>
                        <div className="bt-option">
                        <a href="/Home">Home</a>
                           
                            <span>Contact</span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
{/*breadcrumb section end  */}

{/* contact begin */}

<section className="contact-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title contact-title">
                        <span>Contact Us</span>
                        <h2>GET IN TOUCH</h2>
                    </div>
                    <div className="contact-widget">
                        <div className="cw-text">
                            <i className="fa fa-map-marker"></i>
                            <p>786 IAS Fitness, Ranjit Avenue<br/>Amritsar 143001</p>
                        </div>
                        <div className="cw-text">
                            <i className="fa fa-mobile"></i>
                            <ul>
                                <li>628-384-9317</li>
                                <li>869-977-9446</li>
                            </ul>
                        </div>
                        <div className="cw-text email">
                            <i className="fa fa-envelope"></i>
                            <p>contact.ias@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="leave-comment">
                        <form>
                            <input type="text" id="Name" name="Name" placeholder="Name" value={this.state.Name} onChange={this.handleChange} className="form-control" required/>
                            <span className="text-info text-danger">{this.state.errorMessage}</span>                  
                            
                            <input type="email"id="Email" name="Email" placeholder="Email"value={this.state.Email} onChange={this.handleChange} className="form-control" required/>
                                        <span className="text-info text-danger">{this.state.errorMessage1}</span>
                           
                            <input type="phone" id="Mobile" name="Mobile" placeholder="Mobile Number"value={this.state.Mobile} onChange={this.handleChange} className="form-control" required/>
                                        <span className="text-info text-danger">{this.state.errorMessage2}</span>
                           
                            <textarea id="Message" name="Message" placeholder="Message" value={this.state.Message} onChange={this.handleChange} className="form-control" required />
                            <span className="text-info text-danger">{this.state.errorMessage3}</span> 
                            
                            <button type="submit" onClick={this.saveUser}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd"
                    height="550" title='video_'></iframe>
              </div>
            </div>   
    </section>


{/* contact end */}


{/* footer start */}
<section class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                   <div class="fs-about">
                        <div class="fa-logo">
                            <a href="/Home"><img src="./assets/img/IASLogo.png" alt="error_in_loading"/></a>
                        </div>
                        <p>IAS stands for Isometric which is a category of Physical exercises,Adhyatama which is related to inner enlightenment and sustenance which means Nutrition</p>
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
                             <li><a href="/Login">Login</a></li>
                            <li><a href="/Login">My account</a></li>
                            <li><a href="/Login">Subscribe</a></li>
                            <li><a href="/Contact">Contact</a></li>
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
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="copyright-text">
                        <p>   
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This Project is made with <i class="fa fa-heart" aria-hidden="true"></i> by IAS Team
      </p>
                    </div>
                </div>
                </div>
        
    </section>

{/* footer end */}






    </div>










        );
    }
}

export default Contact;