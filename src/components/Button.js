import React, { useState, useEffect} from 'react';

const Button = (data) => {

    const [date, setDate] = useState(data)

    useEffect(() => {

    },[])

    return (
    <>
     <h2>{date}</h2>
     <button className='btn' onClick={() => setDate(date - 1)}> See Yesterday's Picture </button>
     </>
    )
}

export default Button;