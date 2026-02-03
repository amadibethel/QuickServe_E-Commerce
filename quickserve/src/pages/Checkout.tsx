import { useState } from "react";
import { z } from "zod";
import PaystackPop from "@paystack/inline-js";
import { useCartStore } from "../store/cart.store";
import {
  calculateSubtotal,
  calculateTotal
} from "../utils/calculations";
import { useNavigate } from "react-router-dom";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number")
});

const Checkout = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const subtotal = calculateSubtotal(items);
  const total = calculateTotal(subtotal);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (items.length === 0) {
    navigate("/");
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    const validation = checkoutSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((err: any) => {
      console.log(err.message);
      });
      setErrors(fieldErrors);
      return;
    }

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_xxxxxxxxxxxxxxxxxxxxxx", // replace with Paystack PUBLIC key
      email: formData.email,
      amount: Math.round(total * 100), // kobo
      ref: `QS-${Date.now()}`,
      metadata: {
        custom_fields: [
          { display_name: "Customer Name", variable_name: "name", value: formData.name },
          { display_name: "Phone", variable_name: "phone", value: formData.phone }
        ]
      },
      onSuccess: (transaction: any) => {
        clearCart();
        navigate("/success", {
          state: {
            reference: transaction.reference,
            total
          }
        });
      },
      onClose: () => {
        alert("Payment cancelled");
      }
    });
  };

  return (
    <div>
      <h2>Checkout</h2>

      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
      />
      {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

      <h3>Total: ₦{total.toFixed(2)}</h3>

      <button onClick={handlePayment}>
        Pay with Paystack
      </button>
    </div>
  );
};

export default Checkout;
