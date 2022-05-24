import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/Homepage.jsx';
import ProductPage from './components/ProductPage.jsx';
import Checkout from './components/Checkout.jsx';
import Confirmation from './components/Confirm.jsx';


// set up App functional component
const App = () => {

  // space for React Hooks

  return (
    <div className="App">
      <HashRouter>
        {/* test */}
        <button>A button</button>
        <Navbar />
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
