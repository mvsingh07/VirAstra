import { Component } from "react";
import { toast } from 'react-toastify';
class Register extends Component {


    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            gender: '',
            email: '',
            phone: '',
            password: '',
            city: '',
            errorMessage:'',
            errorMessage1: '',
            errorMessage2: '',
            errorMessage3: '',
            successMessage: '',
            users:[]
        }
    }
    validateEmail = (email) => {
        // Regular expression for validating email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

   validatePhone=(phone)=>{

    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);

   }
   validatePassword=(password)=>{
   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
   return passwordRegex.test(password);

   }

   validateName=(name)=>{
   const nameRegex = /^[A-Za-z ]{3,}$/;

    return nameRegex.test(name);
   }

    handleChange = (event) => {
        let fieldsObject = {};
        fieldsObject[event.target.getAttribute('name')] = event.target.value;
        if (event.target.getAttribute('name') === "email") {
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
         if (event.target.getAttribute('name') === "password") {
            if (!this.validatePassword(event.target.value)) {
                this.setState({
                    errorMessage3: "Password should be length 8 and must include numbers and digit"
                })
            } 
            
            else{
                this.setState({
                    errorMessage3:""
                })
        }}

        if (event.target.getAttribute('name') === "phone") {
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
       if(event.target.getAttribute('name') === "name"){
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

        this.setState(fieldsObject);
    }
    

    saveUser = () => {
        let options = {
            method: 'post',
            headers: {
                'Content-Type':'application/json'
                // "Authorization" : "Bearer ${localStorage.getItem('access_token')}"
            },
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:4000/Register',options).then((response)=>{
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

                else if(response.status===404)
                   
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
                   else if(response.status===400)
                   
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
                   else if(response.status===402)
                   
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
                   else if(response.status===403)
                   
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



                    this.setState({
                        name: '',
                        age: '',
                        gender: '',
                        email: '',
                        phone: '',
                        password: '',
                        city: '',
                        successMessage:result.message
                    });
                    this.getUsers();
                }
            })
        })
    }


    render() {
        return (
            <div id="layoutSidenav_content">
                <main className="Registration-container">
                    <div className="container-fluid px-4 reg-con">
                        <li className=" register-heading"> <h1>Become a Member of IAS </h1></li>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active"><h2>Sign Up For Transformation</h2></li>
                         </ol>
                        
                            <div className="col-md-6 mb-5 register-form">
                                <div className="row">
                                    <div className="col-md-12 form-group mb-3">
                                        <label for="name">Name : </label>
                                        <input type="text" id="name" name="name" placeholder="Enter Your Full Name" value={this.state.name} onChange={this.handleChange} className="form-control" required/>
                                        <span className="text-info text-danger">{this.state.errorMessage}</span>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                        <label for="age">Age : </label>
                                        <input type="number" id="age" name="age" placeholder="Enter Your Age" value={this.state.age} onChange={this.handleChange} className="form-control" required/>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                        <label for="email">Email : </label>
                                        <input type="email" id="email" name="email" placeholder="Enter Email ID" value={this.state.email} onChange={this.handleChange} className="form-control" required/>
                                        <span className="text-info text-danger">{this.state.errorMessage1}</span>
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
                                        <input type="number" id="phone"   name="phone" placeholder="Enter Your Contact Number" value={this.state.phone} onChange={this.handleChange} className="form-control" required/>
                                        <span className="text-info text-danger">{this.state.errorMessage2}</span>
                                    </div>
                                     <div className="col-md-12 form-group mb-3">
                                        <label for="city">City : </label>
                                        <input type="text" id="city" name="city" placeholder="Enter City Name" value={this.state.city} onChange={this.handleChange} className="form-control" required/>
                                    </div> 
                                    <div className="col-md-12 form-group mb-3">
                                        <label for="password">Password : </label>
                                        <input type="password" id="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} className="form-control" required/>
                                        <span className="text-info text-danger">{this.state.errorMessage3}</span>
                                    </div>
                                    <div className="col-md-12 text-success">
                                        
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
