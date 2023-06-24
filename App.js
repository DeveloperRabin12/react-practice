import logo from './logo.svg';
import './App.css';
import React from "react";
import CustomNavbar from "./components/Navbar";
import CustomCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import Button from "react-bootstrap/Button";
import img1 from "./img2/1.jpeg";
import img2 from "./img2/2.jpg";
import img3 from "./img2/3.jpg";



const App=()=> {
  return ( 
    <>
    
    
    
          <CustomNavbar />
      <div style={{ position: "relative" }}>
        <img src={img1} height={500} width="100%" alt="Image" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <p> A Memorable Experience.</p>
          <Button variant="primary" style={{ backgroundColor: "#ACB1D6" }}>
            Reserve Now
          </Button>{" "}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1", marginLeft: "50px" }}>
          <h1 style={{ textAlign: "left", color: "black", fontSize: "20px" }}>
            About Hotel Lunar
          </h1>
          <p>
            Ladies and gentlemen, history keeps repeating itself but doesn't
            teach us any lessons. 'Never again' has turned into 'again and again
            and again.' So today, ladies and gentlemen, take Hotel Lunar as a
            wake-up call and a message to be our messenger that people are the
            ones who can change what they want to change.{" "}
          </p>
          <p>
            Ladies and gentlemen, history keeps repeating itself but doesn't
            teach us any lessons. 'Never again' has turned into 'again and again
            and again.' So today, ladies and gentlemen, take Hotel Lunar as a
            wake-up call and a message to be our messenger that people are the
            ones who can change what they want to change.{" "}
          </p>
        </div>

        <div style={{ flex: "0.4" }}>
          <img src={img2} height={300} width={350} alt="Image" />
        </div>
      </div>
      <div style={{ marginLeft: "50px" }}>
        <Button variant="primary" style={{ backgroundColor: "#9336B4" }}>
          Read More
        </Button>{" "}
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div style={{ position: "relative" }}>
        <img src={img3} height={600} width="100%" alt="Image" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            fontSize: "24px",
          }}
        >
          <h1>Events & Weddings</h1>
          <br></br>
          <p>
            Ladies and gentlemen, history keeps repeating itself but doesn't
            teach us any lessons. 'Never again' has turned into 'again and again
            and again.' So today, ladies and gentlemen, take Hotel Lunar as a
            wake-up call and a message to be our messenger that people are the
            ones who can change what they want to change.{" "}
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1 style={{ textAlign: "center" }}>Our Galleries</h1>
        <CustomCarousel />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer>
        <Footer />
      </footer>

    
    
    </>
  );
}

export default App;
