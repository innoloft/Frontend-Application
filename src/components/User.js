import styled from 'styled-components'

export const User=({data,company})=>{
    return (<Container>
        <SubContainer>
            <Img src={data.profilePicture} />
        </SubContainer>
        <SubContainer>
            <Text bold nowrap>{`${data.firstName} ${data.lastName}`}</Text>
            <Text nowrap>{company.name}</Text>
        </SubContainer>
    </Container>)
}

const Container=styled.div`
display:flex;
flex-direction:row;
margin-bottom:5px;
`

const SubContainer=styled.div`
display:flex;
flex-direction:column;
margin-right:5px;
`

const Text=styled.div`
${({bold})=>`${bold?'font-weight:bold;':''}`}
${({nowrap})=>`${nowrap?'white-space:nowrap;':''}`}
`

const Img=styled.img`
width:50px;
`
