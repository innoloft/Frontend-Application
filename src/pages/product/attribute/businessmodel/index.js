/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../../../../redux/actions/product/product.actions';
import './styles/businessmodel.scss';

export const BusinessModel = (props) => {
	const [businessmodel, setBusinessmodel] = React.useState(props.businessModel.name);
	const [active, setActive] = React.useState(false)


	const handleEdit = async (businessModel) => {
		setBusinessmodel(businessModel.target.value);
		setActive(true);
		await props.editProduct(businessModel.target.value)
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const tryEditBusinessModel = await props.editProduct(businessmodel);
			if (tryEditBusinessModel.fulfilled) {
				alert('Edit was successful');
			} else {
				alert('Something went wrong');
			}
		} catch (error) { }
	};

	return (
		<div className="bussinesmodel__wrapper">
			<form onSubmit={handleSubmit}>
				<input
					value={businessmodel}
					onChange={(e) => handleEdit(e)}
					className={active ? 'active' : 'inactive'}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
				/>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	product: state.product,
});

const mapDispatchToProps = {
	editProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessModel);
