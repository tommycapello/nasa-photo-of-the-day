import React from 'react'

const Body = props => {
    const { bData } = props;
    return (
      <section>
        <img
            alt ='NASA POTD'
            src={bData.url}
        />
        <p>
            {bData.explanation}
        </p>
      </section>
    )
  }

export default Body