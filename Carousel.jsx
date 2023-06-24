import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "./img/4.jpg";
import img2 from "./img/5.jpg";
import img3 from "./img/6.jpg";
import img4 from "./img/7.jpg";
import img5 from "./img/8.jpg";
import img6 from "./img/9.jpg";
//import "./CustomCarousel.css"; // Custom CSS file

const CustomCarousel = (props) => {
  return (
    <div className="custom-carousel-container">
      <Carousel>
        <Carousel.Item>
          <Row>
            <Col className="custom-carousel-col">
              <img
                className="d-block w-100 h-100 object-fit-cover"
                src={img1}
                // alt="Image 1 in Carousel"
              />
            </Col>
            <Col className="custom-carousel-col">
              <img
                className="d-block w-100 h-100 object-fit-cover"
                src={img2}
                // alt="Image 2 in Carousel"
              />
            </Col>
            <Col className="custom-carousel-col">
              <img
                className="d-block w-100 h-100 object-fit-cover"
                src={img6}
                // alt="Image 6 in Carousel"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col className="custom-carousel-col">
              <img
                className="d-block w-100 h-100 object-fit-cover"
                src={img3}
                // alt="Image 3 in Carousel"
              />
            </Col>
            <Col className="custom-carousel-col">
              <img
                className="d-block w-100 h-100 object-fit-cover"
                src={img4}
                // alt="Image 4 in Carousel"
              />
            </Col>
            <Col className="custom-carousel-col">
              <img
                className="d-block w-100 h-100 object-fit-cover"
                src={img5}
                // alt="Image 5 in Carousel"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
 
