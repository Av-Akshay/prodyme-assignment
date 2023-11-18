import React from "react";
import "./customComponent.css";

const CustomComponent = ({ item, holder, price }) => {
  return (
    <div className="items_component">
      <div className="items">
        <div className="item_name">
          <p className="product"> {item} </p>
          <p className="product_holder"> {holder} </p>
        </div>
        <div>
          <button className="customize_btn"> customize </button>
        </div>
        <div className="item_price">
          <p className="product_price"> {price} </p>
          <p className="product_holder"> per sqft</p>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
