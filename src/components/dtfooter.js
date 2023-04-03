import React from "react";
import FooterBtn from "./footerbtn";
import { FiLock } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BiWallet } from "react-icons/bi";
import { HiOutlineCreditCard } from "react-icons/hi";

const DtFooter = () => {
  return (
    <div id="footer-sectiondt">
      <div className=" py-1">
        <p className="textLight ">Total Price</p>
        <h3 className="txt-green fw-bolder p-0 m-0 lh-3">$18.00</h3>
      </div>
      <span>
        <button className="border-0 h-100 btn-key bg-green text-white">
          <FiLock className="me-2" color="#ffffff" size={"24"} />1
        </button>
        <button className=" btn-buy">Buy now</button>
      </span>
    </div>
  );
};

export default DtFooter;
