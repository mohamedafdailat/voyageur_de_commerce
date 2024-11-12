import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Model from './pages/Model';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/accueil" element={<Home />} />
                <Route path="/produits" element={<Products />} />
                <Route path="/commandes" element={<Orders />} />
                <Route path="/modele" element={<Model />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;