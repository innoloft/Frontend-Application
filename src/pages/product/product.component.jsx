import React from 'react';
import { connect } from 'react-redux';

import AddressMap from '../../components/map/address-map.component';
import ProductImage from '../../components/product-image/product-image.component';
import ProductInfo from '../../components/product-info/product-info.component';
import Tabs from '../../components/tabs/tabs.component';
import UserInfo from '../../components/user-info/user-info.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchProduct, fetchTrl } from '../../redux/product/product.actions';

import './product.styles.scss';

const PRODUCT_ID = '6781';

class ProductPage extends React.Component {

    componentDidMount() {
        const { fetchProduct, fetchTrl } = this.props;
        fetchProduct(PRODUCT_ID);
        fetchTrl();
    }

    render() {
        const { product, trl, config } = this.props;

        const ProductPage = ({ product, trl }) => (
            <div className='product-page'>
                <div className='product-container'>
                    <div className="card">
                        <ProductImage picture={product.picture} />
                        <ProductInfo product={product} />
                    </div>
                    <Tabs product={product} trl={trl} />
                </div>
                <div className='user-container'>
                    {
                        config.hasUserSection ? <UserInfo user={product.user} /> : null
                    }
                    <AddressMap {...product.company.address} />
                </div>
            </div>
        );

        const ProductPageWithSpinner = WithSpinner(ProductPage);
        return (
            <>
                <ProductPageWithSpinner
                    isLoading={product && trl ? false : true}
                    product={product}
                    trl={trl} />
            </>
        )
    }
};

const mapStateToProps = state => ({
    product: state.product.product,
    trl: state.product.trl,
    config: state.config.config
});

const mapDispatchToProps = dispatch => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchTrl: () => dispatch(fetchTrl())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);