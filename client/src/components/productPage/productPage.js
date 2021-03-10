import React from 'react';
import { BaseTemplate } from '../baseTemplate';
import Product from './product';

const ProductPage = () => {
   return <BaseTemplate heading={'Trades'} content={Product} />;
};

export default ProductPage;
