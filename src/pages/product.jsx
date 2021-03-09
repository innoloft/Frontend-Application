import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User, Loader, GoogleMap } from '../components';
import TabsContainer from '../containers/tabs';
import { fetchProduct, selectProduct } from '../slices/productSlice';

function Product() {
	const dispatch = useDispatch();
	const { product, loading } = useSelector(selectProduct);

	useEffect(
		() => {
			dispatch(fetchProduct());
		},
		[ dispatch ]
	);

	return loading ? (
		<Loader />
	) : (
		<div className="product">
			<div className="product_details">
				<div className="product_image">
					<img src={product.picture} alt="Product" />
				</div>
				<div className="product_info">
					<h1>{product.name}</h1>
					<span className="chip">{product.type.name}</span>
				</div>
				<TabsContainer />
			</div>
			<div className="user_details">
				<User />
				{product && (
					<GoogleMap
						center={{
							lat: Math.round(product.company.address.latitude * 1000) / 1000,
							lng: Math.round(product.company.address.longitude * 1000) / 1000
						}}
						zoom={18}
						address={product.company.address}
					/>
				)}
			</div>
		</div>
	);
}

export default Product;
