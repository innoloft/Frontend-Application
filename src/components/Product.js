import React, { Fragment, useEffect, useState } from 'react';
import { getProduct, getTrl } from '../services/Product';
import { Map } from './Map'
import { connect } from 'react-redux';
import { getConfigurationState } from '../redux/action/index';
import UserProfile from '../components/UserProfile';
import loader from '../assets/images/loader.gif';
import ProductDetail from '../components/ProductDetail';

let userCardActive = true;

const Product = () => {
    const [product, setProduct] = useState([]);
    const [content, setContent] = useState("");
    const [categories, setCategories] = useState([]);
    const [businessModels, setBusinessModels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [trl, settrl] = useState([]);
    const [tab, setTab] = useState(1);

    useEffect(() => {
        let mounted = true;
        Promise.all([getProduct() ,getTrl()])
        .then(response=>{
            if(mounted && response[0].data && response[1].data) {
              const productResponse = response[0].data;
              const trlResponse = response[1].data;
              setProduct(productResponse);
              setContent(productResponse.description);
              setBusinessModels(productResponse.businessModels);
              setCategories(productResponse.categories);
              settrl(trlResponse);
              setIsLoading(false);
            }
        });

        return () => mounted = false;
    }, []);
    
    const toggleActiveTab = () => {
        const descriptionTab = document.querySelector('#description-tab');
        const attributeTab = document.querySelector('#attribute-tab');
        
        descriptionTab.classList.toggle('tab-active');
        attributeTab.classList.toggle('tab-active');
    }

    const onTabClick = (tabSelected) => {
        if(tabSelected !== tab) {    
            /*Set and Toggle tabs active*/ 
            setTab(tabSelected)
            toggleActiveTab(tabSelected);
            /*------------------*/ 
        }
    }

    return(        
        <Fragment>
            <div className="product-container">
                <div className="product-container__left-section">
                    {/* Product Image Starts */}
                    <div className="product-container__left-section__product-image-container">
                    {
                        (isLoading)? <div className="card-loader"><img src={loader} alt="loader" /></div>
                        :                    
                        <figure>
                            <img src={product && product.picture} alt="product" />
                        </figure>
                    }
                    </div>
                    {/* Product Image Ends */}
    
                    {/* Product Info starts */}
                    <div className="product-container__left-section__product-main-info-container">
                        <p><span>Product Name:</span> {product && product.name}</p>
                        <p><span>Product Type:</span> {product && product.type && product.type.name}</p>
                    </div>
                    {/* Product Info Ends */}
    
                    {/* Product Tabs Starts */}
                    <div className="product-container__left-section__product-tabs-container">
                        <div id="description-tab" onClick={()=>onTabClick(1)} className="product-container__left-section__product-tabs-container__product-description-tab tab-active">
                            <span>Description</span>
                        </div>
                        <div id="attribute-tab" onClick={()=>onTabClick(2)} className="product-container__left-section__product-tabs-container__product-attribute-tab">
                            <span>Attribute</span>
                        </div>
                    </div>
                    {/* Product Tabs Ends */}
    
                    {/* Product Tab content Starts */}
                    <div className="product-container__left-section__product-tab-content">
                    {
                        (isLoading)? <div className="card-loader"><img src={loader} alt="loader" /></div>
                        : ( 
                            (tab===1)? <p dangerouslySetInnerHTML={{__html:content}}></p>: 
                            <ProductDetail product={product} trl={trl} businessModels={businessModels} categories={categories}/>
                        )
                    }
                    </div>
                    {/* Product Tab content Ends */}
                </div>
                <div className="product-container__right-section">
                    {
                        userCardActive && (<div className="product-container__right-section--user-info">
                        {
                            (isLoading)? <div className="card-loader"><img src={loader} alt="loader" /></div>
                            : <UserProfile product={product} /> 
                        }
                        </div>)
                    }

                    <div className="product-container__right-section--map">
                    {
                        (isLoading)? <div className="card-loader"><img src={loader} alt="loader" /></div>
                        : ( 
                            product.company && product.company.address &&                     
                                <Map 
                                    lat={product.company.address.latitude} 
                                    lng={product.company.address.longitude}
                                />
                        )
                    }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


const mapStateToProps = state => {
    userCardActive = (state.configuration && state.configuration.hasUserSection)? true: false;

    return {
        configurations: getConfigurationState(state),
    }
};

export default connect(mapStateToProps, null)(Product);