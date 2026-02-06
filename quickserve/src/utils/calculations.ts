import type { CartItem } from "../store/cart.store";

export const subtotal = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.price * i.quantity, 0);

export const vat = (items: CartItem[]) => subtotal(items) * 0.075;

export const total = (items: CartItem[]) => subtotal(items) + vat(items);
