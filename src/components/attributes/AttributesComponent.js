import React from "react";

function AttributesComponent({
	product,
	trl,
	handleCategoryChange,
	handleBusinessModelChange,
	handleAddTlr,
	handleAddCategories,
	handleAddBusinessModel,
}) {
	return (
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
						handleAddCategories(event, product.categories?.length + 1)
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
						handleAddBusinessModel(event, product.businessModels?.length + 1)
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
	);
}

export default AttributesComponent;
