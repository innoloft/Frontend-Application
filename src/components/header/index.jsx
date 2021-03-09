import React from 'react';
import { Container, Inner, Logo } from './styles/header';
import { useHistory } from 'react-router-dom';

function Header({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	const history = useHistory();
	return <Logo onClick={() => history.push(to)} {...restProps} />;
};

export default Header;
