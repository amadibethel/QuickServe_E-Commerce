import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../api/products";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const items = get().items;
        const existing = items.find(i => i.id === product.id);

        if (existing) {
          set({
            items: items.map(i =>
              i.id === product.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
      },
      removeItem: (id) =>
        set({ items: get().items.filter(i => i.id !== id) }),
      updateQuantity: (id, qty) =>
        set({
          items: get().items.map(i =>
            i.id === id ? { ...i, quantity: qty } : i
          )
        }),
      clearCart: () => set({ items: [] })
    }),
    { name: "quickserve-cart" }
  )
);
