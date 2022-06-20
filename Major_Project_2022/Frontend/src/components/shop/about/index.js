import React from "react";
import "./index.css";
import { PROFILE_IMAGE } from "../../../assets/images";

const About = () => {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>This is OUR Team.</p>
        <p>
          We have put efforts to make this website responsible as well.
        </p>
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <img className="images" src={PROFILE_IMAGE} alt="Jane" />
            <div className="container">
              <h2>Neeraj</h2>
              <p className="title">Web Developer</p>
              <p>I am a Full  Stack developer.</p>
              <p>nbbhdj143@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="images" src={PROFILE_IMAGE} alt="Jane" />
            {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"/> */}
            <div className="container">
              <h2>Nitiksha Katoch</h2>
              <p className="title">Web developer</p>
              <p>I am a full stack developer.</p>
              <p>nitikshakatoch95@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="images" src={PROFILE_IMAGE} alt="Jane" />
            {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"/> */}
            <div className="container">
              <h2>Neha Tiwari</h2>
              <p className="title">Web developer</p>
              <p>I am Full stack developer</p>
              <p>nehatiwari@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <img className="images" src={PROFILE_IMAGE} alt="Jane" />
            <div className="container">
              <h2>Mahati Kulkarni</h2>
              <p className="title">Web developer</p>
              <p>I am a full stack developer.</p>
              <p>mahatikulkarni@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="images" src={PROFILE_IMAGE} alt="Jane" />
            {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"/> */}
            <div className="container">
              <h2>Nivedeetha</h2>
              <p className="title">Web developer</p>
              <p>I am a full stack developer.</p>
              <p>nivedeetha@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="images" src={PROFILE_IMAGE} alt="Jane" />
            {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"/> */}
            <div className="container">
              <h2>Our mentor</h2>
              <p className="title">Professor</p>
              <p>She motivated us through this whole project.</p>
              <p>professor@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
