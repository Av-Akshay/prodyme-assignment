import React, { useState } from "react";
import "./customComponent.css";
import { ItemDetails } from "../../../index";

const CustomComponent = ({ item, holder, price }) => {
  const [cardToggle, setCardToggle] = useState(false);

  return (
    <div className="items_component">
      <div className="items">
        <div className="item_name">
          <p className="product"> {item} </p>
          <p className="product_holder"> {holder} </p>
        </div>
        <div>
          {!cardToggle ? (
            <button
              className="customize_btn"
              onClick={() => {
                setCardToggle(true);
              }}
            >
              customize
            </button>
          ) : null}
        </div>
        <div className="item_price">
          <p className="product_price"> {price} </p>
          <p className="product_holder"> per sqft</p>
        </div>
      </div>
      <div className="collapes_component">
        {cardToggle && <ItemDetails setCardToggle={setCardToggle} />}
      </div>
    </div>
  );
};

export default CustomComponent;
