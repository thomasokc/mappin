import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

// routes
import Home from "./pages/Home";
import Map from "./pages/Map";
import Info from "./pages/Info"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Info" element={<Info/>}/>
      </Routes>
      <Map/>
    </Router>
  );
}

export default App;
