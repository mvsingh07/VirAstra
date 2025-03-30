import React, { Component } from "react";
import "./Bmicalc.css";
// import background from './assets/img/background.jpg';

class Bmicalc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      weight: "",
      age: "",
      gender: "",
      bodytype:"",
      bmi: "",
      image: "./assets/img/weightloss/img1.jpg",
    };

    this.calculateBmi = this.calculateBmi.bind(this);
  }
  calculateBmi(event) {
    event.preventDefault();
    const { height, weight, age, gender } = this.state;
    const bmi = weight / ((height / 100) * (height / 100));
    this.setState({ bmi: bmi.toFixed(2) });
  
    if (gender === "male") {
      if (age >= 18 && age <= 24) {
        if (bmi < 18.5) {
          this.setState({ image: "./assets/img/weightgain/img1.png" });
          alert("You are underweight! You may want to gain some weight. Consult our nutritionist for a proper diet plan.");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          this.setState({ image: "./assets/img/weightloss/img2.jpg" });
          alert("You have a normal weight. Here is a diet plan for you.");
        } else if (bmi >= 25 && bmi <= 29.9) {
          this.setState({ image: "./assets/img/weightloss/img1.png" });
          alert("You are overweight! You may want to lose some weight. Consult our nutritionist for a proper diet plan.");
        } else if (bmi >= 30) {
          this.setState({ image: "./assets/img/weightloss/img3.jpg" });
          alert("You are obese! You may want to lose some weight. Consult a doctor or a nutritionist for a proper diet plan.");
        }
      } else if (age >= 25 && age <= 64) {
        if (bmi < 18.5) {
          this.setState({ image: "./assets/img/weightgain/img1.png" });
          alert("You are underweight! You may want to gain some weight. Consult our nutritionist for a proper diet plan.");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          this.setState({ image: "./assets/img/weightloss/img2.jpg" });
          alert("You have a normal weight. Here is a diet plan for you.");
        } else if (bmi >= 25 && bmi <= 29.9) {
          this.setState({ image: "./assets/img/weightloss/img5.jpg" });
          alert("You are overweight! You may want to lose some weight. Consult our nutritionist for a proper diet plan.");
        } else if (bmi >= 30) {
          this.setState({ image: "./assets/img/weightloss/img3.jpg" });
          alert("You are obese! You may want to lose some weight. Consult our nutritionist for a proper diet plan.");
        }
      } else {
        // default case
        this.setState({ image: "./assets/img/weightloss/img2.jpg" });
      }
    } else if (gender === "female") {
      if (age >= 18 && age <= 24) {
        if (bmi < 18.5) {
          this.setState({ image: "./assets/img/weightgain/img2.png" });
          alert("You are underweight! You may want to gain some weight. Consult our nutritionist for a proper diet plan.");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          this.setState({ image: "./assets/img/weightgain/img3.png" });
          alert("You have a normal weight. Here is a diet plan for you.");
        } else if (bmi >= 25 && bmi <= 29.9) {
          this.setState({ image: "./assets/img/weightloss/img2.jpg" });
          alert("You are overweight! You may want to lose some weight. Consult our nutritionist for a proper diet plan.");
        } else if (bmi >= 30) {
          this.setState({ image: "./assets/img/weightloss/img2.jpg" });
          alert("You are obese! You may want to lose some weight. Consult a doctor or a nutritionist for a proper diet plan.");
        }
      } else if (age >= 25 && age <= 64) {
        if (bmi < 18.5) {
          this.setState({ image: "./assets/img/weightgain/img2.png" });
          alert("You are underweight! You may want to gain some weight. Consult our nutritionist for a proper diet plan.");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          this.setState({ image: "./assets/img/weightgain/img3.png" });
          alert("You have a normal weight. Here is a diet plan for you.");
        } else if (bmi >= 25 && bmi <= 29.9) {
          this.setState({ image: "./assets/img/weightloss/img5.jpg" });
          alert("You are overweight! You may want to lose some weight. Consult our nutritionist for a proper diet plan.");
        } else if (bmi >= 30) {
          this.setState({ image: "./assets/img/weightloss/img2.jpg" });
          alert("You are obese! You may want to lose some weight. Consult our nutritionist for a proper diet plan.");
        }
      } else {
        // default case
        this.setState({ image: "./assets/img/weightgain/img3.png" });
      }
    }
  }
  

  render() {
    const { height, weight, age, gender,bodytype, bmi, image } = this.state;

    return (
    
      <div className="bmicontainer" style={{ padding: "50px", backgroundImage: `url(./assets/img/background.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <h1 style={{ fontFamily: "Arial", fontSize: "36px" }}>Diet Generator</h1>
      
    
        <form onSubmit={this.calculateBmi}>
          <label>
        
            <input
              type="number" placeholder="Enter Your Height (cm)"
              value={height}
              onChange={(event) => this.setState({ height: event.target.value })}
              required
            />
          </label>
          <br />
          <label>
           
            <input
              type="number" placeholder="Enter Your Weight (kg)"
              value={weight}
              onChange={(event) => this.setState({ weight: event.target.value })}
              required
            />
          </label>
          <br />
          <label>
       
            <input
              type="number" placeholder="Enter Your Age (years)"
              value={age}
              onChange={(event) =>
                this.setState({ age: event.target.value })}
                required
              />
            </label>
            <br />
            <label>
             
              <select value={gender} onChange={(event) => this.setState({ gender: event.target.value })} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <br />
            <label>
             
             <select value={bodytype} onChange={(event) => this.setState({ bodytype: event.target.value })} required>
               <option value="">Select Bodytype</option>
               <option value="male">Ectomorph</option>
               <option value="female">Endomorph</option>
               <option value="female">Mesomorph</option>
             </select>
           </label>
            <button type="submit">Generate Diet Plan</button>
          </form>
          
          {bmi && (
            <div className="result">
              <p>Your BMI is {bmi}</p>
              
              <img src={image} alt="BMI category" />
              
            </div>
          )}
        </div>
       
      );
    }
  }
  
  export default Bmicalc;
  