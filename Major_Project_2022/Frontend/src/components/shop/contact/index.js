import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <div>
      <div className="container1">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="bi bi-geo-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">ABC</div>
              <div className="text-two">XYZ</div>
            </div>
            <div className="phone details">
              <i className="bi bi-telephone"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+91 6364055100</div>
              <div className="text-two">+91 8168565609</div>
            </div>
            <div className="email details">
              <i className="bi bi-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">nitikshakatoch95@gmail.com</div>
              {/* <div className="text-two">nbbhdj143@gmail.com</div> */}
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any query regarding our product, You can always
              contact us.
            </p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box">
                <textarea type="text" placeholder="Description" />
              </div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
