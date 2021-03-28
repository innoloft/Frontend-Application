import React from 'react';
import { css } from '@emotion/css';
import { Link } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConfiguration, selectConfig } from '../app';

export const Header = () => {
	const dispatch = useDispatch();
	const { config } = useSelector(selectConfig);

	React.useEffect(() => {
		// conditionally fetch config
		dispatch(fetchConfiguration());
	}, [dispatch]);

	const header = css`
		position: sticky;
		top: 0;
		width: 100%;
		z-index: 10;
		background-color: ${config.mainColor};
		padding: 1rem 2rem;
		display: flex;
		.logo {
			width: 150px;
			filter: invert(900%) brightness(900%) contrast(500%);
		}
	`;

	return (
		<div className={header}>
			<Link to='/'>
				<img src={config.logo} alt='innoloft' className={'logo'} />
			</Link>
		</div>
	);
};
