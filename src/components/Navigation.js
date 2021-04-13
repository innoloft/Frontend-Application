import {Link} from 'react-router-dom'
import styled from 'styled-components'

/**
 * this 
 * @returns the navigation bar
 */
export const Navigation=()=>{
    return (
        <Container>
            <Link  to='/'>Main</Link>
            <Link  to='/Product'>Product</Link>
        </Container>
    )
}

const Container=styled.div`
width:20%;
min-width:20%;
display:flex;
flex-direction:column;
`