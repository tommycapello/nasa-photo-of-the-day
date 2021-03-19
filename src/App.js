import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/Header'
import Body from './components/Body'
import { BASE_URL, API_KEY } from './constants/constants'
import "./App.css";

function App() {

  const [data, setData] = useState([])
  const [year, setYear] = useState(2021)
  const [month, setMonth] = useState(3)
  const [day, setDay] = useState(19)

  useEffect(() => {
    axios.get(`${BASE_URL}/apod?${API_KEY}&date=${year}-${month}-${day}`)
    .then( res =>{
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [year, month, day])

  return (
    <div className="App">
      <Header hData={data}/>
      <button onClick={() => setYear(year - 1)}> Go Back One Year </button>
      <button onClick={() => setMonth(month - 1)}> Go Back One Month </button>
      <button onClick={() => setDay(day - 1)}> Go Back One Day </button>
      <Body bData={data}/>
    </div>
  );
}

export default App;