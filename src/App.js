import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/Header'
import Body from './components/Body'
import Details from './components/Details'
import Button from './components/Details'
import { BASE_URL, API_KEY } from './constants/constants'
import "./App.css";

function App() {

  const [data, setData] = useState([])

  // const changeDate = () => {date + 1 };

  useEffect(() => {
    axios.get(`${BASE_URL}/apod?${API_KEY}`)
    .then( res =>{
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="App">
      <Header hData={data}/>
      <Button btData={data.date}/>
      <Body bData={data}/>
      <Details dData={data}/>
    </div>
  );
}

export default App;
