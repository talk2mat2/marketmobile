import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const RtBar = ({ width="40%",number ,total="1.5k"}) => {
  return (
    <div className="  rtbar">
      <AiTwotoneStar className="d-inline" size={"19"} color="orange" />
      <h6 className="textLight p-0 m-0 mx-1">{number}</h6>
      <div
        style={{
          background: "#f3f3f3",
          height: "26%",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <div style={{ width: width }} className="rtlevel h-100"></div>
      </div>
      <h5 style={{ fontSize:"13px" }} className=" ms-2 header1 m-0">{total}</h5>
    </div>
  );
};

export default RtBar;
