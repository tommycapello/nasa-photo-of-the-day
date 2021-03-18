import React from 'react'
const Header = (props) => {
  const { hData } = props;

  return (
    <header className='header'>
      <h2>{hData.title}</h2>
        <h4>{hData.date}</h4>
    </header>
  )
}

export default Header;