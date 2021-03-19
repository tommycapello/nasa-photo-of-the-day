import React from 'react'

const Body = props => {
    const { bData } = props;
    return (
        <div>
        <img
            alt ='NASA POTD'
            src={bData.url}
        />
        <p>{bData.explanation}</p></div>
    )
  }

export default Body