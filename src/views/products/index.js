import React from "react";
import useStyles from "./styles";
import { useGetProduct, getTRLList } from "../../services/productServices";
import { useSelector } from "react-redux";
import { Userinfo, Map, Chip } from "../../components";

const ProductsComponent = props => {
  useGetProduct();
  const [isLoading, setIsLoading] = React.useState(true);
  const classes = useStyles();
  const product = useSelector(state => state.product.data);
  const productLoading = useSelector(state => state.product.loading);
  const [trl, setTrl] = React.useState([]);
  function changeLoadingStatus() {
    setIsLoading(productLoading);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTRL = async () => {
    try {
      const trlList = await getTRLList();
      setTrl(trlList);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    getTRL();
    changeLoadingStatus();
  }, []);

  const [activeTab, setActiveTab] = React.useState(0);
  const changeTab = num => {
    setActiveTab(num);
  };
  return (
    <div className={classes.wrapper}>
      {isLoading && <span>Loading</span>}
      {!isLoading && Object.keys(product).length &&
        <React.Fragment>
          <div className={classes.product_image}>
            <img src={product.picture} alt={product.name} />
          </div>
          <div className={classes.details}>
            <h1 className={classes.title}>
              {product.name}
            </h1>
            <h3 className={classes.subText}>
              {product.type.name}
            </h3>
            <br />
            <section className={classes.tabWrapper}>
              <section className={classes.tabsButtonGroup}>
                <button
                  className={activeTab === 0 ? classes.active : ""}
                  onClick={() => changeTab(0)}
                  type="button"
                >
                  Description
                </button>
                <button
                  className={activeTab === 1 ? classes.active : ""}
                  onClick={() => changeTab(1)}
                  type="button"
                >
                  Attributes
                </button>
              </section>
              {activeTab === 0 &&
                <section>
                  <p
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </section>}
              {activeTab === 1 &&
                <section>
                  <p style={{ fontWeight: 600 }}>Categories</p>

                  {product.categories.map(item => {
                    return (
                      <span className={classes.subText} key={item.id}>
                        <Chip text={item.name} />
                      </span>
                    );
                  })}

                  <hr className={classes.devider} />
                  <p style={{ fontWeight: 600 }}>Business Models</p>

                  {product.businessModels.map(item => {
                    return (
                      <span className={classes.subText} key={item.id}>
                        <Chip text={item.name} />
                      </span>
                    );
                  })}

                  <hr className={classes.devider} />
                  {trl &&
                    <React.Fragment>
                      <p style={{ fontWeight: 600 }}>TRL</p>
                      <select defaultValue={product.trl.name} style={{width:300}}>
                        {trl.map(item => {
                          return (
                            <option className={classes.subText} key={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </React.Fragment>}
                </section>}
            </section>
            <br />
            <hr className={classes.devider} />
            <br />
            <section className={classes.extraInfo}>
              <div className={classes.userInfo}>
                <h4 style={{ marginTop: 0 }}>User Info</h4>
                <Userinfo user={product.user} />
              </div>
              <div className={classes.map}>
                <Map data={product.company.address} />
              </div>
            </section>
          </div>
        </React.Fragment>}
    </div>
  );
};

export default ProductsComponent;
