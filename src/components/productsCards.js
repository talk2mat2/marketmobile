import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductsCard = ({ title = "Shirt", price = "$12.00", img }) => {
  return (
    <a href={"/details"} className="productsCard">
     
        <div className="cards-img pb-2">
          <img style={{ objectFit: "contain", height: "100%" }} src={img} />
        </div>
        <div className="mt-auto">
          <p className="cardstitle">{title}</p>
          <h6 className="header1 cardDescription">
            Essentials mens short sleef crewneck ...
          </h6>
          <div className="d-flex flex-row justify-content-between">
            <div className="d-inline-flex">
              <AiTwotoneStar color="orange" />
              <h6 className="textLight ps-1">4.8|2356</h6>
            </div>
            <div>
              <button className="border-0 btn-more fw-bold">{price}</button>
            </div>
          </div>
        </div>
  
    </a>
  );
};

export default ProductsCard;
