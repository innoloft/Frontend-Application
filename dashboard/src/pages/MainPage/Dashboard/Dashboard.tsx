import React from 'react';
import { ProductController } from '../../../components/Product/ProductControler';

export const Dashboard: React.FC<{}> = () => {
    return(
        <div className="dashboard">
            <ProductController />
        </div>
    )
}