import React, { useState } from "react";
import "../assets/styles/tabs.scss";

const Tabs = ({ product }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="tabsWrapper">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Description
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Attributes
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>{product?.description}</p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h3>Categories</h3>
          {product?.categories.map((category) => (
            <input
              type="text"
              value={category.name}
              onChange={(e) => console.log(e.target.value)}
              key={category.id}
            />
          ))}
          <h3>Business Models</h3>
          {product?.businessModels.map((businessModel) => (
            <input
              type="text"
              value={businessModel.name}
              onChange={(e) => console.log(e.target.value)}
              key={businessModel.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
