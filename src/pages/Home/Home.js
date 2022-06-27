import React, { useState, useEffect } from "react";
import axios from "axios"; // We replaced axios with fetch to try some shit

import "./Home.css"

function Home() {

  const [endPoint, setEndPoints] = useState('')
  const [container, setContainer] = useState([])

  useEffect(() => {
    fetchMe()
  }, [endPoint])
    

    const fetchMe = () => {

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'e36e840a41msh2d5a4d7faeb397ap1c7d91jsn9beadf5586dd',
          'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
        }
      };
  
    fetch(`https://ski-resort-forecast.p.rapidapi.com/${endPoint}/forecast?units=i&el=top`, options)
      .then(async response => {
        try {
         const data = await response.json()
         console.log('response data?', data)
       } catch(error) {
         console.log('Error happened here!')
         console.error(error)
       }
      })
    }
  

  const onChangeHandler = (e) => {
    setEndPoints(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className="Home">

      <h1>Control Pannel</h1>
      <p>Click map to show your location</p>

      <form id="areaForm" className="areaForm" onSubmit={submitHandler}>
        <input placeholder="Enter a ski area" type="text" id="areaInput" value={endPoint} onChange={onChangeHandler}/>
        <button type="submit" id="submit">Send It</button>
      </form>

      {container.map((item) => {
        return (
          <p>{item}</p>
        )
      })}

    </div>
)



}

export default Home;