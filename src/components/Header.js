
import styled from 'styled-components'

/**
 * this renders the header
 * @param {*} logo the logo to put on the header
 * @returns the header
 */
export const Header= ({logo})=>{
    return (
        <div>
        <Img src={logo} />
        </div>
    )
}

const Img=styled.img`
width:100px;
`