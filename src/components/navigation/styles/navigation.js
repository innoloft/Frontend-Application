import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	background: #fff;
	flex: 1;
	font-size: 0.9rem;
	margin-top: 6rem;
	height: calc(100vh - 6rem);

	@media (max-width: 1024px) {
		margin-top: 3.75rem;
		z-index: 3;
		height: calc(100vh - 3.75rem);
	}
`;
export const Inner = styled.div``;
export const Menu = styled.div`
	display: flex;
	flex-direction: column;
`;
export const MenuItem = styled(Link)`
	color: #445063;
  padding: 0.75rem;
	text-decoration: none;
	cursor: pointer;
  transition: all 250ms ease;

	&:hover {
    background: gainsboro;
	}
`;
