import { useCartStore } from "../store/cart.store";

interface Props {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
}

const CartItem = ({ item }: Props) => {
  const removeItem = useCartStore(state => state.removeItem);
  const updateQuantity = useCartStore(state => state.updateQuantity);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
      <div>
        <h4>{item.name}</h4>
        <p>₦{item.price}</p>
      </div>

      <div>
        <button
          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
        >
          -
        </button>

        <span style={{ margin: "0 8px" }}>{item.quantity}</span>

        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>

      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
