import React, { useState, useEffect } from 'react';
import BookInfo from './BookInfo';

const HomePage = () => {

  // code to generate array of BookInfo components using a loop
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    return fetch('api/books').then((res) => {
      console.log(res);
      setProducts(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Featured Products
      </h1>
      <div>
        {products.map((product) => (
          <div key={products.product_id}>
            <img src={products.product_id.jpg} />
            <h3>{products.book_title}</h3>
            <p>{products.author}</p>
          </div>
        ))}
      </div>
    </div> 
  );

};

export default HomePage;