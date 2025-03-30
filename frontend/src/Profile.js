import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <>
  <meta charSet="UTF-8" />
  <meta name="description" content="Gym IAS" />
  <meta name="keywords" content="Gym, unica, creative, html" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Home | IAS</title>
  <header>
    {/* <a href="/MyProfile" className="home-button">
      <i
        className="fa-solid fa-arrow-turn-down-left"
        style={{ color: "#ffffff" }}
      />
      &lt;&lt; Back To Homepage
    </a> */}
    <link href="https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="./css/font-awesome.min.css" type="text/css"/>
    <link rel="stylesheet" href="./css/iasLanding.css" />

  </header>
  {/* Header End */}
  <div className="tri-container">
    <a href="/Isometric" alt="Mythrill" target="_blank">
      <div className="card">
        <div className="wrapper">
          <img
            src="./assets/img/workout.jpg"
            className="cover-image" alt="not found"
          />
        </div>
        {/* <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" class="title" /> */}
        <img
          src="https://freepngimg.com/thumb/categories/2746.png"
          className="character" alt="not found"
        />
        <div className="text">
          <p>Isometric</p>
        </div>
      </div>
    </a>
    <a href="/Adhyatma" alt="Mythrill" target="_blank">
      <div className="card">
        <div className="wrapper">
          <img
            src="./assets/img/red-tibet.jpg"
            className="cover-image" alt="not found"
          />
        </div>
       
        <img src="./adhyatama.webp" className="character"  alt="not found"/>
        <div className="text">
          <p>Adhyatama</p>
        </div>
      </div>
    </a>
    <a href="/Sustenance" alt="Mythrill" target="_blank">
      <div className="card">
        <div className="wrapper">
          <img src="./assets/img/sustenance_2.jpg"  alt="not found"height="350px" />
        </div>
   
        <img src="./sustenance_3.jpg"  alt="not found" className="character" />
        <div className="text">
          <p>Sustenance</p>
        </div>
      </div>
    </a>
  </div>
  {/* Footer Section End */}
  {/* Js Plugins */}
</>

      </div>
    );
  }
}

export default Profile;