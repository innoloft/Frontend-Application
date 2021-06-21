/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProduct } from '../../store/actions/product'
import {
	Wrapper,
	Div,
	DivGrid,
	Button,
	Img,
	TabContent,
	TextLarge,
	Textbase,
	Left,
	Right,
	Des,
	Atr,
	TextPad,
} from './styled'

export default function index() {
	const dispatch = useDispatch()
	const [tab, setTab] = useState('des')

	const product = useSelector((state) => state.product)
	console.log('product', product)

	useEffect(() => {
		if (!product.id) {
			dispatch(getProduct())
		}
	}, [])

	const handleSwitch = (tab) => {
		setTab(tab)
	}

	return (
		<Wrapper>
			<Left>
				<Img src={product?.picture} alt={product?.name} />
				<Div color='#d6d6d6'>
					<TextLarge>Product Info</TextLarge>
					<Textbase>title: {product?.name}</Textbase>
					<Textbase>type: {product?.type?.name}</Textbase>
				</Div>
				<DivGrid dir='row'>
					<Button onClick={() => handleSwitch('des')}>Description</Button>
					<Button onClick={() => handleSwitch('alt')}>Attribute</Button>
				</DivGrid>
				<TabContent>
					<TextLarge>Tab Content</TextLarge>
					<Des show={tab === 'des' ? 'block' : 'none'}>
						<Textbase
							dangerouslySetInnerHTML={{ __html: product.description }}
						/>
					</Des>
					<Atr show={tab === 'alt' ? 'block' : 'none'}>
						<TextPad>Business Model</TextPad>
						{product?.businessModels.map((item, i) => (
							<Textbase key={i}>{item.name}</Textbase>
						))}
						<TextPad>Categories</TextPad>
						{product?.categories.map((item, i) => (
							<Textbase key={i}>{item.name}</Textbase>
						))}
						<TextPad>TRL</TextPad>
						<Textbase>{product?.trl?.name}</Textbase>
					</Atr>
				</TabContent>
			</Left>
			<Right>
				<Div>
					<TextPad>User info</TextPad>
					<Img
						src={product?.user?.profilePicture}
						alt={product?.user?.firstName}
					/>
					<Textbase>
						Name: {product?.user?.firstName} {product?.user?.lastName}
					</Textbase>
					<Textbase>Company: {product?.company?.name}</Textbase>
				</Div>
				<Div>
					<TextPad>Map</TextPad>
				</Div>
			</Right>
		</Wrapper>
	)
}
