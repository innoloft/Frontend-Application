import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ProductPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  .header{
      width: 100%
    }   

img {
      width: 100%;
    grid-column: 0 / 1;
    grid-row: 0 / 1;
  }

  .info {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    margin: 30px 0 0;


    h2, p{
        margin 0;
    }
  }

  .description{
    margin: 10px;
  }

  .attributes {
    width: 100%;
    min-height: 300px;
    padding: 10px;
    justify-content: start;
    margin: 40px 0;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: start;
    box-sizing: border-box;

    .categories {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    button{
        max-width: 100px;
    }

    .businessModels {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      h4{
          margin: 10px 0;
      }
    }
  }


  .userInfo{
    max-width: 300px;
    margin: 40px 0;
    h2, p{
        margin 0;
    }
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1.7fr 1fr;
    grid-template-rows: 1fr 0.5fr 1.5fr;
    gap: 36px 0px;
    grid-template-areas:
    "header header"
    ". ."
    ". .";
}

    .header{
        grid-area: header;
    }

    img {
      max-width: 300px;
    }
  }
`;

export default function Product() {
  const [product, setProduct] = useState(null);
  const [contentTab, setContentTab] = useState(true);

  useEffect(() => {
    // probably this is not the right way because that are fetched every time the product page render
    // one solution should be to fetch it in the main page and cache it
    axios
      .get("https://api-test.innoloft.com/product/6781/")
      .then(({ data }) => {
        setProduct(data);
      });
  }, []);

  return (
    <ProductPage>
      <div className="header">
        <img src={product?.picture} alt="product" />
        <div className="info">
          <h2>{product?.name}</h2>
          <p>{product?.type.name}</p>
        </div>
      </div>
      <div className="description">
        <h3>Description</h3>
        <p>{product?.description}</p>
      </div>
      <div className="attributes">
        <button onClick={() => setContentTab((prev) => !prev)}>
          Switch Page
        </button>
        {contentTab ? (
          <div className="categories">
            <h3>Categories: </h3>
            {product?.categories.map((category) => (
              <h4 className="category" key={category.id}>
                {category.name}
              </h4>
            ))}
          </div>
        ) : (
          <div className="businessModels">
            <h3>BusinessModel: </h3>
            {product?.businessModels.map((bm) => (
              <h4 className="businessModel" key={bm.id}>
                {bm.name}
              </h4>
            ))}
          </div>
        )}
      </div>
      <div className="userInfo">
        <h3>User Info</h3>
        <img src={product?.user.profilePicture} alt="user" />
        <h2 className="name">
          {product?.user.firstName}&nbsp;{product?.user.lastName}
        </h2>
        <p>{product?.company.name}</p>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sit!4v1616573236367!5m2!1sen!2sit"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0, width: "100%" }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </ProductPage>
  );
}
