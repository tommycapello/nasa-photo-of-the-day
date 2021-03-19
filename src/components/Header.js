import React from 'react'
const Header = (props) => {
  const { hData } = props;

  return (
    <header className='header'>
      <h1>{hData.title}</h1>
      <h2>{hData.date}</h2>
    </header>
  )
}

export default Header;