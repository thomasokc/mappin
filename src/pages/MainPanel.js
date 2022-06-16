import React from "react";

function MainPanel() {
    return (
        <div>
          <h1>Control Pannel</h1>
          <p>Click to show your location</p>
          
          {/ *Ski API */}
          <div className="ski">
            <h3 className="name"></h3>
            <h4 className="region"></h4>
          </div>

        </div>
    )
}

export default MainPanel