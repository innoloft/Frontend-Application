import { css } from '@emotion/css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addBusinessModel,
	addCategory,
	fetchConfiguration,
	fetchTlr,
	selectConfig,
	selectTlr,
	updateBusinessModel,
	updateCategory,
	updateDescription,
	updateProduct,
	updateTRL,
} from '../app';

const buttons = css`
	display: flex;
	margin-top: 1rem;

	.button {
		color: #3d3d3d;
		background: #d6d6d6;
		height: 40px;
		display: flex;
		align-items: center;
		text-decoration: none;
		justify-content: center;
		cursor: pointer;
		padding: 0 1rem;
		margin-right: 1rem;

		&:hover {
			opacity: 0.7;
		}
	}

	.secondary {
		background: #272e71;
		color: white;
	}
`;

const attributes = css`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: minmax(auto, auto);
	grid-gap: 0.5rem;

	@media (max-width: 650px) {
		display: block;
	}

	.title {
		font-weight: 600;
		margin: 0;
		font-size: 1rem;
	}

	p {
		font-size: 14px;
	}

	input {
		border-radius: 0.4rem;
		border: 1px #7e8c89 solid;
		padding: 0.25rem;
		margin: 0.25rem 0;
		display: block;
	}
	select {
		padding: 0.25rem;
		border: 1px #7e8c89 solid;
		border-radius: 0.4rem;
		outline: none;
		width: 100%;
	}
`;

const DescriptionTab: React.FC<{ description: string }> = ({
	description,
	...rest
}) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = React.useState(false);
	const [value, setValue] = React.useState(description);

	const descriptionStyle = css`
		textarea {
			width: 100%;
			height: 200px;
		}
	`;

	return (
		<form className={descriptionStyle}>
			{isEditing ? (
				<>
					<textarea
						value={value}
						onChange={({ target }) => setValue(target.value)}
					/>
				</>
			) : (
				<div dangerouslySetInnerHTML={{ __html: description }} {...rest} />
			)}

			<div className={buttons}>
				<div className={`button`} onClick={() => setIsEditing(!isEditing)}>
					{isEditing ? 'Cancel' : 'Edit'}
				</div>
				{isEditing && (
					<div
						className='button secondary'
						onClick={() => {
							dispatch(updateDescription(value));
							setIsEditing(!isEditing);
						}}
					>
						Submit
					</div>
				)}
			</div>
		</form>
	);
};

const AttributesTab: React.FC<{ product: any }> = ({ product }) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = React.useState(false);
	const [newCategory, setNewCategory] = React.useState('');
	const [newModel, setNewModel] = React.useState('');

	const _updateProduct = async () => {
		await dispatch(updateProduct(product));
		setIsEditing(!isEditing);
	};

	const { tlr } = useSelector(selectTlr);

	React.useEffect(() => {
		// conditionally fetch tlr
		if (!tlr) {
			dispatch(fetchTlr());
		}
	}, [dispatch, tlr]);

	return (
		<>
			<form>
				<div className={attributes}>
					<div className='categories'>
						<h3 className='title'>Categories</h3>
						{product.categories.map((category: any, i: number) =>
							isEditing ? (
								<input
									type='text'
									key={category.id}
									value={category.name}
									onChange={({ target }) =>
										dispatch(
											updateCategory({
												index: i + 1,
												value: { ...category, name: target.value },
											})
										)
									}
								/>
							) : (
								<p key={category.id}>{category.name}</p>
							)
						)}
						{isEditing && (
							<input
								type='text'
								value={newCategory}
								onChange={({ target }) => {
									setNewCategory(target.value);
								}}
								onKeyDown={({ code }: any) => {
									if (code === 'Enter') {
										setNewCategory('');
										dispatch(addCategory({ name: newCategory }));
									}
								}}
							/>
						)}
					</div>

					<div className='models'>
						<p className='title'>Business Models</p>
						{product.businessModels.map((model: any, i: number) => {
							return isEditing ? (
								<input
									type='text'
									value={model.name}
									key={model.id}
									onChange={({ target }) =>
										dispatch(
											updateBusinessModel({
												index: i + 1,
												value: { ...model, name: target.value },
											})
										)
									}
								/>
							) : (
								<p key={model.id}>{model.name}</p>
							);
						})}
						{isEditing && (
							<input
								type='text'
								value={newModel}
								onChange={({ target }) => {
									setNewModel(target.value);
								}}
								onKeyDown={({ code }: any) => {
									if (code === 'Enter') {
										setNewModel('');
										dispatch(addBusinessModel({ name: newModel }));
									}
								}}
							/>
						)}
					</div>

					<div className='trl'>
						<p className='title'>Technology Readiness Level</p>
						{isEditing && tlr ? (
							<select
								onChange={({ target }) => {
									dispatch(
										updateTRL(tlr.find((item: any) => item.id === target.value))
									);
								}}
								value={product.trl.id}
							>
								{tlr.map(({ id, name }: any) => (
									<option key={id} value={id}>
										{name}
									</option>
								))}
							</select>
						) : (
							<p>{product.trl.name}</p>
						)}
					</div>
				</div>
				<div className={buttons}>
					<div className={`button`} onClick={() => setIsEditing(!isEditing)}>
						{isEditing ? 'Cancel' : 'Edit'}
					</div>
					{isEditing && (
						<div className='button secondary' onClick={() => _updateProduct()}>
							Submit
						</div>
					)}
				</div>
			</form>
		</>
	);
};

const TabNavigation = ({ name, isActive, ...rest }: any) => {
	const dispatch = useDispatch();
	const { config } = useSelector(selectConfig);

	React.useEffect(() => {
		// conditionally fetch config
		dispatch(fetchConfiguration());
	}, [dispatch]);

	const active = css`
		background: ${config.mainColor} !important;
		color: white !important;
	`;
	return (
		<div className={`navItemStyles ${isActive && active}`} {...rest}>
			{name}
		</div>
	);
};

const tabStyles = css`
	margin-top: 4rem;
	line-height: 1.5;

	.tabsWrapper {
		display: flex;
	}

	.navItemStyles {
		color: #3d3d3d;
		background: #d6d6d6;
		height: 50px;
		display: flex;
		align-items: center;
		text-decoration: none;
		justify-content: center;
		cursor: pointer;
		padding: 0 1rem;

		&:hover {
			opacity: 0.7;
		}
	}

	hr {
		margin: 0;
	}
`;

export const Tabs = ({ product }: any) => {
	const [tab, setTab] = React.useState(0);

	const tabs = [
		{
			id: 0,
			name: 'Description',
			content: <DescriptionTab description={product.description} />,
		},
		{
			id: 1,
			name: 'Attributes',
			content: <AttributesTab product={product} />,
		},
	];
	const TabContent = tabs[tab].content;

	return (
		<div className={tabStyles}>
			<div className='tabsWrapper'>
				{tabs.map((item) => (
					<TabNavigation
						key={item.id}
						name={item.name}
						isActive={tab === item.id}
						onClick={() => setTab(item.id)}
					/>
				))}
			</div>
			<hr />
			<div style={{ padding: '1rem' }}>{TabContent}</div>
		</div>
	);
};
