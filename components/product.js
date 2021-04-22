import React from 'react';
import ProductTabsComponent from './tabs';
export default function ProductComponent(props) {
    return (
        <React.Fragment>
            <article className="page_articles section_article">
                <div className="article_section product_image">
                    <div className="image_container">
                        <img src={props.picture} alt="Product image" />
                    </div>
                </div>
                <div className="article_section product_maininfo ">
                    <div className="page_text product_name">
                        <span className="product_title">Title: </span>
                        <span>{props.name}</span>
                    </div>
                    <div className="page_text product_type">
                       <span className="product_type"> Type: </span> 
                       <span>{props.type.name}</span> 
                    </div>
                </div>
                <ProductTabsComponent />
            </article>
            <article className="page_article section_article">
                <div className="article_section user_info">
                    <img src={props.user.profilePicture} alt={`${props.user.firstName}'s profile picture`} />
                    <div className="user_info__container">
                        <h4 className="user_name">{props.user.firstName} {props.user.lastName}</h4>
                        <h4 className="user_company">Innoloft</h4>
                    </div>
                </div>
                <div className="article_section map">
                    <div className="map">
                        <iframe
                            src={
                                `https://maps.google.com/maps?q="${props.company.address.latitude},${props.company.address.longitude}}&t=&z=15&ie=UTF8&iwloc=&output=embed`
                            }
                            width="100%"
                            height="250px" 
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </article>
        </React.Fragment>
    )
}