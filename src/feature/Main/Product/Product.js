import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from './productSplice';
import { getTrl } from './trlSplice';
import ProductAttribute from './ProductAttribute';
import ProductMap from './ProductMap';
import Tabs from '../../../component/Tabs/Tabs';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ProductUserInfo from './ProductUserInfo';
import { useMediaQuery } from 'react-responsive';
import Loading from '../../../component/Loading';

function Product() {
  const dispatch = useDispatch();
  const config = useSelector(state => state.config.data);
  const product = useSelector(state => state.product.data);
  const status = useSelector(state => state.product.status);
  const trlStatus = useSelector(state => state.trl.status);
  const isMobile = useMediaQuery({
    query: '(max-width: 900px)'
  })

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getProduct())
    }
    if (trlStatus === 'idle') {
      dispatch(getTrl());
    }
  }, [status, trlStatus, dispatch]);

  return (
    <Fragment>
        {status === 'loading' && (
          <Loading />
        )}
        {status === 'success' && (
            <div style={{display: isMobile ? '' : 'flex'}}>
                <div style={{width: isMobile ? '100%' : '75%', padding: isMobile ? 0 : '0 10px'}}>
                    <ProductInfo isMobile={isMobile} product={product} />
                    <Tabs> 
                        <div tabKey={1} tabLabel="Description"> 
                            <ProductDescription isMobile={isMobile} desc={product.description} />
                        </div>
                        <div tabKey={2} tabLabel="Attributes"> 
                            <ProductAttribute isMobile={isMobile} config={config} product={product} />
                        </div>
                    </Tabs> 
                </div>
                <div style={{width: isMobile ? '100%' : '25%'}}>
                  {config.hasUserSection && (
                    <ProductUserInfo isMobile={isMobile} user={product.user} company={product.company} />
                  )}
                  <ProductMap hasUserSection={config.hasUserSection} isMobile={isMobile} address={product.company.address} />
                </div>
            </div>
        )}
        {status === 'error' && (
          <h2>Error, Failed Get Data</h2>
        )}
      
    </Fragment>
  );
}

export default Product;
