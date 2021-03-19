import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/Header'
import Body from './components/Body'
import { BASE_URL, API_KEY } from './constants/constants'
import "./App.css";
import styled from 'styled-components'

const ButtonDiv = styled.div`
  color: black;
  display: flex;
  justify-content: space-evenly;
  &:hover {
    transform: rotate(360deg);
    transition-duration: 2s;
  }
  button {
    margin: 2%;
    width: 40%;
  }`

const AppDiv = styled.div`
background-color: grey;
display: flex-flow;
justify-content: space-evenly;
margin:5%;
padding:2%;`

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
    <AppDiv className="App">
      <Header hData={data}/>
      <ButtonDiv>
      <button onClick={() => setYear(year - 1)}> Go Back One Year </button>
      <button onClick={() => setMonth(month - 1)}> Go Back One Month </button>
      <button onClick={() => setDay(day - 1)}> Go Back One Day </button>
      </ButtonDiv>
      <Body bData={data}/>
    </AppDiv>
  );
}

export default App;