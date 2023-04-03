import React, { useEffect } from "react";
import Img1 from "../products/1.png";
import Img2 from "../products/2.png";
import Img3 from "../products/3.png";
import Header from "../components/header";
import { BiBowlRice } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import { IoMdThumbsUp } from "react-icons/io";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RtBar from "../components/rtbar";
import Products from "../components/Products";
import DtFooter from "../components/dtfooter";

const DetailView = () => {

  return (
    <div>
      <Header />
      <div
        style={{ background: "#f3f3f3" }}
        className="mt-5 d-flex justify-content-center overflow-hidden fadeInUp  "
      >
        <img
          className="mt-3"
          style={{ objectFit: "contain", width: "80%" }}
          src={Img1}
        />
      </div>
      <section className=" d-inline fadeInUp delay3 ">
        <div className="px-3  mt-3">
          <BiBowlRice className="d-inline me-2" />
          <p className="cardstitle d-inline">tokobaju</p>
        </div>
        <div className="px-3 mt-2 ">
          <h5 className="header1">
            Essentials mens's Short-sleeve
            <br /> Crewneck T-Shirt
          </h5>{" "}
        </div>
      </section>
      <section className="mt-3 px-3 d-flex flex-row justify-content-between fadeInUp delay3">
        <div>
          <AiTwotoneStar className="d-inline" size={"25"} color="orange" />
          <h6 className="d-inline textLight ">4.8 Ratings</h6>
        </div>
        <div>
          <h6 className="d-inline textLight ">2.3k Reviews</h6>
        </div>
        <div>
          <h6 className="d-inline textLight ">2.9k + Solis</h6>
        </div>
      </section>
      <section className="mt-3 px-3 fadeInUp delay4">
        <Tabs
          defaultActiveKey="About Item"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="About Item" title="About Item">
            <div className="d-flex justify-content-between mb-4">
              <ul id="detailList">
                <li>
                  <h6 className=" d-inline textLight me-2 ">Brand:</h6>{" "}
                  <h6 className="d-inline textLight fw-bolder ">Chamkpr</h6>
                </li>
                <li>
                  <h6 className="d-inline textLight me-2 ">Category: </h6>
                  <h6 className="d-inline textLight fw-bolder ">Chamkpr</h6>
                </li>
                <li>
                  <h6 className="d-inline textLight me-2 ">Condition: </h6>
                  <h6 className="d-inline textLight fw-bolder ">New</h6>
                </li>
              </ul>
              <ul id="detailList">
                <li>
                  <h6 className=" d-inline textLight me-2 ">Brand:</h6>{" "}
                  <h6 className="d-inline textLight fw-bolder ">Chamkpr</h6>
                </li>
                <li>
                  <h6 className="d-inline textLight me-2 ">Category: </h6>
                  <h6 className="d-inline textLight fw-bolder ">Chamkpr</h6>
                </li>
                <li>
                  <h6 className="d-inline textLight me-2 ">Condition: </h6>
                  <h6 className="d-inline textLight fw-bolder ">New</h6>
                </li>
              </ul>
            </div>
            <hr class="mt-4 mb-4" />
            <div className="px-3 mt-2 ">
              <h5 className="header1">Description</h5>
              <ul className="mt-3 ps-3 mb-4">
                <li>
                  <h6 className="d-inline textLight me-2 ">
                    Long sleeves dress shirt classic featuring
                    <br /> down collar{" "}
                  </h6>
                </li>
                <li>
                  <h6 className="d-inline textLight me-2 ">
                    Patch Pocket on Left Chest
                  </h6>
                </li>
                <li>
                  <h6 className="d-inline textLight me-2 ">
                    Durable Combination Cotton Fabric
                  </h6>
                </li>
                <li>
                  <h6 className="d-inline textLight me-2 ">
                    Confortable and quality dress shirt
                  </h6>
                </li>
                <li>
                  <h6 className="d-inline textLight me-2 ">
                    Go To Classic down sirt for all special
                  </h6>
                </li>
              </ul>
              <h6 className="d-inline textLight me-2 ">
                Chat us if there is anything you need to ask about the product
              </h6>
            </div>
          </Tab>
          <Tab eventKey="Reviews" title="Reviews">
            <p>reviews here</p>
          </Tab>
        </Tabs>
        <h6 style={{ color: "#52aa95" }} className="mt-4 ">
          See Less
        </h6>
        <hr class="mt-4 mb-5" />
        <div className="mt-5">
          <h5 className="header1">Shipping Information</h5>
          <ul id="detailList ">
            <li>
              <h6 className=" d-inline textLight me-2 ">Delivery:</h6>{" "}
              <h6 className="d-inline textLight fw-bolder ">
                Shipping from Indonesia
              </h6>
            </li>
            <li>
              <h6 className="d-inline textLight me-2 ">Category: </h6>
              <h6 className="d-inline textLight fw-bolder ">
                FREE International Shipping
              </h6>
            </li>
            <li>
              <h6 className="d-inline textLight me-2 ">Condition: </h6>
              <h6 className="d-inline textLight fw-bolder ">
                Estimated arrival on 25-17 Oct 2022
              </h6>
            </li>
          </ul>
        </div>
        <hr class="mt-4 mb-5" />
        <h5 className="header1">Reviews & Ratings</h5>
        <section className=" d-flex flex-row mb-5">
          <div className="me-2">
            <div className="mt-4">
              <h1 className="d-inline ratingsNo me-2">4.9</h1>
              <h4 className="d-inline ms-1 textLight">/5.0</h4>
            </div>
            <div className="mt-3">
              <AiTwotoneStar className="d-inline" size={"25"} color="orange" />
              <AiTwotoneStar className="d-inline" size={"25"} color="orange" />
              <AiTwotoneStar className="d-inline" size={"25"} color="orange" />
              <AiTwotoneStar className="d-inline" size={"25"} color="orange" />
              <AiTwotoneStar className="d-inline" size={"25"} color="orange" />
            </div>
          </div>
          <div className="col">
            <RtBar width="70%" />
            <RtBar width="50%" total="70" />
            <RtBar width="45%" total="160" />
            <RtBar width="30%" total="140" />
            <RtBar width="10%" total="10" />
          </div>
        </section>
        <div>
          <h5 className="header1">Reviews with images $videos</h5>
          <div className="d-flex flex-row justify-content-around mt-3">
            <div className=" rounded-start" style={{}}>
              <img width={"70px"} src={Img3} />
            </div>
            <div className=" rounded-start" style={{}}>
              <img width={"70px"} src={Img3} />
            </div>
            <div className=" rounded-start" style={{}}>
              <img width={"70px"} src={Img3} />
            </div>
            <div className="rounded-start" style={{}}>
              <img width={"70px"} src={Img3} />
            </div>
          </div>
        </div>
        <hr class="mt-4 mb-5" />
        <section className="py-2 mb-3">
          <div className="d-inline">
            <h5 className="header1">Top Reviewss</h5>
            <h6 className="d-inline textLight me-2 ">
              Showing 3 of2.5k reviews{" "}
            </h6>
          </div>
          <div className="d-inline float-end rv-select col-4">
            <select>
              <option>Popular</option>
            </select>
          </div>
        </section>
        <section className="mt-5 w-100 mb-4 reviews">
          <div className="d-flex flex-row justify-content-between  w-100">
            <div className="d-flex  align-items-center">
              <div
                style={{ width: "30px", height: "30px" }}
                className="bg-info rounded-circle"
              />
              <h5 className="header1 m-0 ms-3">Eren Y***r</h5>
            </div>
            <div>
              <AiTwotoneStar className="d-inline" size={"25"} color="orange" />
              <h5 className="header1 d-inline mx-2">5.0</h5>
              <button className="border-0 bg-transparent">
                <BsThreeDots size="20" />
              </button>
            </div>
          </div>
          <div className="mt-4 mb-3">
            <span class="badge rounded-pill bg-white  badges m-1">
              Producr in good condition
            </span>
            <span class="badge rounded-pill bg-white  badges m-1">
              Veru fast delivery
            </span>
            <span class="badge rounded-pill bg-white  badges m-1">
              Fast Seller Re
            </span>
          </div>
          <span className=" rvtext fw-bold">
            According to my expectations ,this is the best
          </span>
          <div className="d-flex justify-content-between mt-3">
            <span>
              <IoMdThumbsUp className="d-inline pb-1 txt-green fw-bold" />
              <p className="d-inline ms-2 txt-green">helpfull ?</p>
            </span>
            <span className="">
              <p>Yesterday</p>
            </span>
          </div>
        </section>
      </section>
      <section>
        <div className=" px-3 pt-4 mb-4">
          <span className="header1">Recommendations</span>{" "}
          <span className="float-end">
            <button className="border-0 btn-more ">See More</button>
          </span>
        </div>
        <Products />
      </section>
      <DtFooter />
    </div>
  );
};

export default DetailView;
