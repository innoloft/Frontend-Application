/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import route from '../../routes/list'
import { SCREEN } from '../../utils/config'

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	padding: 4px;
	gap: 1rem;
	width: 100%;
	position: absolute;
	top: 4rem;
	min-height: 100vh;

	@media (max-width: ${SCREEN.mid}) {
		flex-direction: column;
		display: flex;
	}
`

const Sidebar = styled.aside`
	background-color: #f7f7f7;
	padding: 1rem;
	@media (max-width: ${SCREEN.mid}) {
		display: ${(props) => (props.show ? 'block' : 'none')};
	}
`

const Body = styled.aside`
	grid-column: span 4 / span 4;
	background-color: #f7f7f7;
`

export default function index({ children }) {
	const show = useSelector((state) => state.nav)
	return (
		<Wrapper>
			<Sidebar show={show}>
				<p>
					<Link to={route.main}>Main</Link>
				</p>
				<p>
					<Link to={route.product}>Product</Link>
				</p>
			</Sidebar>
			<Body>{children}</Body>
		</Wrapper>
	)
}
