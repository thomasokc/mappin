import React, { useState } from "react";
import axios from "axios";

import "./Home.css"

function Home() {

  const areaForm = document.getElementById("areaForm")
  const areaInput = document.getElementById("areaInput")
  const sendIt = document.getElementById("sendIt")

  

  ///// Ski API (https://rapidapi.com/joeykyber/api/ski-resort-forecast/) /////

  const options = {
    method: 'GET',
    url: 'https://ski-resort-forecast.p.rapidapi.com/vail/forecast',
    params: { units: 'i', el: 'top' },
    headers: {
      'X-RapidAPI-Key': 'e36e840a41msh2d5a4d7faeb397ap1c7d91jsn9beadf5586dd', // Need to hide API key
      'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });



  return (
    <div className="Home">

      <h1>Control Pannel</h1>
      <p>Click map to show your location</p>

      <form id="areaForm" action="/" method="GET">
        <input placeholder="Enter a ski area" type="text" id="areaInput"/>
        <input type="button" id="sendIt" value="send it"/>
      </form>

    </div>
)



}

export default Home;