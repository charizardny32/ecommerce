function RemoveFromCartButton ({ ISBN, title, author, price, image, quantity, description, total, setTotal, purchase, setPurchase, setBookinfo, book }) {
  
  const decrementTotal = () => {
    
    console.log('target book title in decrementTotal', book[0]);

    const newPurchase = purchase.filter((removed) => {
      //remove item with a title match
      //console.log('filter method titles:', removed[0]);
       return removed[0] !== book[0];
    });

    //console.log('new purchase array', newPurchase);
    console.log('target book', book);
    setTotal(parseInt(total) - parseInt(book[4]));
    setPurchase(newPurchase);
    //console.log('purchase from decrementTotal', purchase);
    //setPurchase([[title, author, image, description], ...purchase]);
  };
  
  return (
  <button
  type="button"
  onClick={decrementTotal}
  className="inline-block px-6 py-2.5 mb-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
>
  Remove from Cart
</button>

  )

}

export default RemoveFromCartButton;