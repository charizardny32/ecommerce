import Card from "./Card";


const ProductPage = ({ products, setCount, count }) => {
  return (
    <div className="flex justify-center m-2">
      {/* <h1>Product Page!!!</h1> */}
      <div className="flex gap-6">
        {products.map(p => (
          <Card
            key={p.product_id}
            price={p.price}
            title={p.book_title}
            author={p.author}
            image={p.cover_image}
            quantity={p.quantity}
            setCount={setCount}
            count={count}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
