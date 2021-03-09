import React,{useEffect, useState} from 'react'
// import { useHistory } from 'react-router-dom'
// import Button from '../../components/Button/Button';
import GoogleMap from '../../components/map/Map'
import Spinner from '../../components/Sipnner/Spinner'
import { Avarta, ImageCard, Product, ProductDetails, ProductImage,ProfileSection, Profile } from "./product.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducStartAsnyc } from "../../redux/product/productAction";
import "./product.scss";

function Index() {
  // hello
  const product = useSelector((state) => state.product.product);
  // const isLoading = useSelector((state) => state.product.isLoading);
  const dispatch = useDispatch();
  const [des, setDes] =useState(true);
  useEffect(() => {
    dispatch(fetchProducStartAsnyc());
  }, [dispatch]);

  const showDescription = () => {
    setDes(true);
  };
  const showAttributes = () => {
    setDes(false);
  };
 
    const renderProduct =()=>{
       if (!product.picture) {
      return <Spinner />;
    } else if (product.picture) {
      return (
        <Product>
          <ProductDetails>
            <ProductImage>
              <ImageCard src={product.picture} alt="product" />
            </ProductImage>
            <div className="mainInfoSection">
              <h3>{product.name}</h3>
              <p>{product.type.name}</p>
            </div>
            <div className="tabSection">
              <p
                onClick={showDescription}
                className={`${des ? "bottom-blue" : null}`}
              >
                Description
              </p>

              <p
                onClick={showAttributes}
                className={`${!des ? "bottom-blue" : null}`}
              >
                Attributes
              </p>
            </div>
            <div className="contenSection">
              {des ? (
                <p className="product-description">{product.description}</p>
              ) : (
                <>
                  <div className="attributes">
                    <div className="category">
                      <h4>Categories</h4>
                      <ul>
                        <>
                          {product.categories.map((category) => (
                            <li key={category}>{category.name}</li>
                          ))}
                        </>
                      </ul>
                    </div>
                    <div className="business-modal">
                      <h4>Business Models</h4>

                      <ul>
                        <>
                          {product.businessModels.map((model) => (
                            <li key={model}>{model.name}</li>
                          ))}
                        </>
                      </ul>
                    </div>
                  </div>
                  <p>{product.trl.name}</p>
                </>
              )}
            </div>
            {/* <Button onClick={redirect}>Edit</Button> */}
          </ProductDetails>
          <ProfileSection>
            <div className="profile">
              <Profile>
                <Avarta src={product.user.profilePicture} alt="" />
              </Profile>
              <p>
                {product.user.firstName} {product.user.lastName}
              </p>
              <p>{product.company.name}</p>
            </div>
            <div className="profile">
              <GoogleMap />
            </div>
          </ProfileSection>
        </Product>
      );
    }
    }
    return  renderProduct();
    
}

export default Index
