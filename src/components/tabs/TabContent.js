import React, { useState } from "react";
import { connect } from "react-redux";
import {
	saveProduct,
	addCategories,
	addBusinessModel,
} from "../../redux/actions/productActions";
import { addTrl } from "../../redux/actions/trlActions";
import "./TabContent.css";

const processInput = (event, id) => {
	const newObject = { id, name: event?.target.value };
	event.target.value = "";
	return newObject;
};

function TabContent({
	product,
	saveProduct,
	addTrl,
	addCategories,
	addBusinessModel,
	trl,
	configuration,
}) {
	const [isAttributeTab, setIsAttributeTab] = useState(false);

	const handleDescriptionChange = (event) => {
		const updatedProduct = { ...product, description: event?.target.innerText };
		saveProduct(updatedProduct).catch((error) => {
			console.log("Saving product failed", error);
		});
	};

	const handleCategoryChange = (event, category) => {
		const updatedProduct = {
			...product,
			categories: product.categories.map((categoryItem) =>
				category.id === categoryItem.id
					? { id: category.id, name: event?.target.innerText }
					: categoryItem
			),
		};
		saveProduct(updatedProduct).catch((error) => {
			console.log("Saving product failed", error);
		});
	};

	const handleBusinessModelChange = (event, businessModel) => {
		const updatedProduct = {
			...product,
			businessModels: product.businessModels.map((businessModelItem) =>
				businessModel.id === businessModelItem.id
					? { id: businessModel.id, name: event?.target.innerText }
					: businessModelItem
			),
		};
		saveProduct(updatedProduct).catch((error) => {
			console.log("Saving product failed", error);
		});
	};

	const handleAddTlr = (event, id) => {
		if (event?.target.value === "") return;
		addTrl(processInput(event, id));
	};

	const handleAddCategories = (event, id) => {
		if (event?.target.value === "") return;
		addCategories(processInput(event, id));
	};

	const handleAddBusinessModel = (event, id) => {
		if (event?.target.value === "") return;
		addBusinessModel(processInput(event, id));
	};

	return (
		<div className="description">
			<div className="description__details">
				<div
					onClick={() => setIsAttributeTab(false)}
					style={{
						backgroundColor: !isAttributeTab
							? configuration.mainColor
							: "rgb(241, 239, 239)",
						color: !isAttributeTab ? "white" : "rgb(141, 141, 141)",
					}}>
					Description
				</div>
				<div
					onClick={() => setIsAttributeTab(true)}
					style={{
						backgroundColor: isAttributeTab
							? configuration.mainColor
							: "rgb(241, 239, 239)",
						color: isAttributeTab ? "white" : "rgb(141, 141, 141)",
					}}>
					Attribute
				</div>
			</div>
			<div className="description__attribute">
				{!isAttributeTab && (
					<div>
						<div
							contentEditable={true}
							suppressContentEditableWarning={true}
							onBlur={handleDescriptionChange}>
							{product.description}
						</div>
					</div>
				)}
				{isAttributeTab && trl && (
					<>
						<strong>Categories</strong>
						<ul className="description__attribute__list">
							{product.categories?.map((category, index) => (
								<li
									className="description__attribute__list__item"
									key={index}
									contentEditable={true}
									suppressContentEditableWarning={true}
									onBlur={(event) => handleCategoryChange(event, category)}>
									{category.name}
								</li>
							))}
							Add Category:
							<input
								onBlur={(event) =>
									handleAddCategories(event, product.categories.length + 1)
								}
								name="new-category"
							/>
						</ul>
						<strong>Business Model</strong>
						<ul className="description__attribute__list">
							{product.businessModels?.map((singleBusinessModel, index) => (
								<li
									className="description__attribute__list__item"
									key={index}
									contentEditable={true}
									suppressContentEditableWarning={true}
									onBlur={(event) =>
										handleBusinessModelChange(event, singleBusinessModel)
									}>
									{singleBusinessModel.name}
								</li>
							))}
							Add Business Model:
							<input
								onBlur={(event) =>
									handleAddBusinessModel(
										event,
										product.businessModels.length + 1
									)
								}
								name="new-businessModel"
							/>
						</ul>
						<select className="description__attribute__list">
							{trl?.map((singleTrl, index) => (
								<option
									className="description__attribute__list__item"
									key={index}
									value={singleTrl.name}>
									{singleTrl.name}
								</option>
							))}
						</select>
						<br />
						Add TRL:{" "}
						<input
							onBlur={(event) => handleAddTlr(event, trl.length + 1)}
							name="new-trl"
						/>
					</>
				)}
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		configuration: state.configuration,
		product: state.product,
	};
}

const mapDispatchToProps = {
	saveProduct,
	addTrl,
	addCategories,
	addBusinessModel,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabContent);
