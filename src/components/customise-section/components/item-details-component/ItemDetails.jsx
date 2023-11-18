import React from "react";
import { Card } from "../../../index";
import "./details.css";

const ItemDetails = ({ setCardToggle }) => {
  return (
    <div className="item_detail">
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="collapse">
        <button
          className="collapse_btn"
          onClick={() => {
            setCardToggle(false);
          }}
        >
          Collapse
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
