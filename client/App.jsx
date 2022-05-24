import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './components/Homepage';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirm';


// set up App functional component
const App = () => {

  // space for React Hooks

  return (
    <div className="App">
      {/* <button>Test Button</button> */}
      <HashRouter>

        {/* <button>A button inside App.jsx</button> */}
        <NavBar />
        <Routes>
          <Route path = '/' element={<HomePage />} />
          <Route path = '/product' element={<ProductPage />} />
          <Route path = '/checkout' element={<Checkout />} />
          <Route path = '/confirmation' element={<Confirmation />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
