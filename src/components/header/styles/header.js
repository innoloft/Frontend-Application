import styled from 'styled-components/macro';

export const Container = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 3.5rem;
	background: #272e71;
	display: flex;
	z-index: 3;
`;

export const Inner = styled.div`
	align-items: stretch;
	display: flex;
	justify-content: space-between;
	margin: auto;
	padding: 0 2rem;
`;

export const Logo = styled.img`
	width: 8.5rem;
	object-fit: contain;
	cursor: pointer;
`;
