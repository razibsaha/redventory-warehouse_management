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
    <Carousel className="md:mt-32 mt-14" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{ height: "60vh" }}
          className="d-block w-100 object-cover"
          src={hero01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="bannerName">Best Products in the Market</h1>
          
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
        <h1 className="bannerName">Best Sales in last 10 years</h1>
          
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
        <h1 className="bannerName">Sales during covid was low all round the world, but we didn't suffer</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banners;
