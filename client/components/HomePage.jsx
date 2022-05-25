import React, { useState, useEffect } from 'react';
import BookInfo from './BookInfo';

const HomePage = (props) => {
  const { setCartQuantity } = props;
setCartQuantity(1);

  // code to generate array of BookInfo components using a loop
  const [books, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('api/books')
    .then(response => response.json())
    .then(data => {
      setProducts(data.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Featured Products
      </h1>
      <div>
        {books}
      </div>
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