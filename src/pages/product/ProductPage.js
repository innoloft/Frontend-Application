import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./ProductPage.css";

import { getProduct, saveProduct } from "../../redux/actions/productActions";
import { getTrl } from "../../redux/actions/trlActions";
import MapLocation from "../../components/map-location/MapLocation";
import TabContent from "../../components/tabs/TabContent";

function ProductPage({
	product,
	trl,
	getProduct,
	saveProduct,
	getTrl,
	configuration,
	...props
}) {
	const [location, setLocation] = useState(null);

	useEffect(() => {
		getProduct().catch((error) => {
			console.log("Loading products failed", error);
		});
		getTrl().catch((error) => {
			console.log("Loading trl failed", error);
		});
	}, [getProduct, getTrl]);

	useEffect(() => {
		if (product) {
			setLocation({
				address: product.company?.name,
				lat: +product.company?.address?.latitude,
				lng: +product.company?.address?.longitude,
			});
		}
	}, [product]);

	return product !== null ? (
		<div className="product">
			<div className="product__detail">
				<div className="product__detail__image">
					<img src={product.picture} alt={product.name} />
				</div>
				<div className="product__detail__info">
					<div className="product__detail__info__name">
						<span>{product.type?.name}</span>
						<h2>{product.name}</h2>
					</div>
					<div className="product__detail__info__investment">
						<h3>{product.investmentEffort}</h3>
					</div>
				</div>

				<div className="product__detail__category">
					{product.categories?.map((category, index) => (
						<span key={index} className="product-category">
							{category.name}
						</span>
					))}
				</div>
				{trl && <TabContent trl={trl} />}
			</div>
			<div className="product__user-details">
				{configuration.hasUserSection && (
					<div className="user-info">
						<strong>Contact Person</strong> <br />
						<img
							src={product.user?.profilePicture}
							alt={product.user?.firstName}
							className="user-info__image"
						/>
						<h5>
							{product.user?.firstName} {product.user?.lastName}
						</h5>
						<p>{product.user?.email}</p>
						<p>{product.user?.position}</p>
					</div>
				)}
				<div className="company-location">
					{location && <MapLocation location={location} zoomLevel={17} />}
				</div>
			</div>
		</div>
	) : (
		<h1 style={{ textAlign: "center" }}>Loading Product...</h1>
	);
}

ProductPage.propTypes = {
	product: PropTypes.object,
	tlr: PropTypes.array,
	getProduct: PropTypes.func.isRequired,
	saveProduct: PropTypes.func.isRequired,
	getTrl: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {
		product: state.product,
		trl: state.trl,
		configuration: state.configuration,
	};
}

const mapDispatchToProps = {
	getProduct,
	saveProduct,
	getTrl,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
