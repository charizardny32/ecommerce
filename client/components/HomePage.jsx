import React, { useState, useEffect } from 'react';
import BookInfo from './BookInfo';
import ISBN9781480355453 from '../assets/9781480355453.jpg';
import ISBN9781495024429 from '../assets/9781495024429.jpg';
import ISBN9781480355460 from '../assets/9781480355460.jpg';
import ISBN9781493061174 from '../assets/9781493061174.jpg';

const HomePage = ({ products }) => {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Featured Products
      </h1>
      { products.map((p) => (
      <div key={p.product_id}>
      <img src={p.product_id.jpg} />
      <h3>{p.book_title}</h3>
      <p>{p.author}</p>
      </div>)) }
    </div> 
  );

};

export default HomePage;


// CODE GRAVEYARD
// import React from 'react';
// import BookInfo from './BookInfo';

// const HomePage = () => {

//   // code to generate array of BookInfo components using a loop

//   return (
//     <div>
//       <BookInfo />
//       <BookInfo />
//     </div>
//   );

// };

// export default HomePage;