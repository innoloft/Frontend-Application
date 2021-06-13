import React from "react";
import { connect } from "react-redux";
import "./assets/styles.css";
import logo_icon from "./assets/logo.svg";
import home_icon from "./assets/home.svg";
import keine_user from "./assets/default-avatar.jpg";
import product_icon from "./assets/product.svg";

const mapStateToProps = (state) => {
  return state;
};

const Router = (path) => {
  window.location.hash = `/${path}`;
};

function App({ data, config, trl }) {
  const {
    description,
    name,
    picture,
    businessModels,
    company,
    categories,
    type,
    user,
  } = data || {};
  const { mainColor, logo, hasUserSection } = config || {};
  const [thema, setThema] = React.useState({
    mainColor: "",
    color: "black",
    login: hasUserSection,
  });
  const [navigate, setNavigate] = React.useState("main");
  const [content, setContent] = React.useState("desc");
  const [atrbcontent, setAtrbontent] = React.useState({
    category: "",
    bmodels: "",
    trl: "",
    desc: description,
  });
  const handleNavigate = (e) => {
    switch (e.target.className) {
      case "n-main":
        Router("");
        setNavigate("main");
        break;
      case "n-products":
        Router("products");

        setNavigate("products");
        break;
      default:
        setNavigate("");
    }
  };

  const handleChangeContent = (e) => {
    switch (e.target.name) {
      case "desc":
        setContent("desc");
        break;
      case "atrb":
        setContent("atrb");
        break;
      default:
        setContent("desc");
    }
  };
  const handleChangeAttrContent = (e) => {
    setAtrbontent((prevS) => ({
      ...prevS,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: mainColor !== "" ? thema.mainColor : "",
        color: mainColor !== "" ? thema.color : "white",
      }}
    >
      <img
        id="logo"
        alt="logo"
        src={logo && logo_icon}
        onClick={() =>
          setThema({
            mainColor: thema.mainColor === "" ? mainColor : "",
            color: thema.color === "white" ? "black" : "white",
          })
        }
      />
      <div className="main-aria">
        <div className="navigation-c">
          <div
            onClick={(e) => handleNavigate(e)}
            name="main-page"
            className="n-main"
          >
            <img alt="home" src={home_icon} /> Home
          </div>
          <div
            onClick={(e) => handleNavigate(e)}
            name="products"
            className="n-products"
          >
            <img alt="home" src={product_icon} />
            Products
          </div>
        </div>
        {navigate === "main" ? null : (
          <>
            <div className="product-c">
              <img className="p-image" alt={name} src={picture} />
              <div className="p-info">
                <span>
                  <b>Title &#10145;</b> {name}
                </span>
                <span>
                  <b>Type &#10145;</b> {type.name}
                </span>
              </div>
              <div className="tabs">
                <button
                  onClick={(e) => handleChangeContent(e)}
                  name="desc"
                  className="desc-t"
                >
                  Description{" "}
                </button>
                <button
                  onClick={(e) => handleChangeContent(e)}
                  name="atrb"
                  className="atrb-t"
                >
                  Attribute{" "}
                </button>
              </div>
              {content === "desc" ? (
                <div
                  contentEditable={true}
                  name="desc"
                  onInput={(e) => handleChangeAttrContent(e)}
                  className="t-content"
                  dangerouslySetInnerHTML={{
                    __html: description || atrbcontent.desc,
                  }}
                />
              ) : (
                <div className="t-content" id="atribute-content">
                  <div>
                    <label htmlFor="categories">Categories</label>
                    <input
                      list="categories"
                      name="category"
                      value={atrbcontent.category}
                      onChange={(e) => handleChangeAttrContent(e)}
                    ></input>
                    <datalist id="categories">
                      {categories.map(({ name }) => (
                        <option value={name} />
                      ))}
                    </datalist>
                  </div>
                  <div>
                    <label htmlFor="bussiness-m">Bussiness Model</label>
                    <input
                      list="bussiness-model"
                      value={atrbcontent.bmodels}
                      name="bmodels"
                      onChange={(e) => handleChangeAttrContent(e)}
                    />
                    <datalist id="bussiness-model">
                      {businessModels.map(({ name }) => (
                        <option value={name} />
                      ))}
                    </datalist>
                  </div>
                  <div>
                    <label htmlFor="trl">Technology Readiness</label>
                    <input
                      list="trl"
                      id="trls"
                      name="trl"
                      value={atrbcontent.trl}
                      onChange={(e) => handleChangeAttrContent(e)}
                    />
                    <datalist name="trl" id="trl">
                      {trl.map(({ name }) => {
                        return <option value={name.slice(0, 22)} />;
                      })}
                    </datalist>
                  </div>
                </div>
              )}
            </div>

            <div className="user-c">
              <div className="user-info">
                {thema.login === true ? (
                  <>
                    <img
                      alt={user.firstName}
                      src={user.profilePicture}
                      title="Click to log out"
                      onClick={() =>
                        setThema((pS) => ({
                          ...pS,
                          login: false,
                        }))
                      }
                    />
                    <p>{user.firstName + " " + user.lastName}</p>
                    <p>{company.name}</p>
                  </>
                ) : (
                  <img
                    alt="keine-user"
                    src={keine_user}
                    title="Click to log in"
                    onClick={() =>
                      setThema((pS) => ({
                        ...pS,
                        login: true,
                      }))
                    }
                  />
                )}
              </div>
              <iframe
                title="map"
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10091.114733317616!2d6.1006609!3d50.7796761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb82ea0594132a59!2sInnoloft%20GmbH!5e0!3m2!1str!2str!4v1616766072190!5m2!1str!2str"
              ></iframe>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default connect(mapStateToProps, null)(App);
