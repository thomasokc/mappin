import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Leaflet imports
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

import './App.css';

import MainPanel from "./pages/MainPanel";

function App() {

  // Clicking shows user location
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  return (
    <div className="App">

      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
      />

      {/* React v6 Routing, different from past projects */}
      <BrowserRouter>
        <Routes>
          {/* Control Pannel */}
          <Route path="src\pages\MainPanel.js" element={<MainPanel/>}/>
        </Routes>
      </BrowserRouter>

      {/* Leaflet Map */}
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>


    </div>
  );
}

export default App;
