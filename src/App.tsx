import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Cart from './pages/Cart';
import Catalog from './pages/catalog';
import Login from './pages/login';
import Urabn from './pages/catalog/Urabn';
import Stealth from './pages/catalog/Stealth';
import Nova from './pages/catalog/Nova';
import Velocity from './pages/catalog/Velocity';
import Signup from './pages/signup';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/catalog/urban' element={<Urabn />} />
      <Route path='/catalog/stealth' element={<Stealth />} />
      <Route path='/catalog/nova' element={<Nova />} />
      <Route path='/catalog/velocity' element={<Velocity />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
     </Routes>
    </div>
  );
}

export default App;
