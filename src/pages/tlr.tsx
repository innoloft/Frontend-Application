import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTlr, selectTlr } from '../app';
import { RouteComponentProps } from '@reach/router';
import { css } from '@emotion/css';

const listStyle = css`
	padding: 1rem;
	margin: 1rem 0;
`;

export const TLR = (props: RouteComponentProps) => {
	const dispatch = useDispatch();
	const { tlr, loading, failed } = useSelector(selectTlr);

	React.useEffect(() => {
		// conditionally fetch tlr
		if (!tlr) {
			dispatch(fetchTlr());
		}
	}, [dispatch, tlr]);

	if (loading) {
		return <h1 className='loading'>Loading product...</h1>;
	}
	if (failed.value) {
		return <h1>Failed to load. Reason: {failed.reason}</h1>;
	}
	return (
		<div>
			<h1 className='loading'>TLR List</h1>

			<ul>
				{tlr.length &&
					tlr.map((item: any) => (
						<li className={listStyle} key={item.id}>
							{item.name}
						</li>
					))}
			</ul>
		</div>
	);
};
