import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import HomePage from './components/Homepage';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirm';
// import './App.css';

// set up App functional component
const App = () => {
  // space for React Hooks

  const style = {
    color: "silver",
    shape: "pill",
    height: 50
  };
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <h1 className="font-bold text-2xl text-blue-900">
          Hello world from the App Page!
        </h1>
        <Routes>
          <Route path = '/' element={<HomePage />} />
          <Route path = '/product' element={<ProductPage />} />
          <Route path = '/checkout' element={<Checkout style={style} fundingSource={"paypal"} />} />
          <Route path = '/confirmation' element={<Confirmation />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
