import { useCartStore } from "../store/cart.store";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useCartStore(state => state.items);

  if (!items.length) return <p>Your cart is empty</p>;

  return (
    <>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <OrderSummary />
      <Link to="/checkout">Proceed to Checkout</Link>
    </>
  );
}
