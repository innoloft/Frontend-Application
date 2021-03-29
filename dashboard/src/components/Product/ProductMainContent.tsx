import React from 'react';
import { CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl } from '../../types/Product';
import { ProductInfo } from './ProductInfo';
import parse from 'html-react-parser';
import Tabs from '../Tabs/Tabs';
import { SingleTab } from '../Tabs/SingleTab';
import { Attributes } from '../Attributes/Attributes';
import { Trl } from '../../types/Trl';

interface ProductMainContentProps{
    name: string
    type: CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl
    picture: string
    description: string
    businessModels: CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl[]
    categories: CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl[]
    trl: Trl;
}
export const ProductMainContent: React.FC<ProductMainContentProps> = props => {
    return (
        <div className="product-main-content">
            <img src={props.picture} alt=""/>
            <div className="product-text">
                <ProductInfo name={props.name} type={props.type.name} />
                
                <div className="product-tabs">
                    <Tabs> 
                        <SingleTab label="Description"> 
                            <div className="product-description">
                                {parse(props.description)}
                            </div>
                        </SingleTab> 
                        <SingleTab label="Attributes"> 
                            <Attributes 
                                categories={props.categories} 
                                businessModels={props.businessModels}
                                trl={props.trl}
                                />
                        </SingleTab> 
                    </Tabs> 
                </div>
            </div>
            </div>
    )
}