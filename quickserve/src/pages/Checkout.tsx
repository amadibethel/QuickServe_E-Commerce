import PaystackPop from "@paystack/inline-js";
import { useCartStore } from "../store/cart.store";
import { total } from "../utils/calculations";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10)
});

export default function Checkout() {
  const items = useCartStore(state => state.items);
  const clearCart = useCartStore(state => state.clearCart);
  const navigate = useNavigate();

  const handlePay = (formData: any) => {
    const validation = schema.safeParse(formData);

    if (!validation.success) {
      validation.error.issues.forEach((err: any) =>
        alert(err.message)
      );
      return;
    }

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_KEY,
      email: formData.email,
      amount: total(items) * 100,
      onSuccess: (transaction: any) => {
        clearCart();
        navigate("/success", { state: transaction });
      }
    });
  };

  return <button onClick={() => handlePay({})}>Pay Now</button>;
}
