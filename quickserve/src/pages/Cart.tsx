import { Link } from "react-router-dom";
import { useCartStore } from "../store/cart.store";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  const items = useCartStore(state => state.items);

  if (items.length === 0) {
    return (
      <div>
        <h2>Your cart is empty 🛒</h2>
        <Link to="/">Go shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <OrderSummary items={items} />

      <Link to="/checkout">
        <button style={{ marginTop: 20 }}>
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;
