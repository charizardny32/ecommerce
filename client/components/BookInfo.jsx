import React, { useState, useEffect } from 'react';
// import calvin_cover from '../assets/calvin-book.jpeg'; 
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

// props: book_title, author, image, price, product_id
const BookInfo = (props) => {
  const { bookinfo, setTotal, ISBN, price, title, author, image, quantity, description, total, purchase, setPurchase, setBookinfo } = props; 
  //console.log('info from BookInfo componenet:', bookinfo);
  //console.log(setTotal);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`/api/books/${products.product_id}`)
  //     .then(res => res.json())
  //     .then(data => {console.log(data); setData(data);});
  // }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" align="center">
      <img src={bookinfo.image} />
      <h5 className="text-gray-900 text-xl font-medium mb-2">{bookinfo.title}</h5>
      <p className="text-gray-700 text-base mb-4"><strong>{bookinfo.author}</strong></p>
      <p className="text-gray-700 text-base mb-4">U.S. ${bookinfo.price} | ISBN {bookinfo.ISBN}</p>
      <p className="text-gray-700 text-base mb-4">{bookinfo.description}</p>
      <AddToCartButton ISBN={ISBN} price={bookinfo.price} title={title} author={author} image={image} quantity={quantity} setTotal={setTotal} total={total} purchase={purchase} setPurchase={setPurchase} setBookinfo={setBookinfo} />

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