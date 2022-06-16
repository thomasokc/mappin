import React from "react";

import "./Home.css"

function Home() {
    return (
        <div className="Home">
          <h1>Control Pannel</h1>
          <p>Click to show your location</p>
          
          <div className="ski">
            <h3 className="name"></h3>
            <h4 className="region"></h4>
          </div>

        </div>
    )
}

export default Home;