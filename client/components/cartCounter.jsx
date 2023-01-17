import React from 'react';

const CartCounter = ({total}) => {
  
  return (
    <div className="bg grey">
      <h3>${total}</h3>
    </div>
    );
};

export default CartCounter;
