import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

function Card({ ISBN, price, title, author, image, quantity, description, setTotal, total, purchase, setPurchase, setBookinfo }) {

  const getBookDetails = () => {
    setBookinfo({ISBN, price, title,  author, image, description});
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
          <AddToCartButton ISBN={ISBN} price={price} title={title} author={author} image={image} quantity={quantity} setTotal={setTotal} total={total} purchase={purchase} setPurchase={setPurchase} setBookinfo={setBookinfo} />
          <br/>
          <Link to={`/${ISBN}`}><button 
          type="button"
          onClick={getBookDetails}
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
