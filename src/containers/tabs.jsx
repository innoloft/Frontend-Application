import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Tabs from '../components/tabs';
import mainHttp from '../api/axios';
import { useDispatch } from 'react-redux';
import {
	selectProduct,
	addCategory,
	updateCategory,
	addBusinessModel,
	updateBusinessModel,
	updateTRL
} from '../slices/productSlice';

function TabsContainer() {
	const dispatch = useDispatch();
	const { product, loading } = useSelector(selectProduct);
	const [ selected, setSelected ] = useState(0);
	const [ trl, setTrl ] = useState();
	const [ isEditing, setIsEditing ] = useState(false);
	const [ newCategory, setNewCategory ] = useState('');
	const [ newModel, setNewModel ] = useState('');

	useEffect(
		() => {
			async function fetchData() {
				const trl = await mainHttp.getTRL();
				console.log(trl);
				setTrl(trl);
			}
			if (isEditing && (!trl || trl.length === 0)) fetchData();
		},
		[ isEditing, trl ]
	);

	const updateProduct = async () => {
		console.log(product);
		const response = await mainHttp.updateProduct(product);
		if (response) setIsEditing(false);
	};

	const renderContent = () => {
		switch (selected) {
			case 1:
				return (
					<React.Fragment>
						<div className="attributes">
							<div className="categories">
								<p className="title">Categories</p>
								{product.categories.map((category, i) => {
									return isEditing ? (
										<input
											type="text"
											value={category.name}
											key={category.id}
											onChange={({ target }) =>
												dispatch(updateCategory({ index: i, value: { ...category, name: target.value } }))}
										/>
									) : (
										<p key={category.id}>{category.name}</p>
									);
								})}
								<input
									type="text"
									value={newCategory}
									onChange={({ target }) => {
										setNewCategory(target.value);
									}}
									onKeyDown={({ code }) => {
										if (code === 'Enter') {
											setNewCategory('');
											dispatch(addCategory({ name: newCategory }));
										}
									}}
								/>
							</div>

							<div className="models">
								<p className="title">Business Models</p>
								{product.businessModels.map((model, i) => {
									return isEditing ? (
										<input
											type="text"
											value={model.name}
											key={model.id}
											onChange={({ target }) =>
												dispatch(updateBusinessModel({ index: i, value: { ...model, name: target.value } }))}
										/>
									) : (
										<p key={model.id}>{model.name}</p>
									);
								})}
								<input
									type="text"
									value={newModel}
									onChange={({ target }) => {
										setNewModel(target.value);
									}}
									onKeyDown={({ code }) => {
										if (code === 'Enter') {
											setNewModel('');
											dispatch(addBusinessModel({ name: newModel }));
										}
									}}
								/>
							</div>

							<div className="trl">
								<p className="title">Technology Readiness Level</p>
								{isEditing && trl ? (
									<select
										onChange={({ target }) => dispatch(updateTRL(trl.find((level) => level.id === target.value)))}
										value={product.trl.id}
									>
										{trl.map(({ id, name }) => (
											<option key={id} value={id}>
												{name}
											</option>
										))}
									</select>
								) : (
									product.trl.name
								)}
							</div>
						</div>
						<div className="buttons">
							<div
								className={`button ${isEditing ? 'secondary' : ''}`}
								onClick={() => setIsEditing((prevVal) => !prevVal)}
							>
								{isEditing ? 'Cancel' : 'Edit'}
							</div>
							{isEditing && (
								<div className="button" onClick={() => updateProduct()}>
									Submit
								</div>
							)}
						</div>
					</React.Fragment>
				);
			default:
				return (
					<React.Fragment>
						<p>{product.description}</p>
					</React.Fragment>
				);
		}
	};

	return (
		<Tabs>
			<Tabs.Header
				labels={[ { id: 1, name: 'Description' }, { id: 2, name: 'Attributes' } ]}
				selected={selected}
				handleOnClick={setSelected}
			/>
			<Tabs.Content>
				<hr />
				{renderContent()}
			</Tabs.Content>
		</Tabs>
	);
}

export default TabsContainer;
