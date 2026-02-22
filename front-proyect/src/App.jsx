import React, { useState } from 'react';
import './App.css';
import AdminProductos from './components/adminProduct'; // Revisa que la 'a' sea minúscula como en tu carpeta
import Hero from './components/hero';
import Main from './components/main';
import Destacados from './components/destacados';
import Nosotros from './components/nosotros';
import Footer from './components/footer';
import Marcas from './components/marcas';
import Login from './components/login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ... otros imports (React, componentes, etc)

import { auth } from './firebase/config'; // <--- ESTA ES LA ÚNICA QUE NECESITÁS DE FIREBASE

function App() {
  return (
    <Router>
      <Routes>



        <Route path="/" element={
          <>

            <Hero />
            <Main />
            <Marcas/>
            <Destacados />
            <Footer/>
          </>


        } />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminProductos />} />
        <Route path="/nosotros" element={<Nosotros />} />
      
      </Routes>
    </Router>
  );
}

export default App;