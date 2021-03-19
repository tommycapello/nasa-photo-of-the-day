import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
h1{
  font-family: cursive;
  font-size: 4rem;
}
h2{
  font-family:cursive;
  font-size:2rem;
}`

const Header = (props) => {

  const { hData} = props;

  return (
    <StyledHeader className='header'>
      <h1>{hData.title}</h1>
      <h2>Today's Date: {hData.date} </h2>
    </StyledHeader>
  )
}

export default Header;