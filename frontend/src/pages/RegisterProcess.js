import { Component } from "react";
import { toast } from 'react-toastify';
// import validateEmail from 
class Register extends Component {


    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            gender: '',
            email: '',
            emailvalid:true,
            phone: '',
            phoneValid: true,
            password: '',
            passwordValid: true,
            city: '',
            formValid: false,
            loading: false,
            error: null,
            errorMessage: '',
            successMessage: '',
            users:[]
        }
    }


    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };


      validatePassword = (password) => {
        return password.length >= 8;
      };
    
      validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
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
    }

    validateField = (fieldName, value) => {
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let phoneValid = this.state.phoneValid;
    
        switch (fieldName) {
          case "email":
            emailValid = this.validateEmail(value);
            break;
          case "password":
            passwordValid = this.validatePassword(value);
            break;
          case "phone":
            phoneValid = this.validatePhone(value);
            break;
          default:
            break;
        }
    
    
        this.setState(
            {
              emailValid: emailValid,
              passwordValid: passwordValid,
              phoneValid: phoneValid,
            },
            this.validateForm
          ); 
    };

    
  validateForm = () => {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.phoneValid,
    });
  };


  saveUser = () => {
    let options = {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
            // "Authorization" : "Bearer ${localStorage.getItem('access_token')}"
        },
        body: JSON.stringify(this.state)
    }
        fetch('http://localhost:4000/Register_process',options).then((response)=>{
            // this.setState({errorMessage:''});
            // response.json().then((result)=>{
            //     if(result.status === 'error'){
            //         this.setState({
            //             errorMessage: result.message
            //         })
            response.json().then((result) => {
                if (response.status === 701) {
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
                   else if(response.status===702){
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

                    toast.info('Registeration Successful', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });



                    // this.setState({
                    //     name: '',
                    //     age: '',
                    //     gender: '',
                    //     email: '',
                    //     phone: '',
                    //     password: '',
                    //     passwordValid,
                    //     city: '',
                    //     successMessage:result.message
                    // });
                    this.getUsers();
                }
            })
        })
    }


    render() {const {
        email,
        password,
        phone,
        emailValid,
        passwordValid,
        phoneValid,
        // formValid,
        // loading,
        // error,
      } = this.state;
        return (
            <div id="layoutSidenav_content">
                <main className="Registration-container">
                    <div className="container-fluid px-4 reg-con">
                        <li className="mt-4 register-heading"> <h1>Become a Member of IAS </h1></li>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active"><h2>Sign Up For Transformation</h2></li>
                         </ol>
                        
                            <div className="col-md-6 mb-5 register-form">
                                <div className="row">
                                    <div className="col-md-12 form-group mb-3">
                                        <label for="name">Name : </label>
                                        <input type="text" id="name" name="name" placeholder="Enter Your Full Name" value={this.state.name} onChange={this.handleChange} className="form-control" required/>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                        <label for="age">Age : </label>
                                        <input type="number" id="age" name="age" placeholder="Enter Your Age" value={this.state.age} onChange={this.handleChange} className="form-control" required/>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                        <label for="email">Email : </label>
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
                                        <span className="text-info text-danger">{this.state.errorMessage}</span>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                        <label for="gender">Gender : </label>
                                        <select className="form-control" id="gender" name="gender" onChange={this.handleChange} value={this.state.gender} required> 
                                            <option value="select" selected>---Select---</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                        <label for="phone">Phone : </label>
                                        <input
              type="tel"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
              required
            />
            {!phoneValid && (
              <div className="error-message">
                Please enter a valid 10-digit mobile number
              </div>
            )}
                                    </div>
                                     <div className="col-md-12 form-group mb-3">
                                        <label for="city">City : </label>
                                        <input type="text" id="city" name="city" placeholder="Enter City Name" value={this.state.city} onChange={this.handleChange} className="form-control" required/>
                                    </div> 
                                    <div className="col-md-12 form-group mb-3">
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
                Password must be at least 8 characters long </div>
            )}
                                    </div>
                                    <div className="col-md-12 text-success">
                                        <p>{this.state.successMessage}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary" onClick={this.saveUser}>Submit</button>
                                   
                                   </div>
                                    <div className="col-md-12">
                                        <div className="already-reg">Already Registered ? <a href="/Login">Log-In</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </main>
            </div>
        )
    }
}
export default Register;
