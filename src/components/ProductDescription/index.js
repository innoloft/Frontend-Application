import PrimaryButton from "components/Button/PrimaryButton";
import { useState } from "react";
import { ProductDescriptionWrapper } from "./StyledComponents";

const ProductDescription = (porps) => {
  const { picture, tabInfo, productMainInfo } = porps;
  const [currentTab, setCurrentTab] = useState(1);

  const toggleCurrentTab = (tabkey) => {
    setCurrentTab(tabkey);
  };
  return (
    <ProductDescriptionWrapper>
      <div className="product_image">
        <img src={picture} alt="product" />
      </div>
      <div className="product_info">
        <h4>Title: {productMainInfo?.title}</h4>
        <p>Type: {productMainInfo?.type?.name}</p>
      </div>
      <div className="product_tabs">
        <div className="tabs">
          <PrimaryButton
            text="Description"
            style={{ width: "45%" }}
            onClick={() => toggleCurrentTab(1)}
          />
          <PrimaryButton
            text="Attributes"
            style={{ width: "45%" }}
            onClick={() => toggleCurrentTab(2)}
          />
        </div>
        <div className="product_tab_panel">
          {currentTab === 1 ? (
            <div>{tabInfo && tabInfo[0]?.description}</div>
          ) : (
            <div>
              <h4>Business Models</h4>
              <ol>
                {tabInfo[1]?.businessModels?.map((modal) => (
                  <li key={modal.name}> {modal.name}</li>
                ))}
              </ol>
              <h4>Categories</h4>
              <ol>
                {tabInfo[1]?.categories?.map((category) => (
                  <li key={category.name}> {category.name}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </ProductDescriptionWrapper>
  );
};

export default ProductDescription;
