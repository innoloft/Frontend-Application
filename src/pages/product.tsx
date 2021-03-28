import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchConfiguration,
	fetchProduct,
	selectConfig,
	selectProduct,
} from '../app';
import { RouteComponentProps } from '@reach/router';
import { css } from '@emotion/css';
import { GoogleMap, Tabs } from '../components';

const productContainer = css`
	display: flex;

	@media (max-width: 650px) {
		padding: 0 1rem;
		flex-direction: column;
	}
`;

const mainContent = css`
	flex: 7;
	margin-top: 2rem;
	img {
		text-align: center;
		width: 100%;
		object-fit: contain;
		height: 400px;
	}

	h1 {
		font-size: 3rem;
	}

	.badge {
		padding: 8px;
		border-radius: 50px;
		display: inline;
		font-size: 12px;
		background-color: #047857;
		color: white;
	}

	.type {
		margin-top: -1rem;
	}
`;

const aside = css`
	flex: 3;
	margin-top: 3rem;
	margin-left: 2rem;

	@media (max-width: 650px) {
		margin-left: 0;
	}

	.user {
		padding: 0 1rem;
		text-align: center;

		img {
			width: 60%;
			margin-left: auto;
			border-radius: 50%;
		}

		.name {
			font-weight: 600;
			font-size: 1.5rem;
			margin: 1rem 0 0.5rem;
		}

		p {
			color: #7e8c89;
		}
	}
`;

export const Product: React.FC<RouteComponentProps> = (props) => {
	const dispatch = useDispatch();
	const { product, loading, failed } = useSelector(selectProduct);
	const { config } = useSelector(selectConfig);

	React.useEffect(() => {
		dispatch(fetchConfiguration());
		// conditionally fetch product
		if (!product) {
			dispatch(fetchProduct());
		}
	}, [dispatch, product]);

	if (loading) {
		return <h1 className='loading'>Loading product...</h1>;
	}
	if (failed.value) {
		return <h1>Failed to load. Reason: {failed.reason}</h1>;
	}

	const { type, picture, name } = product;
	return (
		<div className={productContainer}>
			<main className={mainContent}>
				<img src={picture} alt={name} />

				<h1>{name}</h1>

				<div className='type'>
					<div className='badge'>{type.name}</div>
				</div>

				<Tabs color={config.mainColor} product={product} />
			</main>
			<aside className={aside}>
				{config.hasUserSection && (
					<div className='user'>
						<img
							src={product.user.profilePicture}
							alt={product.user.firstName}
						/>
						<h3 className='name'>
							{product.user.firstName} {product.user.lastName}
						</h3>
						<p>{product.name}</p>
					</div>
				)}

				{product && (
					<GoogleMap
						center={{
							lat: Math.round(product.company.address.latitude * 1000) / 1000,
							lng: Math.round(product.company.address.longitude * 1000) / 1000,
						}}
						zoom={18}
						address={product.company.address}
					/>
				)}
			</aside>
		</div>
	);
};
