import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { BASE_URL, API_KEY } from './constants/constants'
import "./App.css";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/apod?${API_KEY}&date=2020-06-28`)
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
      <Body bData={data}/>
      <Footer fData={data}/>
    </div>
  );
}

export default App;
