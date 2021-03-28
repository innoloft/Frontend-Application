import React from 'react';
import { css } from '@emotion/css';
import { Link, LinkProps } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConfiguration, selectConfig } from '../app';

const navItemStyles = css`
	color: #3d3d3d;
	padding-left: 1rem;
	height: 50px;
	display: flex;
	width: 100%;
	align-items: center;
	text-decoration: none;

	&:hover {
		opacity: 0.7;
	}
	@media (max-width: 650px) {
		justify-content: center;
		padding-left: 0;
	}
`;

const sidebarStyle = css`
	width: 300px;
	overflow: hidden;
	margin-top: 1rem;
	scroll-padding-top: 1rem;

	@media (max-width: 650px) {
		display: flex;
		width: 100%;
	}
`;

const NavItem: React.FC<LinkProps<any>> = ({
	children,
	to = '/dashboard',
	...rest
}) => {
	const dispatch = useDispatch();
	const { config } = useSelector(selectConfig);

	React.useEffect(() => {
		// conditionally fetch config
		dispatch(fetchConfiguration());
	}, [dispatch]);

	const active = css`
		background: ${config.mainColor};
		color: white;
	`;

	return (
		<Link
			to={to}
			getProps={({ isCurrent }) => {
				// the object returned here is passed to the
				// anchor element's props

				return {
					className: isCurrent ? `${active} ${navItemStyles}` : navItemStyles,
				};
			}}
		>
			{children}
		</Link>
	);
};

const Paths = [
	{
		to: '/',
		children: 'Dashboard',
	},
	{
		to: 'product',
		children: 'Product',
	},
	// {
	// 	to: 'tlr',
	// 	children: 'TLR List',
	// },
];

export const Sidebar = () => {
	return (
		<nav className={sidebarStyle}>
			{Paths.map((path) => (
				<NavItem key={path.to} {...path} />
			))}
		</nav>
	);
};
