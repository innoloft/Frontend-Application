import styled from 'styled-components/macro';

export const Container = styled.div`
	margin-top: 3rem;
	font-size: 0.9rem;
`;
export const Inner = styled.div``;
export const Header = styled.div`display: flex;`;
export const Tab = styled.div`
	padding: 0.75rem;
	cursor: pointer;
	transition: all 250ms ease;

	&:hover {
		background: gainsboro;
	}

	&.selected {
		background: #272e71;
		color: #fff;
	}

	&.selected:hover {
		background: #3f4584;
	}
`;
export const Content = styled.div`
	.title {
		font-weight: 700;
	}
`;
