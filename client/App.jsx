import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import ProductPage from './components/ProductPage';
import BookInfo from './components/BookInfo';


const App = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [purchase, setPurchase] = useState([]);
  const [bookinfo, setBookinfo] = useState({});

  useEffect(() => {
    fetch("/api/books")
      .then(res => res.json())
      .then(data => {console.log(data); setProducts(data);});
  }, []);
  
  return (
    <div className="App">
      <Navbar total={total}/>
      <Routes>
      
        <Route path='/' element={<ProductPage products={products} setTotal={setTotal} total={total} purchase={purchase} setPurchase={setPurchase} setBookinfo={setBookinfo} />} />
        <Route exact path='/:id' element={<BookInfo products={products} bookinfo={bookinfo} setTotal={setTotal} total={total} />} />
        <Route path='/checkout' element={<Checkout total={total} purchase={purchase} setTotal={setTotal} setPurchase={setPurchase} />} />
      </Routes>
    </div>
  );
};

export default App;
