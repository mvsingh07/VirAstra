import { Component } from "react";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",
      redirect: false,
    };
  }

  handleChange = (event) => {
    const fieldsObject = {};
    fieldsObject[event.target.getAttribute("name")] = event.target.value;
    this.setState(fieldsObject);
  };

  handleSendOTP = (event) => {
    if (this.state.email !== "") {
      let options = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state),
      };
      fetch("http://localhost:4000/forgotPassword", options).then((response) => {
        response.json().then((result) => {
          if (response.status === 401) {
            toast.info(result.message, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
                return ;
                
          } else {
            if (response.status === 200) 
            {
              console.log("Otp Sent");
              toast.info('New Password has been sent to your Email', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              localStorage.setItem("access_token", result.token);
              this.setState({ redirect: true });
            }         
                 
            else
              {
              console.log("There is a Problem");
              this.setState({
                message: result.message,
              });
            }
          }
        });
      });
    }
  };

  render() {
    if (this.state.redirect === true) {
      return <Navigate to="/Home" />;
    } else {
      return (
        

        <div className="container-fluid login-page">
        <div className="row d-flex justify-content-centerr">
            <div className="card px-5 py-5" id="form1">
              <div className="form-data">
                <div className="ForgotPassword-Heading"><h2>Forgot Password</h2><p>Enter your Email to receive a new password</p></div>
                <div className="forms-inputs">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                  <div className="invalid-feedback">
                    A valid email is required!
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-dark w-100"
                    onClick={this.handleSendOTP}
                  >
                    Send Password
                  </button>
                  <div className="message">
                    Remembered your password? <a href="/Login">Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ForgotPassword;
