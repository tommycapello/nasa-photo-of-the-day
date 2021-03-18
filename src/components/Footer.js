import React from 'react'

const Footer = (props) => {
  const { fData } = props;

  return(
    <footer className='footer'>
      {fData.copyright}
    </footer>
  )

}

export default Footer