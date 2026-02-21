import React, { useState } from 'react';
import './App.css';
import AdminProductos from './components/adminProduct'; // Revisa que la 'a' sea minúscula como en tu carpeta
import Hero from './components/hero';
import Main from './components/main';
import Destacados from './components/destacados';
import Nosotros from './components/nosotros';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>

            <Hero />
            <Main />
            <Destacados />
            <Footer/>
          </>


        } />
        <Route path="/admin" element={<AdminProductos />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  );
}

export default App;