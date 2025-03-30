import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      mobile: "",
      emailValid: true,
      passwordValid: true,
      mobileValid: true,
      formValid: false,
      loading: false,
      error: null,
    };
  }

  validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  validatePassword = (password) => {
    return password.length >= 8;
  };

  validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField = (fieldName, value) => {
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let mobileValid = this.state.mobileValid;

    switch (fieldName) {
      case "email":
        emailValid = this.validateEmail(value);
        break;
      case "password":
        passwordValid = this.validatePassword(value);
        break;
      case "mobile":
        mobileValid = this.validateMobile(value);
        break;
      default:
        break;
    }

    this.setState(
      {
        emailValid: emailValid,
        passwordValid: passwordValid,
        mobileValid: mobileValid,
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.mobileValid,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const { email, password, mobile } = this.state;
    const formData = {
      email: email,
      password: password,
      mobile: mobile,
    };

    // Call API endpoint to register user
    fetch("http://localhost:5000/Register1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Registration failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Registration successful:", data);
        this.setState({
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.error("Registration error:", error);
        this.setState({
          loading: false,
          error: error.message,
        });
      });
  };

  render() {
    const {
      email,
      password,
      mobile,
      emailValid,
      passwordValid,
      mobileValid,
      formValid,
      loading,
      error,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            required
            />
            {!emailValid && (
              <div className="error-message">Please enter a valid email</div>
            )}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
            {!passwordValid && (
              <div className="error-message">
                Password must be at least 8 characters long
              </div>
            )}
          </div>
          <div>
            <label>Mobile:</label>
            <input
              type="tel"
              name="mobile"
              value={mobile}
              onChange={this.handleInputChange}
              required
            />
            {!mobileValid && (
              <div className="error-message">
                Please enter a valid 10-digit mobile number
              </div>
            )}
          </div>
          <button type="submit" disabled={!formValid || loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      );
    }
  }
  
  export default RegistrationForm;
  


  /*

  import { Component } from "react";
import { toast } from 'react-toastify';

class Register extends Component {

    ...

    validateEmail = (email) => {
        // Regular expression for validating email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    handleChange = (event) => {
        let fieldsObject = {};
        fieldsObject[event.target.getAttribute('name')] = event.target.value;
        if (event.target.getAttribute('name') === "email") {
            if (!this.validateEmail(event.target.value)) {
                this.setState({
                    errorMessage: "Invalid email address"
                })
            } else {
                this.setState({
                    errorMessage: ""
                })
            }
        }
        this.setState(fieldsObject);
    }

    ...
}

  */