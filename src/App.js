import './App.css';
import React, { useState, useEffect } from "react"; 
import Home from "./components/Home/Home";
import Imprint from "./components/Imprint/Imprint";
import Privacy from "./components/Privacy/Privacy";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
