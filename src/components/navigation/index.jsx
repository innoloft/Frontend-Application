import React from 'react';
import { Container, Inner, Menu, MenuItem } from './styles/navigation';

function Navigation({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Navigation.Menu = function NavigationMenu({ children, ...restProps }) {
	return <Menu {...restProps}>{children}</Menu>;
};

Navigation.MenuItem = function NavigationMenuItem({ path, label, icon, ...restProps }) {
	return (
		<MenuItem to={path} {...restProps}>
			<span>{label}</span>
		</MenuItem>
	);
};

export default Navigation;
