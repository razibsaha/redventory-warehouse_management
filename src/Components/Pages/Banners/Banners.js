import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import hero01 from "../../../Assets/Images/hero1.jpg";
import hero02 from "../../../Assets/Images/hero2.jpg";
import hero03 from "../../../Assets/Images/hero3.jpg";

// or less ideally

const Banners = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{ height: "60vh" }}
          className="d-block w-100 object-cover"
          src={hero01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-8xl font-bold">This is Home</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "60vh" }}
          className="d-block w-100 object-cover"
          src={hero02}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "60vh" }}
          className="d-block w-100 object-cover"
          src={hero03}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banners;
