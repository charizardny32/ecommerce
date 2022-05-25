import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import ProductPage from './components/ProductPage';


const App = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/books")
      .then(res => res.json())
      .then(data => {console.log(data); setProducts(data);});
  }, []);
  
  return (
    <div className="App">
      <Navbar count={count} />
      <Routes>
      
        <Route path='/' element={<ProductPage products={products} setCount={setCount} count={count}/>} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
