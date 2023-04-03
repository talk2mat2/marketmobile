import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();
  return (
    <div className="header2 d-flex flex-row justify-content-between px-3 py-2">
      <button onClick={() => navigate(-1)} className="border-0 bg-transparent ">
        <IoIosArrowBack size={"26"} />
      </button>
      <div className="d-flex align-items-center">
        <button className="border-0 bg-transparent px-2 ">
          <AiTwotoneHeart color="tomato" size={"25"} />
        </button>
        <button className="border-0 bg-transparent px-2 ">
          <AiOutlineShareAlt size={"26"} />
        </button>
        <div className="position-relative nav-icons px-1">
          <BiMessageDetail color="#2a2a2a" size={"25"} />
          <div className="label position-absolute  py-0">1</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
