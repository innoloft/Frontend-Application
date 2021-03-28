import { css } from '@emotion/css';
import React from 'react';
import { Header, Sidebar } from '../components';

const layoutStyle = css`
	display: flex;
	padding-bottom: 3rem;
	padding: 2rem;

	@media (max-width: 650px) {
		flex-direction: column;
		padding: 0;
	}
`;

const content = css`
	padding-left: 1rem;
	width: 100%;

	@media (max-width: 650px) {
		padding: 0;
	}
`;

export const MainLayout: React.FC<any> = ({ children }) => {
	return (
		<>
			<Header />
			<div className={layoutStyle}>
				<Sidebar />
				<div className={content}>{children}</div>
			</div>
		</>
	);
};
