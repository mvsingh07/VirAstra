import { useState } from 'react';
import { toast } from 'react-toastify';

const Registration = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      if (!validateEmail(value)) {
        setErrorMessage('Invalid email address');
      } else {
        setErrorMessage('');
      }
    }

    if (name === 'name') {
      setName(value);
    }

    if (name === 'age') {
      setAge(value);
    }

    if (name === 'gender') {
      setGender(value);
    }

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'phone') {
      setPhone(value);
    }

    if (name === 'city') {
      setCity(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, gender, email, phone, city })
    };

    fetch('http://localhost:4000/register', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'error') {
          toast.error(data.message);
        } else {
          toast.success(data.message);
          setName('');
          setAge('');
          setGender('');
          setEmail('');
          setPhone('');
          setCity('');
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  return (
    <div id="layoutSidenav_content">
      <main className="Registration-container">
        <div className="container-fluid px-4 reg-con">
          <li className="mt-4 register-heading"> <h1>Become a Member of IAS </h1></li>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active"><h2>Sign Up For Transformation</h2></li>
          </ol>
          <form onSubmit={handleSubmit}>
            <div className="col-md-6 mb-5 register-form">
              <div className="row">
                <div className="col-md-12 form-group mb-3">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Enter Your Full Name" value={this.state.name} onChange={this.handleChange} className="form-control" required/>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                  <label htmlFor="age">Age:</label>
                  <input type="number" name="age" id="age" className="form-control" required value={age} onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group mb-3">
                  <label htmlFor="gender">Gender:</label>
                  <select name="gender" id="gender" className="form-select" required value={gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" className="form-control" required value={email} onChange={handleChange} />
                  {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group mb-3">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" name="phone" id="phone" className="form-control" required value={phone} onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group mb-3">
                  <label htmlFor="city">City:</label>
                  <input type="text" name="city" id="city" className="form-control" required value={city} onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group mb-3">
                  <button type="submit" className="btn btn-primary btn-lg w-100">Register</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Registration;