import React from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
font-size:3rem;
display:flex;
flex-direction: column;
justify-items: center;
img:hover{
width:100%;
}
`

const Body = props => {
    const { bData } = props;
    return (
        <StyledBody>
        <img
            alt ='NASA POTD'
            src={bData.url}
        />
        <p>{bData.explanation}</p>
        </StyledBody>
    )
  }

export default Body