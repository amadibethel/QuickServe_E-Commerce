import { useCartStore } from "../store/cart.store";

const ProductCard = ({ product }: any) => {
  const addItem = useCartStore(state => state.addItem);

  const outOfStock = product.stock === 0;

  return (
    <div style={{ border: "1px solid #ccc", padding: 12 }}>
      <h3>{product.name}</h3>
      <p>₦{product.price}</p>

      {outOfStock ? (
        <span style={{ color: "red" }}>Out of Stock</span>
      ) : (
        <button
          onClick={() =>
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1
            })
          }
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
