/** @format */

import React from 'react';
import BusinessModel from './businessmodel';
import Category from './category';
import './styles/attribute.scss';

const Attribute = (props) => {
	const [trlValue, setTRLValue] = React.useState(props.product.trl.id)

	const handleSelectTrl = (trl) => {
		setTRLValue(trl.target.value)
	}
	return (
		<div className="attr">
			<div className="category__section">
				<h3>Categories</h3>
				{props.product.categories.map((category) => {
					return <Category key={category.id} category={category} />;
				})}
			</div>

			<div className="bussinessmodel__section">
				<h3>Business Models</h3>
				{props.product.businessModels.map((businessModel) => {
					return <BusinessModel key={businessModel.id} businessModel={businessModel} />;
				})}
			</div>
			<div className="trl__section">
				<h3>TRL</h3>
				<p>{props.product.trl.name}</p>
				{
					props?.trl?.getTrlSuccess?.map((trl) => {

						return (
							<React.Fragment key={trl.id}>
								<input type="radio" id={trl.name} name="trl" value={trl?.id} checked={parseInt(trl.id) === trlValue ? "checked" : null} onChange={handleSelectTrl} />
								<label htmlFor={trl?.name}>{trl?.name}</label><br />
							</React.Fragment>
						)

					})
				}
			</div>
		</div>
	);
};
export default Attribute;
