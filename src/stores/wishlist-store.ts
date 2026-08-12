import { create } from "zustand";
import type { Product } from "@/features/products/types/product";

type WishlistStore = {
  items: Product[];
  toggleItem: (product: Product) => void;
};

export const useWishlistStore = create<WishlistStore>((set) => ({
  items: [],
  toggleItem: (product: Product) => {
    set((state) => ({
      items: state.items.some((item) => item.id === product.id)
        ? state.items.filter((item) => item.id !== product.id)
        : [...state.items, product],
    }));
  },
}));
