import React, { useState, useEffect } from 'react';
// import calvin_cover from '../assets/calvin-book.jpeg'; 
import { Link } from 'react-router-dom';

// props: book_title, author, image, price, product_id
const BookInfo = ({ products }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`/api/books/${products.product_id}`)
  //     .then(res => res.json())
  //     .then(data => {console.log(data); setData(data);});
  // }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" align="center">
      <img src={products[0].cover_image} />
      <h5 className="text-gray-900 text-xl font-medium mb-2">{products[0].book_title}</h5>
      <p className="text-gray-700 text-base mb-4"><strong>{products[0].author}</strong></p>
      <p className="text-gray-700 text-base mb-4">U.S. ${products[0].price} | ISBN {products[0].product_id}</p>
      <p className="text-gray-700 text-base mb-4">{products[0].description}</p>
    </div>
  );

};

export default BookInfo;


// CODE GRAVEYARD

// // props: book_title, author, image, price, product_id
// const BookInfo = ({ ISBN, price, title, author, image, quantity, description, setTotal, total }) => {
//   // const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   fetch(`/api/books/${ISBN}`)
//   //     .then(res => res.json())
//   //     .then(data => {console.log(data); setData(data);});
//   // }, []);

//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//       <img src={image} />
//       <h1>{title}</h1>
//       <h2>{author}</h2>
//       <p>{price} | {ISBN}</p>
//       <p>{description}</p>
//     </div>
//   );

// };