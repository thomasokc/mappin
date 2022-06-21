import React, { useState } from "react";
import axios from "axios";

import "./Home.css"

function Home() {

  ///// Form Stuff /////

  const url = ""
  const [data, setData] = useState({
    area: ""
  })

  function submit(e) {
    e.preventDefault(); // stops console from clearing when you submit
    axios.Axios.post(url, {
      area: data.area
    })
    .then(res=>{
      console.log(res.data)
    })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  ///// Ski API (https://rapidapi.com/joeykyber/api/ski-resort-forecast/) /////

  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://ski-resort-forecast.p.rapidapi.com/Vail/forecast',
    params: { units: 'i', el: 'top' },
    headers: {
      'X-RapidAPI-Key': 'e36e840a41msh2d5a4d7faeb397ap1c7d91jsn9beadf5586dd',
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

      <form onSubmit={(e)=>submit(e)}>
        <input onChange={(e)=>handle(e)} id="area" value={data.area} placeholder="Enter a ski area" type="text"></input>
        <button>Send it</button>
      </form>

    </div>
)
}

export default Home;