import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchListOfTrl } from '../actions'; 
import { ProductComponent } from '../components';

export default function ProductContainer() {
    
    const State = useSelector(state => state.product);
    const { loading, product } = State; 

    const dispatch = useDispatch();
    useEffect(() => {
         dispatch(fetchProducts());
         dispatch(fetchListOfTrl())
    }, [])
 
    return (
        <React.Fragment>
            { !loading && product ?
                <ProductComponent 
                picture={product.picture}
                name={product.name}
                type={product.type}
                user={product.user}
                company={product.company}
            /> : 
            <div className="loading_text">
                <h2>
                    Loading...
                </h2>
            </div>
            }
        </React.Fragment>
    )
}