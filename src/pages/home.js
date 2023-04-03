import React from "react";
import { FiLock } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import Carousel from "../components/carousel";
import Options from "../components/options";
import Products from "../components/Products";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className=" position-relative">
      <nav className="nav-bar d-flex justify-content-between px-4 align-items-center ">
        <div class="px-2 input-group rounded-start search me-3 ">
          <button className=" searchbtn border-0 mx-2">
            <i style={{ color: "#949494" }} class="fa-solid fa-search"></i>
          </button>
          <input
            placeholder="Search"
            class="border-0 searchinput flex-grow-1 px-2 "
            type="search"
            id="example-search-input"
          />
        </div>
        <div className="position-relative nav-icons me-2 ">
          <FiLock color="#2a2a2a" size={"24"} />
          <div className="label position-absolute  py-0">1</div>
        </div>
        <div className="position-relative nav-icons ms-2">
          <BiMessageDetail color="#2a2a2a" size={"24"} />
          <div className="label position-absolute  py-0">1</div>
        </div>
      </nav>
      <div>
        <Carousel />
      </div>
      <div id="options-section">
        <Options />
      </div>
      <div className="pb-5">
        <Products />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
