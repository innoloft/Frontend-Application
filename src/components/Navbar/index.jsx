/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { SCREEN } from '../../utils/config'
import { setNav } from '../../store/actions/nav'

const Nav = styled.nav`
	height: 2rem;
	padding-left: 2rem;
	padding-right: 2rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	display: flex;
	position: fixed;
	width: 100%;
	background-color: #272e71;
	z-index: 10;
	@media (max-width: ${SCREEN.mid}) {
		padding-left: 1rem;
	}
`

const Burger = styled.div`
	display: none;
	@media (max-width: ${SCREEN.mid}) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-right: 0.2rem;
	}
`

const Div = styled.div`
	width: 2rem;
	height: 0.2rem;
	background-color: #d6d6d6;
	margin-bottom: 0.1rem;
`

export default function index() {
	const dispatch = useDispatch()
	const nav = useSelector((state) => state.nav)
	console.log('nav', nav)

	const handleClick = () => {
		dispatch(setNav())
	}

	return (
		<Nav>
			<Burger as='button' onClick={handleClick}>
				<Div></Div>
				<Div></Div>
				<Div></Div>
			</Burger>
			<div className='bg-white'>
				<img
					src='https://img.innoloft.de/logo.svg'
					alt='logo'
					className='h-8'
				/>
			</div>
			<div></div>
		</Nav>
	)
}
