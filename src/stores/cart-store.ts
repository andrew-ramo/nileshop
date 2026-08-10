import type { Product } from "@/features/products/types/product";
import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product: Product) => {
    const existingItem = get().items.find((item) => item.id === product.id);
    if (existingItem) {
      set((state) => ({
        items: state.items.map((item) => {
          if (item.id === existingItem.id) {
            const updatedItem = { ...item, quantity: item.quantity + 1 };
            return updatedItem;
          }
          return item;
        }),
      }));
    } else {
      const newCartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
        quantity: 1,
      };
      set((state) => ({ items: [...state.items, newCartItem] }));
    }
  },
  removeItem: (id: number) => {
    const existingItem = get().items.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        set((state) => ({
          items: state.items.map((item) => {
            if (existingItem.id === item.id) {
              const updatedItem = { ...item, quantity: item.quantity - 1 };
              return updatedItem;
            }
            return item;
          }),
        }));
      } else {
        set((state) => ({
          items: state.items.filter((item) => item.id !== existingItem.id),
        }));
      }
    }
  },
  clearCart: () => {
    set(() => ({
      items: [],
    }));
  },
}));
