import React, { Fragment } from 'react';


const UserProfile = ({product}) =>(
    <Fragment>
        <div className="product-container__right-section--user-info__image">
            <figure>
                <img src={product && product.user && product.user.profilePicture} alt="product" />
            </figure>
        </div>
        <div className="product-container__right-section--user-info__user-details">
            <div className="product-container__right-section--user-info__user-details__username">
                <h3>Name: </h3>
                <h3>{product && product.user && product.user.firstName+" "+product.user.lastName}</h3>
            </div>
            <div className="product-container__right-section--user-info__user-details__company_name">
                <h3>Company: </h3>
                <h3>{product && product.company && product.company.name}</h3>
            </div>
        </div>
    </Fragment>
);

export default UserProfile;