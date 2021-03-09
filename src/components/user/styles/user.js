import styled from 'styled-components/macro';

export const Container = styled.div`
	text-align: center;
	p {
		color: #7e8c89;
		margin: 0;
	}
	@media (max-width: 1024px) {
		padding: 2rem 2rem 0 0;
	}
`;
export const Avatar = styled.img`
	max-width: 15rem;
	border-radius: 50%;
`;
export const Name = styled.div`
	font-weight: 600;
	font-size: 1.5rem;
	margin: 1rem 0 0.5rem;
`;
