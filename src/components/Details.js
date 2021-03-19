import React from 'react'

const Details = (props) => {

  const { explanation, copyright } = props;

  return(
    <section className='details'>
      <p>{explanation}</p>
      <p>This image is copyrighted by: {copyright}</p>
    </section>
  )

}

export default Details