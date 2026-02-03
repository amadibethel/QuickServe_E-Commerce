import { CartItem } from "../store/cart.store";

export const calculateSubtotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const calculateVAT = (subtotal: number) =>
  subtotal * 0.075;

export const calculateTotal = (subtotal: number) =>
  subtotal + calculateVAT(subtotal);
