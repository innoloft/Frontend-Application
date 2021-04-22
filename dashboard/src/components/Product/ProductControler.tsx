import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchProduct, selectProduct } from '../../features/product/productSlice';
import { Product } from './Product';


export const ProductController: React.FC <{}> = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: RootState) => state.product.status)
    const error = useSelector((state: RootState) => state.product.error)
    const product = useSelector(selectProduct)
    let content
    if (status === 'loading'){
        content = "loading..." // TODO: add proper loading component
    } else if (status === 'succeeded') {
        content = 
        <Product 
            name={product.name}
            user={product.user}
            description={product.description}
            picture={product.picture}
            type={product.type}
            investmentEffort={product.investmentEffort}
            trl={product.trl}
            company={product.company}
            categories={product.categories}
            businessModels={product.businessModels}
            />
    } else if (status === 'failed') {
        content = error
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProduct(6781))
        }
    }, [status, dispatch])
    
    return(
        <>
        {content}
        </>
    )
}