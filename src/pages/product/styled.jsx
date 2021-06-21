import styled from 'styled-components'
import { SCREEN } from '../../utils/config'

export const Wrapper = styled.main`
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	column-gap: 1rem;
	@media (max-width: ${SCREEN.sm}) {
		display: flex;
		flex-direction: column;
	}
`

export const Left = styled.div`
	grid-column: span 2 / span 2;
	display: grid;
	grid-template-rows: auto;
	row-gap: 1rem;
`

export const Right = styled.div`
	display: grid;
	grid-template-rows: auto;
`

export const Img = styled.img`
	height: 100px;
`

export const TextLarge = styled.p`
	margin: 0;
	font-size: 1.25rem;
	line-height: 1.75rem;
`

export const Textbase = styled.p`
	margin: 0;
	font-size: 1rem;
	line-height: 1.5rem;
`

export const TextPad = styled(TextLarge)`
	padding-top: 1rem;
`

export const Div = styled.div`
	display: flex;
	background-color: ${(props) => props.color ?? ''};
	flex-direction: ${(props) => props.dir ?? 'column'};
	align-items: center;
`

export const DivGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1rem;
`

export const Button = styled.button`
	padding: 0.75rem;
	cursor: pointer;
`
export const TabContent = styled.div``

export const Des = styled.div`
	display: ${(props) => props.show};
`
export const Atr = styled.div`
	display: ${(props) => props.show};
`
