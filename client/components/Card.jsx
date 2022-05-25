function Card({ price, title, author, image, quantity, setCount, count }) {
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div class="flex justify-center">
      <div class="rounded-md shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img class="rounded-t-lg" src={image} alt="" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p class="text-gray-700 text-base mb-4">{author}</p>
          <button
            type="button"
            onClick={incrementCount}
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add to Cart
          </button>
          <br/>
          <button 
          type="button"
          // onClick={redirect to product page}
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Book Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
