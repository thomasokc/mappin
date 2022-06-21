import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

// routes
import Home from "./pages/Home/Home";
import Map from "./pages/Map";
import Info from "./pages/Info/Info"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Info" element={<Info/>}/>
        </Routes>
        <Map/>
      </Router>
    </div>
  );
}

export default App;
