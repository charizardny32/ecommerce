function AddToCartButton ({ ISBN, title, author, price, image, quantity, description, total, setTotal, purchase, setPurchase, setBookinfo }) {
  
  // const { price, setTotal} = props;

  //console.log('price from AddToCart component', price);
  const incrementTotal = () => {
    setTotal(parseInt(total) + parseInt(price));
    setPurchase([[title, author, image, description], ...purchase]);
  };
  return (
  <button
  type="button"
  onClick={incrementTotal}
  className="inline-block px-6 py-2.5 mb-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
>
  Add to Cart
</button>

  )

}

export default AddToCartButton;