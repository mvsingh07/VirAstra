import { Component } from "react";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      redirect: false,
    };
  }

  handleChange = (event) => {
    const fieldsObject = {};
    fieldsObject[event.target.getAttribute("name")] = event.target.value;
    this.setState(fieldsObject);
  };

  handleLogin = (event) => {
    if (this.state.email !== "" && this.state.password !== "") {
      let options = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state),
      };
      fetch("http://localhost:4000/login", options).then((response) => {
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
            if (result.token === "") {
              this.setState({
                message: result.message,
              });
            } else {
              toast.info('Login Successful', {
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
          }
        });
      });
    }
  };

  render() {
    if (this.state.redirect === true) {
      return <Navigate to="/MyProfile" />;
      // return <Link to="/Home"/>
    } else {
      return (
        <div className="container-fluid login-page">
          <div className="row d-flex justify-content-centerr">
            {/* <div className="col-md-6"> */}
            <div className="card px-5 py-5" id="form1">
              <div className="form-data">
                <div className="Login-Heading"><h2>Login</h2><p>And Gain Access To Your Profile</p></div>
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
                <div className="forms-inputs">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                  <div className="invalid-feedback">
                    Password must be 8 character!
                  </div>
                  <span className="help-block text-danger">
                    {this.state.message}
                  </span>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-dark w-100"
                    onClick={this.handleLogin}
                  >
                    Login
                  </button>
                  <div className="message">
                    Not registered? <a href="/Register">Create an account</a>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      );
    }
  }
}

export default Login;
