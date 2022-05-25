import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './components/Homepage';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirm';


// set up App functional component
const App = () => {

  const [cartQuantity, setCartQuantity] = useState(0);
  console.log(cartQuantity);
  const test = 'test';
  console.log(test);
  // space for React Hooks
 
  
  
  return (
    <div className="App">
      <NavBar cartQuantity={cartQuantity}/>
        <h1 className="font-bold text-2xl text-blue-900">
          Hello PEOPLE from the App Page - heres the changes!{cartQuantity}{test}
        </h1>
      {test}
      {cartQuantity}
      <HomePage setCartQuantity={setCartQuantity}/>
      <ProductPage setCartQuantity={setCartQuantity}/>
      <Checkout />
      <Confirmation />
      {/* <HashRouter>
        <Routes>
          <Route path = '/' element={<HomePage />} />
          <Route path = '/product' element={<ProductPage />} />
          <Route path = '/checkout' element={<Checkout />} />
          <Route path = '/confirmation' element={<Confirmation />} />
        </Routes>
      </HashRouter> */}
    </div>
  );
};

export default App;
