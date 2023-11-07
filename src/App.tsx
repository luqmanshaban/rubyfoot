import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Cart from './pages/Cart';
import Catalog from './pages/catalog';
import Login from './pages/login';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
