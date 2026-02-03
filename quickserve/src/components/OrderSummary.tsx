import type { CartItem } from "../store/cart.store";
import {
  calculateSubtotal,
  calculateVAT,
  calculateTotal
} from "../utils/calculations";

interface Props {
  items: CartItem[];
}

const OrderSummary = ({ items }: Props) => {
  const subtotal = calculateSubtotal(items);
  const vat = calculateVAT(subtotal);
  const total = calculateTotal(subtotal);

  return (
    <div style={{ borderTop: "1px solid #ccc", marginTop: 20 }}>
      <p>Subtotal: ₦{subtotal.toFixed(2)}</p>
      <p>VAT (7.5%): ₦{vat.toFixed(2)}</p>
      <h3>Total: ₦{total.toFixed(2)}</h3>
    </div>
  );
};

export default OrderSummary;
