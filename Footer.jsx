import React from "react";
import "./Footer.css"; // Custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <h2>Hotel Lunar</h2>
            <p style={{ fontSize: "13px" }}>
              Will give you the comfort you deserve
            </p>
            <p>Address: Road 12, Peace Avenue, Ado, Ekiti</p>
            <p>Phone number: +2349061504648</p>
            <p>Email: oluwadamilolafaj@gmail.com</p>
          </div>
          <div className="col">
            <p>About us</p>
            <p>Contact us</p>
            <p>Rooms & Rates</p>
            <p>Facilities</p>
          </div>
          <div className="col">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Snapchat</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 
