import React from "react";
import "./customComponent.css";

const CustomComponent = ({ item, holder, price }) => {
  return (
    <div className="items_component">
      <div className="items">
        <div className="item_name">
          <p> {item} </p>
          <p> {holder} </p>
        </div>
        <div>
          <button> customize </button>
        </div>
        <div className="item_price">
          <p> {price} </p>
          <p> per sqft</p>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
