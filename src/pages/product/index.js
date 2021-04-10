/** @format */

import React from 'react';
import { connect } from 'react-redux';
import './styles/product.scss';
import { getProduct } from '../../redux/actions/product/product.actions';
import { getTRL } from '../../redux/actions/Trl/trl.actions';
import { getConfig } from '../../redux/actions/config/config.actions';
import Attribute from './attribute';
import Map from '../../components/Map';


const Product = (props) => {
	const [activeTab, setActiveTab] = React.useState('description');
	const { getProduct, getTRL, getConfig } = props;

	React.useEffect(() => {
		const fetchProduct = async () => {
			return await getProduct();
		};

		const fetchTrl = async () => {
			return await getTRL()
		}

		const fetchConfig = async () => {
			return await getConfig();
		}

		fetchProduct();
		fetchTrl();
		fetchConfig()
	}, [getProduct, getTRL, getConfig]);

	return (
		<div className="product__wrapper">
			<div className="product__details">
				<div className="product__image">
					<img src={props?.product?.product?.picture} alt="product" />
				</div>
				<div className="product__main-info">
					<p>
						<strong>Product Title:</strong> {props?.product?.product.name}
					</p>
					<p>
						<strong>Product Type:</strong> {props?.product?.product?.type?.name}
					</p>
				</div>
				<div className="product__tabs">
					<button className={`${activeTab === 'description'}`} onClick={() => setActiveTab('description')}>
						Description
					</button>
					<button className={`${activeTab === 'attributes'}`} onClick={() => setActiveTab('attributes')}>
						Attributes
					</button>
				</div>

				<div className="tab__content">
					{activeTab === 'description' ? (
						<div>
							<h1>Product Description</h1>
							<p className="product__description"> {props?.product?.product?.description}</p>
						</div>
					) : (
						<Attribute product={props?.product?.product} trl={props?.trl} />
					)}
				</div>
			</div>

			<div className="user__details">
				{
					props?.config?.getConfigSuccess?.hasUserSection ? <div className="user__info">
						<img src={props?.product?.product?.user?.profilePicture} alt="user" />
						<p>
							{props?.product?.product?.user?.firstName} {props?.product?.product?.user?.lastName}
						</p>
						<p>{props?.product?.product?.company?.name}</p>
					</div> : null
				}

				<div className="map">
					<Map address={props?.product?.product?.company?.address} />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	product: state.product,
	trl: state.trl,
	config: state.config
});

const mapDispatchToProps = {
	getProduct,
	getTRL,
	getConfig
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
