/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../../../../redux/actions/product/product.actions';
import './styles/category.scss';

const Category = (props) => {
	const [category, setCategory] = React.useState(props.category.name);
	const [active, setActive] = React.useState(false)

	const handleEdit = async (category) => {
		setCategory(category.target.value);
		setActive(true);
		await props.editProduct(category.target.value);
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const tryEditCategory = await props.editProduct(props.category.id);
			if (tryEditCategory.fulfilled) {
				alert('Edit was successful');
			} else {
				alert('Something went wrong');
			}
		} catch (error) { }
	};
	return (
		<div className="category__wrapper">
			<form onSubmit={handleSubmit}>
				<input value={category}
					onChange={(e) => handleEdit(e)}
					className={active ? 'active' : 'inactive'}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Category);
