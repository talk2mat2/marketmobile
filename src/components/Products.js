import React from "react";
import ProductsCard from "./productsCards";
import Img1 from "../products/2.png"
import Img3 from "../products/3.png"
import Img4 from "../products/4.png"


const Products = () => {
  return (
    <div className="py-3 bg-white ">
      <div className="d-flex flex-row justify-content-between px-3 pt-4">
        <h5 className="header1">Best Sale Products</h5>{" "}
        <button className="border-0 btn-more ">See More</button>
      </div>
      <section className="d-flex flex-row flex-wrap w-100 p-2 justify-content-between products-section">
        <ProductsCard img={Img1} />
        <ProductsCard img={Img3} />
        <ProductsCard img={Img4} />
        <ProductsCard img={Img1} />
        <ProductsCard img={Img3} />
        <ProductsCard img={Img4} />
        <ProductsCard img={Img3} />
        <ProductsCard img={Img4} />
      </section>
    </div>
  );
};

export default Products;
