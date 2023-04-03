import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import OptionsBtn from "./OptionsBtn";
import { TbTableOptions } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdFlight } from "react-icons/md";
const Options = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="options-slider w-100 py-3 d-flex justify-content-around px-3">
          <OptionsBtn title="Category">
            <TbTableOptions color="#6a6a6a" size={"25"} />
          </OptionsBtn>
          <OptionsBtn title="Flight">
            <MdFlight color="#6a6a6a" size={"25"} />
          </OptionsBtn>
          <OptionsBtn title="Bill">
            <FaMoneyBillWave color="#6a6a6a" size={"25"} />
          </OptionsBtn>
          <OptionsBtn title="Data Plan">
            <BiGlobe color="#6a6a6a" size={"25"} />
          </OptionsBtn>
          <OptionsBtn title="TopUp">
            <RiMoneyDollarCircleLine color="#6a6a6a" size={"25"} />
          </OptionsBtn>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Options;
