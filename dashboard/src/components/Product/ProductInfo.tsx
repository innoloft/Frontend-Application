import React from 'react';

interface ProductInfoProps{
    name: string
    type: string
}

export const ProductInfo:React.FC<ProductInfoProps> = props => {
    return (
        <div className="product-info">
            <h1>{props.name} {props.type}</h1>
        </div>
    )
}