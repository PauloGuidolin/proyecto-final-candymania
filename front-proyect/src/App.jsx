import React, { useState } from 'react';
import './App.css';
import Hero from './components/hero';
import Main from './components/main';
import Destacados from './components/destacados';
import Nosotros from './components/nosotros';
import Footer from './components/footer';
import Marcas from './components/marcas';
import Login from './components/login';
import AdminGeneral from './components/adminGeneral';
import AdminProducto from './components/adminProducto';
import AdminCategorias from './components/adminCategorias';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ... otros imports (React, componentes, etc)

import { auth } from './firebase/config'; // <--- ESTA ES LA ÚNICA QUE NECESITÁS DE FIREBASE
import ProtectedRoute from './components/protectedRoute';
import adminProducto from './components/adminProducto';

function App() {
  return (
    <Router>
      <Routes>



        <Route path="/" element={
          <>

            <Hero />
            <Main />
            <Marcas />
            <Destacados />
            <Footer />
          </>


        } />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminGeneral />
          </ProtectedRoute>
        } />
        <Route path ="/admin/productos" element={<ProtectedRoute><AdminProducto/></ProtectedRoute>} />
        <Route path ="/admin/categorias" element={<ProtectedRoute><AdminCategorias/></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/nosotros" element={<Nosotros />} />

      </Routes>
    </Router>
  );
}

export default App;