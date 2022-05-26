import { Link } from 'react-router-dom';

function Card({ ISBN, price, title, author, image, quantity, description, setTotal, total, purchase, setPurchase }) {
  const incrementTotal = () => {
    setTotal(parseInt(total) + parseInt(price));
    setPurchase([[title, author, image, description], ...purchase]);
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-md shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">{author}</p>
          <p>U.S. ${price}</p>
          <br/>
          <button
            type="button"
            onClick={incrementTotal}
            className="inline-block px-6 py-2.5 mb-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add to Cart
          </button>
          <br/>
          <Link to={`/${ISBN}`}><button 
          type="button"
          // onClick={redirect to product page}
          className="inline-block px-6 py-2.5 mb-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Book Details
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
