import React from 'react';
import { Product as ProductProps } from '../../types/Product';
import { Map } from '../Map/Map';
import { UserCard } from '../UserCard/UserCard';
import { ProductMainContent } from './ProductMainContent';

export const Product: React.FC<ProductProps> = props => {
    return(
        <div className="product">
            <div className="main-content">
                <ProductMainContent
                    name={props.name}
                    type={props.type}
                    picture={props.picture}
                    description={props.description}
                    categories={props.categories!}
                    businessModels={props.businessModels!}
                    trl={props.trl}
                />
            </div>
            <div className="side-panel">
                <UserCard user={props.user}/>
                <Map company={props.company}/>
            </div>
        </div>  
    ) 
}