import { Product } from "../api/products";
import { useCartStore } from "../store/cart.store";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₦{product.price}</p>

      {product.stock === 0 ? (
        <button disabled>Out of Stock</button>
      ) : (
        <button onClick={() => addItem(product)}>Add to Cart</button>
      )}
    </div>
  );
}
