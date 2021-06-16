import { useEffect } from "react";
import { connect } from "react-redux";
import { toggleTab } from "../../redux/reducers/tab";
import { setInitialProductData } from "../../redux/reducers/product";
import { setInitialUserData } from "../../redux/reducers/user";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import User from "../../components/User";
import SVG from "react-inlinesvg";
import categoriesIcon from "../../images/icon-categories.svg";
import modelsIcon from "../../images/icon-models.svg";
import trlIcon from "../../images/icon-trl.svg";

const Description = (props) => {
  return <article className="description">{parse(props.text)}</article>;
};

const Attributes = (props) => {
  const categories = props.categories
    .map((category) => category.name)
    .join(", ");
  const models = props.models.map((model) => model.name).join(", ");

  return (
    <div className="attributes">
      <div className="attribute">
        <div className="attribute-label">
          <span>Categories</span>
          <i>
            <SVG src={categoriesIcon} width={16} height={16} />
          </i>
        </div>
        <div className="attribute-value">{categories}</div>
      </div>
      <div className="attribute">
        <div className="attribute-label">
          <span>Business Models</span>
          <i>
            <SVG src={modelsIcon} width={16} height={16} />
          </i>
        </div>
        <div className="attribute-value">{models}</div>
      </div>
      <div className="attribute">
        <div className="attribute-label">
          <span>TRL (Technology Readiness Level)</span>
          <i>
            <SVG src={trlIcon} width={16} height={16} />
          </i>
        </div>
        <div className="attribute-value">{props.trl.name}</div>
      </div>
    </div>
  );
};

const Product = ({
  tabIndex,
  product,
  toggleTab,
  setInitialProductData,
  setInitialUserData,
}) => {
  useEffect(() => {
    fetch("https://api-test.innoloft.com/product/6781/")
      .then((response) => response.json())
      .then((payload) => {
        const {
          id,
          name,
          type,
          picture,
          description,
          categories,
          businessModels,
          trl,
          user,
          company,
        } = payload;
        setInitialProductData({
          id,
          name,
          type,
          picture,
          description,
          categories,
          businessModels,
          trl,
        });
        setInitialUserData({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          profilePicture: user.profilePicture,
          company,
        });
      });
  }, [setInitialProductData, setInitialUserData]);

  const onTabButtonClick = (index) => {
    const activeIndex = tabIndex;
    if (index === activeIndex) {
      return;
    }

    toggleTab();
  };

  return (
    <>
      <div className="product">
        <div className="product-header">
          <h1 className="name">{product.name}</h1>
          <div className="type">{product.type.name}</div>
        </div>

        <div className="product-cover">
          <img src={product.picture} alt={`${product.name} product cover`} />
        </div>

        <div className="product-content">
          <div className="tabs">
            <div className={`tab ${tabIndex === 0 && "tab-active"}`}>
              <button onClick={() => onTabButtonClick(0)}>Description</button>
            </div>
            <div className="v-divider"></div>
            <div className={`tab ${tabIndex === 1 && "tab-active"}`}>
              <button onClick={() => onTabButtonClick(1)}>Attributes</button>
            </div>
            <div
              className="h-indicator"
              style={{
                transform: tabIndex === 1 && "translateX(100%)",
              }}
            ></div>
          </div>

          <div className="content-area">
            {tabIndex === 0 ? (
              <Description text={product.description} />
            ) : (
              <Attributes
                categories={product.categories}
                models={product.businessModels}
                trl={product.trl}
              />
            )}
          </div>
        </div>
      </div>

      <User />
    </>
  );
};

Product.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = ({ tabReducer: { tabIndex }, productReducer }) => ({
  tabIndex,
  product: productReducer,
});

const mapDispatchToProps = {
  toggleTab,
  setInitialProductData,
  setInitialUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
