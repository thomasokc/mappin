import React, { useState } from "react";
import axios from "axios";

import "./Home.css"

function Home() {

  window.onload = function () {
    const areaForm = document.getElementById("areaForm")
    const areaInput = document.getElementById("areaInput")
    const submit = document.getElementById("submit")

    document.querySelector('form.areaForm').addEventListener('submit', function (e) {
      e.preventDefault();

      console.log(areaInput.value);
    })
  }



  

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

      <form id="areaForm" action="/" method="GET" className="areaForm">
        <input placeholder="Enter a ski area" type="text" id="areaInput"/>
        <button type="submit" id="submit">Send It</button>
      </form>

    </div>
)



}

export default Home;