import React, { useState } from "react";
import { connect } from "react-redux";
import {
	saveProduct,
	addCategories,
	addBusinessModel,
} from "../../redux/actions/productActions";
import { addTrl } from "../../redux/actions/trlActions";
import AttributesComponent from "../attributes/AttributesComponent";
import "./TabContent.css";

const processInput = (event, id) => {
	const newObject = { id, name: event?.target?.value };
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
		const updatedProduct = {
			...product,
			description: event?.target?.innerText,
		};
		saveProduct(updatedProduct).catch((error) => {
			console.log("Saving product failed", error);
		});
	};

	const handleCategoryChange = (event, category) => {
		const updatedProduct = {
			...product,
			categories: product.categories?.map((categoryItem) =>
				category.id === categoryItem.id
					? { id: category.id, name: event?.target?.innerText }
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
			businessModels: product.businessModels?.map((businessModelItem) =>
				businessModel.id === businessModelItem.id
					? { id: businessModel.id, name: event?.target?.innerText }
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
					<AttributesComponent
						product={product}
						trl={trl}
						handleCategoryChange={handleCategoryChange}
						handleBusinessModelChange={handleBusinessModelChange}
						handleAddTlr={handleAddTlr}
						handleAddCategories={handleAddCategories}
						handleAddBusinessModel={handleAddBusinessModel}
					/>
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
