import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
const Carousels = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="carouselbg1 w-100">
          <div className="carousel-1 px-4">
            <div>
              <h5 className="min-header">#FASHION DAY</h5>
              <h4 className="main-header">80% OFF</h4>
              <p className="sub-text">
                Discover fashion that suits to
                <br />
                your style
              </p>

              <button
                style={{ background: "#2c2d41", fontSize: "12px" }}
                className=" btn  btn-secondary"
              >
                Check this out
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselbg2 w-100">
          <div className="carousel-2 px-4">
            <div>
              <h5 className="min-header">#BEAUTYSALE</h5>
              <h4 className="main-header2">DISCOVER OUR<br/> BEAUTY  SELECTION</h4>
              <p className="sub-text">
                Discover fashion that suits to
                <br />
                your style
              </p>

              <button
                style={{ background: "#2c2d41", fontSize: "12px" }}
                className=" btn  btn-secondary"
              >
                Check this out
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
