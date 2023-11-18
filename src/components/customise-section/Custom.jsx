import React from "react";
import { CustomComponent } from "../../components/index";

import "./index.css";

const custom = () => {
  return (
    <div className="item_section">
      <div className="flex_item">
        <div className="item_section_header">
          <p> customize the specification below</p>
        </div>
        <div className="total_items">
          <CustomComponent
            item="steel (sariya)"
            holder="Rathi, Kamdhenu or eq."
            price="INR 150"
          />
          <CustomComponent
            item="Concrete"
            holder="RMC (Ultratech, Prism, Acc)"
            price="INR 150"
          />
          <CustomComponent
            item="Floor Finish"
            holder="Vitrified tiles (base rate INR 65/-)"
            price="INR 150"
          />
        </div>
      </div>
    </div>
  );
};

export default custom;
