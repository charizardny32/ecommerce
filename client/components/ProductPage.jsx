import Card from "./Card";


const ProductPage = ({ products, setTotal, total, purchase, setPurchase, setBookinfo }) => {
  return (
    <div className="flex justify-center m-2">
      {/* <h1>Product Page!!!</h1> */}
      <div className="flex gap-6">
        {products.map(p => (
          <Card
            p={p}
            key={p.product_id}
            ISBN={p.product_id}
            price={p.price}
            title={p.book_title}
            description={p.description}
            author={p.author}
            image={p.cover_image}
            quantity={p.quantity}
            setTotal={setTotal}
            total={total}
            purchase={purchase}
            setPurchase={setPurchase}
            setBookinfo={setBookinfo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
