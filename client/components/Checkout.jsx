import React, { useState, useEffect } from 'react';

const Checkout = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      // .then(res => res.json())
      .then(res => console.log("checkout:", res));
  }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const res = await fetch('api/books');
  //     const res_1 = await res.json();
  //     console.log(res_1);
  //     setProducts(res_1.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div>
      <h1>Checkout Page!!!</h1>
    </div>
  );
};

export default Checkout;